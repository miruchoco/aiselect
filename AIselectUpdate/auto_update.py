"""
AIselect Auto-Update Script
Gemini APIを使用してAIツールデータを自動更新します。
"""

import os
import re
import sys
import time
from datetime import datetime

try:
    from google import genai
    from google.genai import types
except ImportError:
    # フォールバック: 旧パッケージを試す
    try:
        import google.generativeai as genai_old
        USE_OLD_PACKAGE = True
    except ImportError:
        print("Error: google-genai is not installed.")
        print("Run: pip install google-genai")
        sys.exit(1)
else:
    USE_OLD_PACKAGE = False


def call_gemini_api(prompt: str, api_key: str, max_retries: int = 3) -> str:
    """Gemini APIを呼び出し、リトライ機能付き"""
    
    for attempt in range(max_retries):
        try:
            if USE_OLD_PACKAGE:
                # 旧パッケージを使用
                genai_old.configure(api_key=api_key)
                model = genai_old.GenerativeModel('gemini-1.5-flash')
                response = model.generate_content(prompt)
                return response.text
            else:
                # 新パッケージを使用
                client = genai.Client(api_key=api_key)
                response = client.models.generate_content(
                    model='gemini-2.0-flash',
                    contents=prompt,
                )
                return response.text
                
        except Exception as e:
            error_str = str(e)
            print(f"Attempt {attempt + 1}/{max_retries} failed: {error_str}")
            
            # レート制限エラーの場合はリトライ
            if "429" in error_str or "quota" in error_str.lower() or "rate" in error_str.lower():
                if attempt < max_retries - 1:
                    wait_time = (attempt + 1) * 60  # 1分、2分、3分と増加
                    print(f"Rate limit hit. Waiting {wait_time} seconds before retry...")
                    time.sleep(wait_time)
                    continue
            
            # その他のエラー、または最後のリトライ失敗
            if attempt == max_retries - 1:
                raise e
    
    raise Exception("Max retries exceeded")


def main():
    # パス設定
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(base_dir)
    ai_select_dir = os.path.join(project_root, "AIselect")
    script_js_path = os.path.join(ai_select_dir, "script.js")
    prompt_path = os.path.join(base_dir, "prompt.txt")
    log_path = os.path.join(base_dir, "update_log.txt")

    # APIキー取得
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY environment variable is not set.")
        sys.exit(1)

    # プロンプト読み込み
    if not os.path.exists(prompt_path):
        print(f"Error: Prompt file not found: {prompt_path}")
        print("Run create_update_prompt.py first.")
        sys.exit(1)

    with open(prompt_path, 'r', encoding='utf-8') as f:
        prompt = f.read()

    # 現在のscript.js読み込み
    with open(script_js_path, 'r', encoding='utf-8') as f:
        original_content = f.read()

    # Gemini API呼び出し（リトライ付き）
    print("Calling Gemini API for AI tools update...")
    
    try:
        ai_response = call_gemini_api(prompt, api_key, max_retries=3)
    except Exception as e:
        error_msg = str(e)
        print(f"Error calling Gemini API after retries: {error_msg}")
        
        # エラーをログに記録して終了（ワークフローは継続させる）
        with open(log_path, 'w', encoding='utf-8') as f:
            f.write(f"=== Update attempt: {datetime.now().isoformat()} ===\n")
            f.write(f"Status: FAILED - API Error\n")
            f.write(f"Error: {error_msg}\n")
        
        # クォータエラーの場合は正常終了（デプロイは続行）
        if "429" in error_msg or "quota" in error_msg.lower():
            print("Quota exceeded. Skipping update but continuing deployment.")
            sys.exit(0)
        
        sys.exit(1)

    # レスポンスからJavaScriptコードを抽出
    # ```javascript ... ``` ブロックを探す
    js_match = re.search(r'```javascript\s*(const aiTools = \[.*?\];)\s*```', ai_response, re.DOTALL)
    
    if not js_match:
        # フォールバック: ```js ... ``` も試す
        js_match = re.search(r'```js\s*(const aiTools = \[.*?\];)\s*```', ai_response, re.DOTALL)
    
    if not js_match:
        # もう一つのフォールバック: コードブロックなしで直接探す
        js_match = re.search(r'(const aiTools = \[.*?\];)', ai_response, re.DOTALL)

    if not js_match:
        print("Warning: Could not extract aiTools array from AI response.")
        print("Saving response to log file for manual review...")
        with open(log_path, 'w', encoding='utf-8') as f:
            f.write(f"=== Update attempt: {datetime.now().isoformat()} ===\n")
            f.write("Status: FAILED - Could not extract aiTools array\n\n")
            f.write("AI Response:\n")
            f.write(ai_response)
        sys.exit(0)  # 失敗してもワークフローは継続

    new_ai_tools = js_match.group(1)

    # 既存のaiTools配列を新しいものに置換
    updated_content = re.sub(
        r'const aiTools = \[.*?\];',
        new_ai_tools,
        original_content,
        flags=re.DOTALL
    )

    # 変更があるか確認
    if updated_content == original_content:
        print("No changes detected in AI tools data.")
        with open(log_path, 'w', encoding='utf-8') as f:
            f.write(f"=== Update: {datetime.now().isoformat()} ===\n")
            f.write("Status: NO CHANGES\n")
        return

    # 更新を保存
    with open(script_js_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"Successfully updated {script_js_path}")

    # 変更ログを抽出して保存
    # AIレスポンスの変更点サマリーを探す
    changes_summary = ""
    if "追加" in ai_response or "削除" in ai_response or "修正" in ai_response or "更新" in ai_response:
        # コードブロック以降のテキストを抽出
        post_code = ai_response.split("```")[-1] if "```" in ai_response else ""
        changes_summary = post_code.strip()

    with open(log_path, 'w', encoding='utf-8') as f:
        f.write(f"=== Update: {datetime.now().isoformat()} ===\n")
        f.write("Status: SUCCESS\n\n")
        if changes_summary:
            f.write("Changes:\n")
            f.write(changes_summary)
        else:
            f.write("Changes: Updated AI tools data\n")

    print("Update completed successfully!")


if __name__ == "__main__":
    main()

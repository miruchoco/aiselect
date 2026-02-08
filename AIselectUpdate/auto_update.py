"""
AIselect Auto-Update Script
Gemini APIを使用してAIツールデータを自動更新します。
"""

import os
import re
import sys
from datetime import datetime

try:
    import google.generativeai as genai
except ImportError:
    print("Error: google-generativeai is not installed.")
    print("Run: pip install google-generativeai")
    sys.exit(1)


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

    # Gemini API呼び出し
    print("Calling Gemini API for AI tools update...")
    genai.configure(api_key=api_key)
    
    model = genai.GenerativeModel('gemini-2.0-flash')
    
    try:
        response = model.generate_content(prompt)
        ai_response = response.text
    except Exception as e:
        print(f"Error calling Gemini API: {e}")
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

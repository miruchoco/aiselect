import os
import re

def main():
    # Paths
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(base_dir) # C:\miruchoco
    ai_select_dir = os.path.join(project_root, "AIselect")
    script_js_path = os.path.join(ai_select_dir, "script.js")
    output_path = os.path.join(base_dir, "prompt.txt")

    # Check if script.js exists
    if not os.path.exists(script_js_path):
        print(f"Error: Could not find {script_js_path}")
        return

    # Read script.js
    with open(script_js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract aiTools array
    # Looking for: const aiTools = [ ... ];
    # We'll use a regex to capture everything between "const aiTools = [" and the closing "];"
    # This might be fragile if there are complex nested brackets, but should work for this structured data.
    match = re.search(r"const aiTools = \[(.*?)\];", content, re.DOTALL)
    
    current_data = ""
    if match:
        current_data = match.group(0) # Include the variable declaration for context
    else:
        # Fallback: just include the whole file if extraction fails, or a warning
        print("Warning: Could not strictly parse 'aiTools' array. Including full file content context instead.")
        current_data = content

    # Construct the prompt
    prompt = f"""
あなたはAIツール情報のエキスパートです。
以下の「現在のAIツールデータ（JavaScript）」を分析し、最新のインターネット情報と照らし合わせて、データの更新・修正を行ってください。

# 前提
- Webサイトのデザイン、構成、仕組み（JavaScriptのロジック等）は修正しないでください。
- データの形式（JSONオブジェクトの構造）は厳密に維持してください。

# 依頼事項（観点）

1. **新規追加**:
   - Web上に存在し、このリストに含まれていない主要または話題のAIツールがあれば、仕様を調査してリストに追加してください。
   - 特に画像、動画、音楽生成、コーディング支援などの分野で欠けているものがあれば補完してください。

2. **終了確認**:
   - リストに含まれているツールの中で、サービスが終了しているものがあれば、削除してください。

3. **情報更新**:
   - リストに含まれているツールの「サービス内容」「価格」「特徴」「強み・弱み」に相違がないか確認し、最新情報に更新してください。
   - 特に価格プランやモデル名（例: Claude 3.5 Sonnetなど）が古くなっていないか確認してください。

4. **URL確認・追加**:
   - **重要**: 現在のデータには公式WebサイトへのURLが含まれていない場合があります（または各オブジェクトに `url` フィールドがない可能性があります）。
   - すべてのツールオブジェクトに `url: 'https://...'` というフィールドを追加し、正しい公式URLを設定してください。
   - 既存のURLがある場合は、リンク切れがないか確認し、必要ならリダイレクト先や新しいURLに更新してください。

# 出力形式
- 修正後の `const aiTools = [ ... ];` のコードブロック全体を出力してください。
- 変更点がある場合は、コードの後に箇条書きで「どのツールを追加/削除/修正したか」を簡潔にまとめてください。

---
## 現在のデータ (script.jsより抜粋)

```javascript
{current_data}
```
"""

    # Write prompt.txt
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(prompt)

    print(f"Success! Update prompt generated at: {output_path}")
    print("Please copy the content of 'prompt.txt' and send it to an AI assistant with internet access.")

if __name__ == "__main__":
    main()

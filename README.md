# AIselect

AIツール比較サイト。日次でGemini APIによる自動更新とCloudflare Pagesへの自動デプロイを実行。

## 構成

```
miruchoco/
├── AIselect/          # Webサイト本体 (HTML/CSS/JS)
│   ├── index.html
│   ├── styles.css
│   └── script.js      # AIツールデータを含む
├── AIselectUpdate/    # 自動更新スクリプト
│   ├── create_update_prompt.py
│   ├── auto_update.py
│   └── prompt.txt
└── .github/workflows/ # GitHub Actions
    └── update-and-deploy.yml
```

## 自動更新フロー

1. **毎日午前9時(JST)** にGitHub Actionsが自動実行
2. `create_update_prompt.py` で更新プロンプトを生成
3. `auto_update.py` がGemini APIを呼び出してAIツールデータを更新
4. 変更があればGitにコミット
5. Cloudflare Pagesに自動デプロイ

## GitHub Secrets（必須）

| Secret名 | 説明 |
|---------|------|
| `GEMINI_API_KEY` | Google Gemini APIキー |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |

## 手動デプロイ

```powershell
npx wrangler pages deploy AIselect --project-name=aiselect
```

## ローカルでの更新テスト

```powershell
cd C:\miruchoco\AIselectUpdate
$env:GEMINI_API_KEY = "your-api-key"
python auto_update.py
```

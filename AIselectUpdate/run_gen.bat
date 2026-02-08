@echo off
chcp 65001 > nul
echo AIプロンプト生成ツールを実行しています...
python create_update_prompt.py
if %errorlevel% neq 0 (
    echo.
    echo エラーが発生しました。Pythonがインストールされているか確認してください。
    pause
    exit /b %errorlevel%
)
echo.
echo 処理が完了しました。
echo 作成された 'prompt.txt' を確認してください。
pause

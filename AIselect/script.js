// カテゴリ一覧
const categories = [
    '画像生成',
    '動画生成',
    '音楽生成',
    'ワークフロー',
    'テキスト生成',
    'コード生成',
    '音声生成',
    '翻訳',
    'マーケティング',
    '分析・要約',
    'チャットボット',
    'デザイン',
    '教育',
    'データ分析',
    '開発プラットフォーム',
    '検索エンジン'
];

// AIツールのデータ
const aiTools = [
    {
        id: 1,
        name: 'ChatGPT',
        categories: ['テキスト生成', 'コード生成', '翻訳', '分析・要約'],
        features: ['自然な会話', 'コード生成', '文章作成', '翻訳', '要約'],
        price: '無料プラン / $20/月 (Pro)',
        strengths: ['高い汎用性', '豊富な知識', '多言語対応', '使いやすい'],
        weaknesses: ['最新情報の制限', '無料版は速度制限あり'],
        data: {
            en: {
                features: ['Natural conversation', 'Code generation', 'Writing', 'Translation', 'Summarization'],
                price: 'Free / $20/mo (Pro)',
                strengths: ['High versatility', 'Rich knowledge', 'Multilingual', 'Easy to use'],
                weaknesses: ['Knowledge cutoff', 'Free version speed limits']
            }
        }
    },
    {
        id: 2,
        name: 'Claude',
        categories: ['テキスト生成', 'コード生成', '分析・要約'],
        features: ['長文処理', '文書分析', 'コードレビュー', '要約', '質問応答'],
        price: '無料プラン / $20/月 (Pro)',
        strengths: ['長文処理能力', '正確性', '安全性重視', '文脈理解'],
        weaknesses: ['画像生成なし', '一部機能が制限'],
        data: {
            en: {
                features: ['Long context', 'Document analysis', 'Code review', 'Summarization', 'Q&A'],
                price: 'Free / $20/mo (Pro)',
                strengths: ['Long context window', 'Accuracy', 'Safety focus', 'Context understanding'],
                weaknesses: ['No image generation', 'Some features limited']
            }
        }
    },
    {
        id: 3,
        name: 'Gemini',
        categories: ['画像生成', 'テキスト生成', 'コード生成', '翻訳', '分析・要約'],
        features: ['マルチモーダル', '画像認識', 'コード生成', '翻訳', '検索統合'],
        price: '無料プラン / $20/月 (Advanced)',
        strengths: ['画像理解', 'Google統合', 'リアルタイム情報', '無料で高機能'],
        weaknesses: ['日本語対応が限定的', '一部地域で利用不可'],
        data: {
            en: {
                features: ['Multimodal', 'Image recognition', 'Code generation', 'Translation', 'Search integration'],
                price: 'Free / $20/mo (Advanced)',
                strengths: ['Image understanding', 'Google integration', 'Real-time info', 'High functionality for free'],
                weaknesses: ['Limited Japanese support', 'Region restrictions']
            }
        }
    },
    {
        id: 4,
        name: 'Midjourney',
        categories: ['画像生成'],
        features: ['画像生成', 'アート作成', 'スタイル変換', '高解像度出力'],
        price: '$10/月 (Basic) / $30/月 (Standard)',
        strengths: ['高品質な画像生成', 'アーティスティック', 'コミュニティ', '多様なスタイル'],
        weaknesses: ['Discord必須', 'テキスト処理は不可', '価格が高い'],
        data: {
            en: {
                features: ['Image generation', 'Art creation', 'Style transfer', 'High resolution'],
                price: '$10/mo (Basic) / $30/mo (Standard)',
                strengths: ['High quality', 'Artistic', 'Community', 'Diverse styles'],
                weaknesses: ['Discord required', 'No text processing', 'High price']
            }
        }
    },
    {
        id: 5,
        name: 'Stable Diffusion',
        categories: ['画像生成'],
        features: ['画像生成', 'ローカル実行可能', 'カスタマイズ性', 'オープンソース'],
        price: '無料（自己ホスト） / クラウド利用は従量課金',
        strengths: ['無料で利用可能', 'カスタマイズ性', 'プライバシー', 'オフライン利用'],
        weaknesses: ['技術的知識が必要', 'GPU必要', '品質は設定次第'],
        data: {
            en: {
                features: ['Image generation', 'Local execution', 'Customizability', 'Open source'],
                price: 'Free (Self-hosted) / Cloud (Pay-as-you-go)',
                strengths: ['Free to use', 'Customizability', 'Privacy', 'Offline use'],
                weaknesses: ['Technical knowledge required', 'GPU required', 'Quality depends on settings']
            }
        }
    },
    {
        id: 6,
        name: 'GitHub Copilot',
        categories: ['コード生成', 'ワークフロー'],
        features: ['コード補完', '関数生成', 'テスト作成', 'コメント生成'],
        price: '$10/月 (個人) / $19/月 (Business)',
        strengths: ['開発効率向上', 'IDE統合', '多言語対応', '学習機能'],
        weaknesses: ['コード品質は要確認', 'プライバシー懸念', '有料のみ'],
        data: {
            en: {
                features: ['Code completion', 'Function generation', 'Test creation', 'Comment generation'],
                price: '$10/mo (Individual) / $19/mo (Business)',
                strengths: ['Dev efficiency', 'IDE integration', 'Multilingual', 'Learning capability'],
                weaknesses: ['Code quality check needed', 'Privacy concerns', 'Paid only']
            }
        }
    },
    {
        id: 7,
        name: 'Notion AI',
        categories: ['テキスト生成', 'ワークフロー', '分析・要約', '翻訳'],
        features: ['文書作成支援', '要約', '翻訳', 'アイデア生成', 'タスク管理'],
        price: '$10/月 (Plus) / $18/月 (Business)',
        strengths: ['Notion統合', 'ワークフロー改善', 'チーム協業', '多機能'],
        weaknesses: ['Notion必須', '価格が高い', 'AI機能は限定的'],
        data: {
            en: {
                features: ['Writing assistance', 'Summarization', 'Translation', 'Idea generation', 'Task management'],
                price: '$10/mo (Plus) / $18/mo (Business)',
                strengths: ['Notion integration', 'Workflow improvement', 'Team collaboration', 'Multifunctional'],
                weaknesses: ['Notion required', 'High price', 'AI features limited']
            }
        }
    },
    {
        id: 8,
        name: 'Jasper',
        categories: ['テキスト生成', 'マーケティング'],
        features: ['マーケティング文書', 'ブログ記事', '広告コピー', 'SEO最適化'],
        price: '$49/月 (Creator) / $125/月 (Teams)',
        strengths: ['マーケティング特化', 'テンプレート豊富', 'ブランド音声', 'チーム機能'],
        weaknesses: ['価格が高い', '汎用性は低い', '日本語対応が限定的'],
        data: {
            en: {
                features: ['Marketing docs', 'Blog posts', 'Ad copy', 'SEO optimization'],
                price: '$49/mo (Creator) / $125/mo (Teams)',
                strengths: ['Marketing focus', 'Rich templates', 'Brand voice', 'Team features'],
                weaknesses: ['High price', 'Low versatility', 'Limited Japanese support']
            }
        }
    },
    {
        id: 9,
        name: 'Runway',
        categories: ['動画生成', '画像生成'],
        features: ['動画生成', '動画編集', '画像生成', 'モーショングラフィックス'],
        price: '$12/月 (Standard) / $28/月 (Pro)',
        strengths: ['高品質な動画生成', '直感的なUI', 'クリエイティブツール', '最新技術'],
        weaknesses: ['価格が高い', '処理時間がかかる', '無料プランは制限あり'],
        data: {
            en: {
                features: ['Video generation', 'Video editing', 'Image generation', 'Motion graphics'],
                price: '$12/mo (Standard) / $28/mo (Pro)',
                strengths: ['High quality', 'Intuitive UI', 'Creative tools', 'Latest tech'],
                weaknesses: ['High price', 'Processing time', 'Free plan limited']
            }
        }
    },
    {
        id: 10,
        name: 'Pika',
        categories: ['動画生成'],
        features: ['動画生成', 'アニメーション', 'スタイル変換', '短い動画作成'],
        price: '無料プラン / $10/月 (Pro)',
        strengths: ['使いやすい', '高速生成', 'コミュニティ', '無料で利用可能'],
        weaknesses: ['動画長が短い', '機能が限定的', '品質は要調整'],
        data: {
            en: {
                features: ['Video generation', 'Animation', 'Style transfer', 'Short video creation'],
                price: 'Free / $10/mo (Pro)',
                strengths: ['Easy to use', 'Fast generation', 'Community', 'Free to use'],
                weaknesses: ['Short video length', 'Limited features', 'Quality varies']
            }
        }
    },
    {
        id: 11,
        name: 'Suno',
        categories: ['音楽生成'],
        features: ['音楽生成', '歌詞作成', '楽曲制作', '多様なジャンル'],
        price: '無料プラン / $10/月 (Pro)',
        strengths: ['高品質な音楽', '歌詞対応', '多様なスタイル', '使いやすい'],
        weaknesses: ['著作権問題', '無料版は制限あり', '日本語対応が限定的'],
        data: {
            en: {
                features: ['Music generation', 'Lyrics creation', 'Song production', 'Diverse genres'],
                price: 'Free / $10/mo (Pro)',
                strengths: ['High quality', 'Lyrics support', 'Diverse styles', 'Easy to use'],
                weaknesses: ['Copyright issues', 'Free limit', 'Limited JA support']
            }
        }
    },
    {
        id: 12,
        name: 'Udio',
        categories: ['音楽生成'],
        features: ['音楽生成', '楽曲制作', 'インストゥルメンタル', 'ボーカル生成'],
        price: '無料プラン / $10/月 (Pro)',
        strengths: ['高品質な音質', '多様な楽器', '無料で利用可能', '直感的なUI'],
        weaknesses: ['新規サービス', '機能が発展中', '日本語対応が限定的'],
        data: {
            en: {
                features: ['Music generation', 'Song production', 'Instrumental', 'Vocal generation'],
                price: 'Free / $10/mo (Pro)',
                strengths: ['High sound quality', 'Diverse instruments', 'Free use', 'Intuitive UI'],
                weaknesses: ['New service', 'Developing features', 'Limited JA support']
            }
        }
    },
    {
        id: 13,
        name: 'ElevenLabs',
        categories: ['音声生成'],
        features: ['音声合成', 'ボイスクローニング', '多言語対応', '感情表現'],
        price: '$5/月 (Starter) / $22/月 (Creator)',
        strengths: ['高品質な音声', '自然な発音', '多言語対応', 'カスタマイズ性'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '利用規約に注意'],
        data: {
            en: {
                features: ['Voice synthesis', 'Voice cloning', 'Multilingual', 'Emotion expression'],
                price: '$5/mo (Starter) / $22/mo (Creator)',
                strengths: ['High quality', 'Natural pronunciation', 'Multilingual', 'Customizable'],
                weaknesses: ['High price', 'Free limit', 'Check ToS']
            }
        }
    },
    {
        id: 14,
        name: 'Zapier',
        categories: ['ワークフロー'],
        features: ['自動化', 'アプリ連携', 'ワークフロー構築', 'タスク管理'],
        price: '$20/月 (Starter) / $50/月 (Professional)',
        strengths: ['豊富な連携', '自動化', 'チーム機能', '信頼性'],
        weaknesses: ['価格が高い', '設定が複雑', '学習コストあり'],
        data: {
            en: {
                features: ['Automation', 'App integration', 'Workflow building', 'Task management'],
                price: '$20/mo (Starter) / $50/mo (Professional)',
                strengths: ['Rich integrations', 'Automation', 'Team features', 'Reliability'],
                weaknesses: ['High price', 'Complex setup', 'Learning curve']
            }
        }
    },
    {
        id: 15,
        name: 'Make (Integromat)',
        categories: ['ワークフロー'],
        features: ['自動化', 'アプリ連携', 'ワークフロー構築', 'データ処理'],
        price: '$9/月 (Core) / $29/月 (Pro)',
        strengths: ['柔軟な設定', '視覚的エディタ', '強力な機能', 'コストパフォーマンス'],
        weaknesses: ['学習コストあり', '日本語ドキュメントが少ない', '複雑な設定'],
        data: {
            en: {
                features: ['Automation', 'App integration', 'Workflow building', 'Data processing'],
                price: '$9/mo (Core) / $29/mo (Pro)',
                strengths: ['Flexible setup', 'Visual editor', 'Powerful features', 'Cost effective'],
                weaknesses: ['Learning curve', 'Limited JA docs', 'Complex setup']
            }
        }
    },
    {
        id: 16,
        name: 'DeepL',
        categories: ['翻訳'],
        features: ['高精度翻訳', '多言語対応', '文脈理解', 'ドキュメント翻訳'],
        price: '無料プラン / $8.99/月 (Pro)',
        strengths: ['高精度', '自然な翻訳', '多言語対応', '使いやすい'],
        weaknesses: ['無料版は制限あり', '一部言語の精度が低い', '専門用語は要確認'],
        data: {
            en: {
                features: ['High-accuracy translation', 'Multilingual', 'Context understanding', 'Doc translation'],
                price: 'Free / $8.99/mo (Pro)',
                strengths: ['High accuracy', 'Natural translation', 'Multilingual', 'Easy to use'],
                weaknesses: ['Free limit', 'Low accuracy for some langs', 'Check technical terms']
            }
        }
    },
    {
        id: 17,
        name: 'DALL-E',
        categories: ['画像生成'],
        features: ['画像生成', '画像編集', 'バリエーション生成', '高解像度出力'],
        price: '$15/月 (115クレジット) / 従量課金',
        strengths: ['OpenAI品質', '自然な画像', '編集機能', 'API利用可能'],
        weaknesses: ['価格が高い', 'クレジット制', '生成速度が遅い'],
        data: {
            en: {
                features: ['Image generation', 'Image editing', 'Variations', 'High resolution'],
                price: '$15/mo (115 credits) / Pay-as-you-go',
                strengths: ['OpenAI quality', 'Natural images', 'Editing features', 'API available'],
                weaknesses: ['High price', 'Credit based', 'Slow generation']
            }
        }
    },
    {
        id: 18,
        name: 'Leonardo.ai',
        categories: ['画像生成'],
        features: ['画像生成', '3Dモデル生成', 'テクスチャ生成', 'アニメーション'],
        price: '無料プラン / $10/月 (Apprentice)',
        strengths: ['高品質', '多様なスタイル', '無料で利用可能', 'コミュニティ'],
        weaknesses: ['無料版は制限あり', '処理時間がかかる', '学習コストあり'],
        data: {
            en: {
                features: ['Image generation', '3D asset gen', 'Texture generation', 'Animation'],
                price: 'Free / $10/mo (Apprentice)',
                strengths: ['High quality', 'Diverse styles', 'Free to use', 'Community'],
                weaknesses: ['Free limit', 'Processing time', 'Learning curve']
            }
        }
    },
    {
        id: 19,
        name: 'Adobe Firefly',
        categories: ['画像生成', 'デザイン'],
        features: ['画像生成', '画像編集', 'テキストエフェクト', 'Adobe統合'],
        price: 'Adobe Creative Cloudに含まれる / $22.99/月',
        strengths: ['Adobe統合', '商用利用可能', '高品質', 'プロ向け'],
        weaknesses: ['Adobe必須', '価格が高い', '機能が限定的'],
        data: {
            en: {
                features: ['Image generation', 'Image editing', 'Text effects', 'Adobe integration'],
                price: 'Included in CC / $22.99/mo',
                strengths: ['Adobe integration', 'Commercial use', 'High quality', 'Professional'],
                weaknesses: ['Adobe required', 'High price', 'Limited features']
            }
        }
    },
    {
        id: 20,
        name: 'Ideogram',
        categories: ['画像生成'],
        features: ['画像生成', 'テキストレンダリング', 'ロゴ作成', '高解像度出力'],
        price: '無料プラン / $8/月 (Pro)',
        strengths: ['テキスト生成が得意', '高品質', '無料で利用可能', '使いやすい'],
        weaknesses: ['新規サービス', '機能が発展中', '無料版は制限あり'],
        data: {
            en: {
                features: ['Image generation', 'Text rendering', 'Logo creation', 'High resolution'],
                price: 'Free / $8/mo (Pro)',
                strengths: ['Good at text', 'High quality', 'Free to use', 'Easy to use'],
                weaknesses: ['New service', 'Developing features', 'Free limit']
            }
        }
    },
    {
        id: 21,
        name: 'Flux',
        categories: ['画像生成'],
        features: ['画像生成', 'リアルな画像', 'アート生成', '高解像度'],
        price: '無料プラン / $20/月 (Pro)',
        strengths: ['高品質', 'リアルな画像', '多様なスタイル', '最新技術'],
        weaknesses: ['価格が高い', '新規サービス', '機能が限定的'],
        data: {
            en: {
                features: ['Image generation', 'Realistic', 'Art generation', 'High resolution'],
                price: 'Free / $20/mo (Pro)',
                strengths: ['High quality', 'Realistic', 'Diverse styles', 'Latest tech'],
                weaknesses: ['High price', 'New service', 'Limited features']
            }
        }
    },
    {
        id: 22,
        name: 'Synthesia',
        categories: ['動画生成'],
        features: ['AIアバター動画', '多言語対応', 'テンプレート', 'カスタムアバター'],
        price: '$30/月 (Starter) / $95/月 (Creator)',
        strengths: ['高品質なアバター', '多言語対応', 'テンプレート豊富', 'プロ向け'],
        weaknesses: ['価格が高い', 'カスタマイズ性が低い', '無料プランなし'],
        data: {
            en: {
                features: ['AI Avatar Video', 'Multilingual', 'Templates', 'Custom Avatars'],
                price: '$30/mo (Starter) / $95/mo (Creator)',
                strengths: ['High quality avatars', 'Multilingual', 'Rich templates', 'Professional'],
                weaknesses: ['High price', 'Low customizability', 'No free plan']
            }
        }
    },
    {
        id: 23,
        name: 'Descript',
        categories: ['動画生成', '音声生成'],
        features: ['動画編集', '音声合成', '字幕生成', 'ポッドキャスト制作'],
        price: '$12/月 (Creator) / $24/月 (Pro)',
        strengths: ['直感的な編集', '音声編集', 'チーム機能', '高品質'],
        weaknesses: ['価格が高い', '学習コストあり', '無料プランは制限あり'],
        data: {
            en: {
                features: ['Video editing', 'Voice synthesis', 'Subtitles', 'Podcast production'],
                price: '$12/mo (Creator) / $24/mo (Pro)',
                strengths: ['Intuitive editing', 'Voice editing', 'Team features', 'High quality'],
                weaknesses: ['High price', 'Learning curve', 'Free plan limited']
            }
        }
    },
    {
        id: 24,
        name: 'Luma Dream Machine',
        categories: ['動画生成'],
        features: ['動画生成', '高品質動画', '長尺動画', 'リアルな動画'],
        price: '無料プラン / $10/月 (Pro)',
        strengths: ['高品質', '無料で利用可能', '長尺動画', '使いやすい'],
        weaknesses: ['処理時間がかかる', '無料版は制限あり', '新規サービス'],
        data: {
            en: {
                features: ['Video generation', 'High quality', 'Long video', 'Realistic'],
                price: 'Free / $10/mo (Pro)',
                strengths: ['High quality', 'Free to use', 'Long video', 'Easy to use'],
                weaknesses: ['Processing time', 'Free limit', 'New service']
            }
        }
    },
    {
        id: 25,
        name: 'HeyGen',
        categories: ['動画生成'],
        features: ['AIアバター動画', '多言語対応', 'カスタムアバター', 'テンプレート'],
        price: '$24/月 (Starter) / $89/月 (Business)',
        strengths: ['高品質', '多言語対応', 'カスタマイズ性', 'プロ向け'],
        weaknesses: ['価格が高い', '無料プランなし', '処理時間がかかる'],
        data: {
            en: {
                features: ['AI Avatar Video', 'Multilingual', 'Custom Avatars', 'Templates'],
                price: '$24/mo (Starter) / $89/mo (Business)',
                strengths: ['High quality', 'Multilingual', 'Customizability', 'Professional'],
                weaknesses: ['High price', 'No free plan', 'Processing time']
            }
        }
    },
    {
        id: 26,
        name: 'Mubert',
        categories: ['音楽生成'],
        features: ['音楽生成', 'ロイヤリティフリー', 'リアルタイム生成', '多様なジャンル'],
        price: '$14/月 (Personal) / $59/月 (Commercial)',
        strengths: ['ロイヤリティフリー', '多様なジャンル', '商用利用可能', 'API利用可能'],
        weaknesses: ['価格が高い', '品質は要調整', '無料プランは制限あり']
    },
    {
        id: 27,
        name: 'AIVA',
        categories: ['音楽生成'],
        features: ['音楽生成', '楽曲制作', '多様なジャンル', '商用利用可能'],
        price: '無料プラン / $15/月 (Standard)',
        strengths: ['高品質', '商用利用可能', '多様なスタイル', '使いやすい'],
        weaknesses: ['無料版は制限あり', '価格が高い', '日本語対応が限定的']
    },
    {
        id: 28,
        name: 'Perplexity',
        categories: ['テキスト生成', '分析・要約', 'チャットボット'],
        features: ['質問応答', '検索統合', '引用機能', 'リアルタイム情報'],
        price: '無料プラン / $20/月 (Pro)',
        strengths: ['最新情報', '引用機能', '検索統合', '無料で高機能'],
        weaknesses: ['無料版は制限あり', '日本語対応が限定的', '機能が限定的']
    },
    {
        id: 29,
        name: 'Grok',
        categories: ['テキスト生成', 'チャットボット'],
        features: ['自然な会話', 'リアルタイム情報', 'X統合', '多様な話題'],
        price: '$16/月 (X Premium)',
        strengths: ['リアルタイム情報', 'X統合', '自然な会話', '最新情報'],
        weaknesses: ['X必須', '価格が高い', '機能が限定的'],
        data: {
            en: {
                features: ['Natural conversation', 'Real-time info', 'X integration', 'Diverse topics'],
                price: '$16/mo (X Premium)',
                strengths: ['Real-time info', 'X integration', 'Natural conversation', 'Latest info'],
                weaknesses: ['X required', 'High price', 'Limited features']
            }
        }
    },
    {
        id: 30,
        name: 'Pi',
        categories: ['テキスト生成', 'チャットボット'],
        features: ['自然な会話', '感情理解', '多様な話題', '音声対応'],
        price: '無料',
        strengths: ['無料', '感情理解', '自然な会話', '使いやすい'],
        weaknesses: ['機能が限定的', '商用利用不可', '最新情報の制限'],
        data: {
            en: {
                features: ['Natural conversation', 'Emotion understanding', 'Diverse topics', 'Voice support'],
                price: 'Free',
                strengths: ['Free', 'Emotion understanding', 'Natural conversation', 'Easy to use'],
                weaknesses: ['Limited features', 'No commercial use', 'Knowledge cutoff']
            }
        }
    },
    {
        id: 31,
        name: 'Character.AI',
        categories: ['チャットボット', 'テキスト生成'],
        features: ['キャラクター会話', 'カスタムキャラ', 'ロールプレイ', '多様なキャラ'],
        price: '無料プラン / $9.99/月 (c.ai+)',
        strengths: ['多様なキャラ', '無料で利用可能', 'コミュニティ', '楽しめる'],
        weaknesses: ['商用利用不可', '品質は要確認', '無料版は制限あり']
    },
    {
        id: 32,
        name: 'Cursor',
        categories: ['コード生成'],
        features: ['コード補完', 'コード編集', 'チャット機能', 'IDE統合'],
        price: '$20/月 (Pro) / $40/月 (Business)',
        strengths: ['強力な機能', 'IDE統合', '開発効率向上', '最新技術'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '学習コストあり']
    },

    {
        id: 34,
        name: 'Tabnine',
        categories: ['コード生成'],
        features: ['コード補完', '関数生成', 'テスト作成', 'セキュリティチェック'],
        price: '$12/月 (Pro) / $39/月 (Enterprise)',
        strengths: ['セキュリティ', '多言語対応', 'チーム機能', '信頼性'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '設定が複雑']
    },
    {
        id: 35,
        name: 'Replit',
        categories: ['コード生成', 'ワークフロー'],
        features: ['コード生成', 'クラウドIDE', 'デプロイ', 'チーム機能'],
        price: '無料プラン / $20/月 (Core)',
        strengths: ['クラウドIDE', 'デプロイ機能', 'チーム機能', '無料で利用可能'],
        weaknesses: ['無料版は制限あり', 'パフォーマンス制限', '機能が限定的']
    },
    {
        id: 36,
        name: 'Copy.ai',
        categories: ['マーケティング', 'テキスト生成'],
        features: ['マーケティング文書', 'ブログ記事', '広告コピー', 'SEO最適化'],
        price: '$36/月 (Pro) / $186/月 (Team)',
        strengths: ['マーケティング特化', 'テンプレート豊富', 'チーム機能', '使いやすい'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '日本語対応が限定的']
    },
    {
        id: 37,
        name: 'Writesonic',
        categories: ['マーケティング', 'テキスト生成'],
        features: ['マーケティング文書', 'ブログ記事', '広告コピー', 'SEO最適化'],
        price: '$13/月 (Starter) / $500/月 (Enterprise)',
        strengths: ['マーケティング特化', 'テンプレート豊富', 'SEO機能', '多機能'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '品質は要確認']
    },
    {
        id: 38,
        name: 'Rytr',
        categories: ['マーケティング', 'テキスト生成'],
        features: ['マーケティング文書', 'ブログ記事', '広告コピー', 'SEO最適化'],
        price: '無料プラン / $9/月 (Saver)',
        strengths: ['低価格', '無料で利用可能', '使いやすい', '多機能'],
        weaknesses: ['品質は要確認', '無料版は制限あり', '日本語対応が限定的']
    },
    {
        id: 39,
        name: 'Murf',
        categories: ['音声生成'],
        features: ['音声合成', '多言語対応', '感情表現', 'ボイスクローニング'],
        price: '$19/月 (Basic) / $39/月 (Pro)',
        strengths: ['高品質な音声', '多言語対応', '感情表現', '使いやすい'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '機能が限定的']
    },
    {
        id: 40,
        name: 'Play.ht',
        categories: ['音声生成'],
        features: ['音声合成', 'ポッドキャスト', '多言語対応', 'カスタム音声'],
        price: '$15/月 (Personal) / $39/月 (Professional)',
        strengths: ['高品質', 'ポッドキャスト機能', '多言語対応', 'カスタマイズ性'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '処理時間がかかる']
    },
    {
        id: 41,
        name: 'Google Translate',
        categories: ['翻訳'],
        features: ['多言語翻訳', 'リアルタイム翻訳', '画像翻訳', '音声翻訳'],
        price: '無料',
        strengths: ['無料', '多言語対応', '使いやすい', 'リアルタイム'],
        weaknesses: ['精度が限定的', '文脈理解が弱い', '専門用語は要確認']
    },
    {
        id: 42,
        name: 'Microsoft Translator',
        categories: ['翻訳'],
        features: ['多言語翻訳', 'リアルタイム翻訳', '画像翻訳', '音声翻訳'],
        price: '無料プラン / 従量課金',
        strengths: ['無料', '多言語対応', 'API利用可能', '統合機能'],
        weaknesses: ['精度が限定的', '無料版は制限あり', '専門用語は要確認']
    },
    {
        id: 43,
        name: 'Figma AI',
        categories: ['デザイン'],
        features: ['デザイン生成', 'レイアウト提案', 'カラーパレット', 'アイコン生成'],
        price: 'Figmaに含まれる / $12/月 (Professional)',
        strengths: ['Figma統合', 'デザイン支援', 'チーム機能', 'プロ向け'],
        weaknesses: ['Figma必須', '価格が高い', '機能が限定的']
    },
    {
        id: 44,
        name: 'Canva AI',
        categories: ['デザイン', '画像生成'],
        features: ['デザイン生成', '画像生成', 'テキスト生成', 'テンプレート'],
        price: '無料プラン / $12.99/月 (Pro)',
        strengths: ['使いやすい', 'テンプレート豊富', '無料で利用可能', '多機能'],
        weaknesses: ['無料版は制限あり', '品質は要確認', 'プロ向け機能が限定的']
    },
    {
        id: 45,
        name: 'Uizard',
        categories: ['デザイン'],
        features: ['UIデザイン生成', 'ワイヤーフレーム', 'プロトタイプ', 'デザイン変換'],
        price: '$12/月 (Pro) / $49/月 (Business)',
        strengths: ['UI特化', 'プロトタイプ機能', '使いやすい', '高品質'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '機能が限定的']
    },
    {
        id: 46,
        name: 'Khan Academy AI',
        categories: ['教育'],
        features: ['学習支援', '問題生成', '説明生成', 'パーソナライズ'],
        price: '無料',
        strengths: ['無料', '教育特化', '使いやすい', '多様な科目'],
        weaknesses: ['機能が限定的', '日本語対応が限定的', '最新情報の制限']
    },
    {
        id: 47,
        name: 'Quizlet AI',
        categories: ['教育'],
        features: ['学習支援', '問題生成', '暗記カード', 'パーソナライズ'],
        price: '無料プラン / $7.99/月 (Plus)',
        strengths: ['学習特化', '無料で利用可能', '使いやすい', '多様な科目'],
        weaknesses: ['無料版は制限あり', '日本語対応が限定的', '機能が限定的']
    },
    {
        id: 48,
        name: 'Grammarly',
        categories: ['テキスト生成', '分析・要約'],
        features: ['文法チェック', '文章改善', 'トーン調整', '剽窃検出'],
        price: '無料プラン / $12/月 (Premium)',
        strengths: ['高精度', '使いやすい', 'ブラウザ拡張', '多機能'],
        weaknesses: ['無料版は制限あり', '価格が高い', '日本語対応が限定的']
    },
    {
        id: 49,
        name: 'NotebookLM',
        categories: ['分析・要約', 'テキスト生成'],
        features: ['文書分析', '要約', '質問応答', 'ノート作成'],
        price: '無料',
        strengths: ['無料', '文書分析', '使いやすい', 'Google統合'],
        weaknesses: ['機能が限定的', '日本語対応が限定的', '最新情報の制限']
    },
    {
        id: 50,
        name: 'ChatPDF',
        categories: ['分析・要約'],
        features: ['PDF分析', '要約', '質問応答', '文書理解'],
        price: '無料プラン / $5/月 (Pro)',
        strengths: ['PDF特化', '無料で利用可能', '使いやすい', '高精度'],
        weaknesses: ['無料版は制限あり', '機能が限定的', '日本語対応が限定的']
    },
    {
        id: 51,
        name: 'Tableau AI',
        categories: ['データ分析'],
        features: ['データ可視化', '予測分析', '自動インサイト', 'レポート生成'],
        price: '$70/月 (Creator) / $35/月 (Viewer)',
        strengths: ['データ分析特化', '高品質', 'プロ向け', '多機能'],
        weaknesses: ['価格が高い', '学習コストあり', '無料プランなし']
    },
    {
        id: 52,
        name: 'DataRobot',
        categories: ['データ分析'],
        features: ['機械学習', '予測分析', '自動化', 'モデル構築'],
        price: '要問い合わせ',
        strengths: ['機械学習特化', '高品質', 'エンタープライズ向け', '多機能'],
        weaknesses: ['価格が高い', '学習コストあり', '無料プランなし']
    },
    {
        id: 53,
        name: 'Hugging Face',
        categories: ['テキスト生成', 'コード生成', '画像生成'],
        features: ['モデル提供', 'API利用', 'カスタムモデル', 'コミュニティ'],
        price: '無料プラン / 従量課金',
        strengths: ['無料で利用可能', '多様なモデル', 'オープンソース', 'コミュニティ'],
        weaknesses: ['技術的知識が必要', '設定が複雑', '品質は要確認']
    },
    {
        id: 54,
        name: 'Cohere',
        categories: ['テキスト生成', '分析・要約'],
        features: ['テキスト生成', '要約', '分類', '埋め込み'],
        price: '従量課金',
        strengths: ['API利用可能', '高品質', 'カスタマイズ性', 'エンタープライズ向け'],
        weaknesses: ['技術的知識が必要', '価格が高い', '無料プランなし']
    },
    {
        id: 55,
        name: 'Anthropic Claude API',
        categories: ['テキスト生成', 'コード生成', '分析・要約'],
        features: ['API利用', 'テキスト生成', 'コード生成', '分析'],
        price: '従量課金',
        strengths: ['高品質', 'API利用可能', 'カスタマイズ性', 'エンタープライズ向け'],
        weaknesses: ['技術的知識が必要', '価格が高い', '無料プランなし']
    },
    {
        id: 56,
        name: 'OpenAI API',
        categories: ['テキスト生成', 'コード生成', '画像生成', '音声生成'],
        features: ['API利用', 'テキスト生成', '画像生成', '音声生成'],
        price: '従量課金',
        strengths: ['高品質', 'API利用可能', '多機能', 'エンタープライズ向け'],
        weaknesses: ['技術的知識が必要', '価格が高い', '無料プランなし']
    },
    {
        id: 57,
        name: 'Sora',
        categories: ['動画生成'],
        features: ['テキストから動画生成', '物理法則の再現', '高品質動画', '長尺動画生成'],
        price: 'ChatGPT Proユーザー向け / $20/月 (Pro)',
        strengths: ['高品質な動画生成', '物理法則の精密な再現', 'OpenAI品質', '最新技術'],
        weaknesses: ['価格が高い', '一般公開待ち', '処理時間がかかる']
    },
    {
        id: 58,
        name: 'Sora 2',
        categories: ['動画生成'],
        features: ['動画生成', '音声生成', 'カメオ機能', 'ソーシャル連携', '物理法則の再現'],
        price: 'ChatGPT Proユーザー向け / $200/月',
        strengths: ['高品質な動画生成', '音声同期', 'ユーザー挿入対応', '最新技術'],
        weaknesses: ['高価格', '長尺4K動画の実績は今後期待', '一般公開待ち']
    },
    {
        id: 59,
        name: 'Google AI Studio',
        categories: ['開発プラットフォーム', 'テキスト生成', '画像生成', '音声生成', '動画生成'],
        features: ['AIモデル開発', 'API利用', 'マルチモーダル', 'デプロイ', 'カスタマイズ'],
        price: '無料プラン / 従量課金',
        strengths: ['Google統合', '無料で利用可能', '多機能', '開発者向け'],
        weaknesses: ['技術的知識が必要', '設定が複雑', '無料版は制限あり']
    },
    {
        id: 60,
        name: 'Antigravity',
        categories: ['コード生成', '開発プラットフォーム'],
        features: ['AIコード補完', '自然言語によるコード生成', 'リアルタイムエラーチェック', 'Agentic Development'],
        price: '要確認',
        strengths: ['開発効率向上', '初心者でも使いやすい', 'Google品質', '最新技術'],
        weaknesses: ['新規サービス', '安定性は未知数', 'サポート体制が不明']
    },
    {
        id: 61,
        name: 'Opal',
        categories: ['ワークフロー', '開発プラットフォーム'],
        features: ['ノーコードAIアプリ開発', '自然言語による開発', 'テンプレート提供', 'リアルタイムプレビュー'],
        price: '無料（ベータ版）',
        strengths: ['プログラミング知識不要', '迅速な開発', '無料', 'Google品質'],
        weaknesses: ['ベータ版', '複雑なアプリには不向き', '機能が限定的', '将来の価格未定']
    },
    {
        id: 62,
        name: 'Veo 3',
        categories: ['動画生成'],
        features: ['フォトリアルな動画生成', '長尺動画生成', '高解像度対応', '8秒〜60秒動画'],
        price: '要確認',
        strengths: ['高品質な映像', '映画・プロモーション向け', '長尺動画', 'Google品質'],
        weaknesses: ['高コスト', '専門知識が必要', '一般公開待ち']
    },
    {
        id: 63,
        name: 'Gemini 3 Pro',
        categories: ['テキスト生成', '画像生成', '音声生成', '動画生成', '分析・要約'],
        features: ['マルチモーダル', '医療診断', 'コンテンツ制作', '統合処理', '高精度推論'],
        price: '無料プラン / $20/月 (Advanced)',
        strengths: ['最新モデル', 'マルチモーダル', '高精度', '多様な用途', 'Google統合'],
        weaknesses: ['一部地域で利用不可', '日本語対応が限定的', '無料版は制限あり']
    },
    {
        id: 64,
        name: 'Claude Sonnet 4.5',
        categories: ['テキスト生成', 'コード生成', '分析・要約'],
        features: ['対話能力強化', '推論力向上', '長文処理', 'コードレビュー', '自然な会話'],
        price: '無料プラン / $20/月 (Pro)',
        strengths: ['最新モデル', '高精度推論', '自然な会話', '安全性重視', '長文処理'],
        weaknesses: ['価格が高い', '無料版は制限あり', '画像生成なし']
    },
    {
        id: 65,
        name: 'GPT-5.2',
        categories: ['テキスト生成', 'コード生成', '分析・要約'],
        features: ['長文処理能力向上', '信頼性向上', '専門的分析', '契約書レビュー', '高精度推論'],
        price: 'ChatGPT Proに含まれる / $20/月 (Pro)',
        strengths: ['最新モデル', '長文処理', '高精度', '専門業務対応', 'OpenAI品質'],
        weaknesses: ['価格が高い', '無料版は制限あり', '最新情報の制限']
    },
    {
        id: 66,
        name: 'Genspark',
        categories: ['検索エンジン', '分析・要約', 'テキスト生成'],
        features: ['ハイブリッド検索', '自動クエリ分解', '複数情報源統合', '最適回答構築', 'AIエージェント'],
        price: '無料',
        strengths: ['無料', '検索と生成の融合', '複数情報源', '使いやすい', '最新技術'],
        weaknesses: ['新規サービス', '機能が発展中', '日本語対応が限定的']
    },
    {
        id: 67,
        name: 'n8n',
        categories: ['ワークフロー'],
        features: ['ノーコード自動化', 'アプリ連携', 'ワークフロー構築', '自己ホスト可能'],
        price: '無料（自己ホスト） / $20/月 (Cloud)',
        strengths: ['無料で利用可能', '自己ホスト可能', '柔軟な設定', 'オープンソース'],
        weaknesses: ['技術的知識が必要', '設定が複雑', '学習コストあり']
    },
    {
        id: 68,
        name: 'Resemble AI',
        categories: ['音声生成'],
        features: ['音声合成', 'ボイスクローニング', 'リアルタイム音声', '多言語対応'],
        price: '$29/月 (Starter) / $99/月 (Professional)',
        strengths: ['高品質な音声', 'リアルタイム', 'ボイスクローニング', '多言語対応'],
        weaknesses: ['価格が高い', '無料プランなし', '利用規約に注意']
    },
    {
        id: 69,
        name: 'Amper Music',
        categories: ['音楽生成'],
        features: ['音楽生成', 'ロイヤリティフリー', '多様なジャンル', 'カスタマイズ'],
        price: '要確認',
        strengths: ['ロイヤリティフリー', '多様なジャンル', '商用利用可能', '使いやすい'],
        weaknesses: ['価格が高い', '品質は要調整', '無料プランは制限あり']
    },
    {
        id: 70,
        name: 'Khanmigo',
        categories: ['教育'],
        features: ['学習支援', '問題生成', '説明生成', 'パーソナライズ', 'AIチューター'],
        price: '$9/月',
        strengths: ['教育特化', 'パーソナライズ', '多様な科目', '使いやすい'],
        weaknesses: ['有料', '日本語対応が限定的', '機能が限定的']
    },
    {
        id: 71,
        name: 'Socratic',
        categories: ['教育'],
        features: ['学習支援', '問題解決', '説明生成', '多様な科目'],
        price: '無料',
        strengths: ['無料', 'Google品質', '使いやすい', '多様な科目'],
        weaknesses: ['機能が限定的', '日本語対応が限定的', '最新情報の制限']
    },
    {
        id: 72,
        name: 'Persado',
        categories: ['マーケティング'],
        features: ['マーケティングコピー生成', '感情分析', 'A/Bテスト', '最適化'],
        price: '要問い合わせ',
        strengths: ['マーケティング特化', '感情分析', 'データ駆動', 'エンタープライズ向け'],
        weaknesses: ['価格が高い', '無料プランなし', '日本語対応が限定的']
    },
    {
        id: 73,
        name: 'Phrasee',
        categories: ['マーケティング'],
        features: ['メール件名最適化', '広告文最適化', 'A/Bテスト', 'パーソナライズ'],
        price: '要問い合わせ',
        strengths: ['メール特化', 'データ駆動', 'エンタープライズ向け', '高精度'],
        weaknesses: ['価格が高い', '無料プランなし', '機能が限定的']
    },
    {
        id: 74,
        name: 'Zendesk AI',
        categories: ['チャットボット', 'ワークフロー'],
        features: ['顧客対応自動化', 'チャットボット', 'チケット管理', '分析'],
        price: '$55/月 (Suite)',
        strengths: ['顧客対応特化', 'チーム機能', '分析機能', 'プロ向け'],
        weaknesses: ['価格が高い', '無料プランなし', '設定が複雑']
    },
    {
        id: 75,
        name: 'Freshdesk AI',
        categories: ['チャットボット', 'ワークフロー'],
        features: ['顧客対応自動化', 'チャットボット', 'チケット管理', '分析'],
        price: '$15/月 (Growth) / $49/月 (Pro)',
        strengths: ['顧客対応特化', '低価格', '使いやすい', '多機能'],
        weaknesses: ['無料プランは制限あり', '機能が限定的', '日本語対応が限定的']
    },
    {
        id: 76,
        name: 'Amazon Polly',
        categories: ['音声生成'],
        features: ['テキスト読み上げ', '多言語対応', '多声種対応', 'API利用'],
        price: '従量課金',
        strengths: ['AWS統合', '多言語対応', 'API利用可能', 'エンタープライズ向け'],
        weaknesses: ['技術的知識が必要', '価格が高い', '無料プランなし']
    },
    {
        id: 77,
        name: 'Google Text-to-Speech',
        categories: ['音声生成'],
        features: ['テキスト読み上げ', '多言語対応', '多声種対応', 'API利用'],
        price: '従量課金',
        strengths: ['Google統合', '多言語対応', 'API利用可能', '使いやすい'],
        weaknesses: ['技術的知識が必要', '価格が高い', '無料プランなし']
    },
    {
        id: 78,
        name: 'Stable Diffusion 3',
        categories: ['画像生成'],
        features: ['高解像度画像生成', 'テキストレンダリング', 'リアルな画像', 'オープンソース'],
        price: '無料（自己ホスト） / クラウド利用は従量課金',
        strengths: ['高解像度', '無料で利用可能', 'オープンソース', 'カスタマイズ性'],
        weaknesses: ['技術的知識が必要', 'GPU必要', '品質は設定次第']
    },
    {
        id: 79,
        name: 'DALL-E 3',
        categories: ['画像生成'],
        features: ['画像生成', '画像編集', 'バリエーション生成', '高解像度出力'],
        price: 'ChatGPT Plusに含まれる / $20/月 (Plus)',
        strengths: ['OpenAI品質', '自然な画像', '編集機能', '使いやすい'],
        weaknesses: ['価格が高い', 'クレジット制', '生成速度が遅い']
    },
    {
        id: 80,
        name: 'Runway Gen-2',
        categories: ['動画生成'],
        features: ['テキストから動画生成', '画像から動画生成', '動画編集', '高品質動画'],
        price: '$12/月 (Standard) / $28/月 (Pro)',
        strengths: ['高品質', '直感的なUI', 'クリエイティブツール', '最新技術'],
        weaknesses: ['価格が高い', '処理時間がかかる', '無料プランは制限あり']
    },
    {
        id: 81,
        name: 'Manus',
        categories: ['開発プラットフォーム', 'ワークフロー'],
        features: ['自律的タスク遂行', 'AI駆動コーディング', '即時デプロイ', 'リアルタイムモニタリング', '内蔵ツール'],
        price: '無料プラン / $29/月 (Pro)',
        strengths: ['高い自律性', '統合環境', '100以上の開発ツール', '柔軟な対応力'],
        weaknesses: ['新規サービス', '情報が限定的', 'コミュニティが小さい']
    },
    {
        id: 82,
        name: 'DeepSeek',
        categories: ['テキスト生成', 'コード生成', 'チャットボット', '分析・要約'],
        features: ['テキスト生成', 'コーディング支援', '数学問題解決', '情報検索', '要約', '翻訳'],
        price: '無料',
        strengths: ['高性能', '無料', '長いコンテキスト（128K）', '多言語対応', 'コスト効率'],
        weaknesses: ['プライバシー懸念', '一部国で規制', '画像生成なし', 'セキュリティ懸念']
    },
    {
        id: 83,
        name: 'ImageFX',
        categories: ['画像生成'],
        features: ['テキストから画像生成', '多様なスタイル', '高品質画像', '電子透かし'],
        price: '無料',
        strengths: ['高精度', '無料', 'Google品質', 'ユーザーフレンドリー', '直感的なUI'],
        weaknesses: ['一部地域でのみ利用可能', '機能が限定的', '高度な機能は制限']
    },
    {
        id: 84,
        name: 'Kling AI',
        categories: ['動画生成'],
        features: ['テキストから動画生成', '画像から動画生成', '長尺動画', '高品質動画', '物理法則の再現'],
        price: '無料プラン / 要確認',
        strengths: ['高品質', '長尺動画対応', '物理法則の再現', '無料で利用可能'],
        weaknesses: ['新規サービス', '機能が発展中', '一部地域で利用不可']
    },
    {
        id: 85,
        name: 'Janus Pro',
        categories: ['画像生成'],
        features: ['テキストから画像生成', 'マルチモーダル', 'デカップリング手法', '高品質画像生成'],
        price: '無料 / オープンソース',
        strengths: ['高品質', 'オープンソース', '商用利用可能', 'DeepSeek品質'],
        weaknesses: ['機能の成熟度に課題', '新規サービス', 'ドキュメントが限定的']
    },
    {
        id: 86,
        name: 'ComfyUI',
        categories: ['画像生成', '動画生成', 'ワークフロー'],
        features: ['ノードベースワークフロー', '画像生成', '動画生成', '3D生成', 'カスタムノード', 'ローカル実行'],
        price: '無料（オープンソース） / $20/月 (Cloud)',
        strengths: ['完全制御可能', '高カスタマイズ性', 'プライバシー保護', 'オープンソース', '多様なモデル対応'],
        weaknesses: ['学習コストが高い', '初心者には複雑', 'GPU必要', '設定が複雑']
    },
    {
        id: 87,
        name: 'Fooocus',
        categories: ['画像生成'],
        features: ['画像生成', 'スタイルプリセット', 'プロンプト補助', '自動プロンプト拡張', 'フォトリアル'],
        price: '無料（オープンソース）',
        strengths: ['初心者向け', 'シンプルUI', 'フォトリアル系が得意', '軽量', '無料'],
        weaknesses: ['高度な制御不可', '動画生成なし', '更新頻度が低い', '機能が限定的']
    },
    {
        id: 88,
        name: 'Civitai',
        categories: ['画像生成'],
        features: ['モデル共有', 'LoRA共有', '画像ギャラリー', 'コミュニティ', 'モデル検索'],
        price: '無料 / $10/月 (Supporter)',
        strengths: ['豊富なモデル', '活発なコミュニティ', '無料', 'モデル検索機能', '評価システム'],
        weaknesses: ['モデル品質は要確認', '著作権問題', '不適切コンテンツの可能性', 'モデル管理が必要']
    },
    {
        id: 89,
        name: 'Playground AI',
        categories: ['画像生成'],
        features: ['画像生成', '画像編集', 'スタイル転送', 'フィルター', 'バッチ処理'],
        price: '無料プラン / $15/月 (Pro)',
        strengths: ['使いやすい', '無料プランあり', '画像編集機能', '多様なスタイル'],
        weaknesses: ['無料版は制限あり', '品質は要確認', '機能が限定的']
    },
    {
        id: 90,
        name: 'Bing Image Creator',
        categories: ['画像生成'],
        features: ['画像生成', 'DALL-E統合', 'Microsoft統合', '無料利用'],
        price: '無料',
        strengths: ['無料', 'Microsoft統合', '使いやすい', 'DALL-E品質'],
        weaknesses: ['生成数に制限', '機能が限定的', '地域制限あり', '品質は要確認']
    },
    {
        id: 91,
        name: 'LTX Studio',
        categories: ['動画生成'],
        features: ['ストーリーボード', 'シーン構成', 'カメラショット制御', 'スクリプトから動画', '連続動画生成'],
        price: '要確認',
        strengths: ['カメラアングル制御', '連続動画生成', '編集機能', 'プロ向け'],
        weaknesses: ['長尺動画に制限', '使用コストが高い', '学習コストあり', '新規サービス']
    },
    {
        id: 92,
        name: 'Runway Gen-4',
        categories: ['動画生成'],
        features: ['テキストから動画生成', '参照画像利用', 'クリップ編集', 'シーン一貫性', 'キャラクター一貫性'],
        price: '$12/月 (Standard) / $28/月 (Pro)',
        strengths: ['シーン一貫性', '編集機能豊富', 'キャラクター一貫性', '高品質'],
        weaknesses: ['出力時間が短い（5-10秒）', '24fps固定', '価格が高い', '処理時間がかかる']
    },
    {
        id: 93,
        name: 'Dream Machine',
        categories: ['動画生成'],
        features: ['テキストから動画生成', '静止画から動画生成', '短い動画生成'],
        price: '無料プラン / $10/月 (Pro)',
        strengths: ['短時間動画に適している', '手軽', '無料プランあり', '使いやすい'],
        weaknesses: ['動きが苦手', 'テキスト描写が苦手', '無料版は制限あり', '機能が限定的']
    },
    {
        id: 94,
        name: 'Microsoft Power Automate',
        categories: ['ワークフロー'],
        features: ['RPA', 'Microsoft 365統合', '文書分類', 'メール要約', 'チャット要約', 'AI機能'],
        price: '$15/月 (Per User) / $50/月 (Per Flow)',
        strengths: ['Microsoft統合', '信頼性', 'サポート良好', 'エンタープライズ向け'],
        weaknesses: ['Microsoft依存', '複雑な設定', '価格が高い', '学習コストあり']
    },
    {
        id: 95,
        name: 'Workato',
        categories: ['ワークフロー'],
        features: ['エンタープライズ統合', 'AIオーケストレーション', 'RecipeIQ', '大規模組織対応'],
        price: '要問い合わせ',
        strengths: ['大規模組織向け', 'セキュリティ', '信頼性', 'エンタープライズ機能'],
        weaknesses: ['価格が高い', '技術的設定が必要', '非公式連携が少ない', '小規模には不向き']
    },
    {
        id: 96,
        name: 'Bardeen AI',
        categories: ['ワークフロー'],
        features: ['ワークフロー自動化', 'AI機能', 'アプリ連携', 'ブラウザ拡張'],
        price: '無料プラン / $15/月 (Pro)',
        strengths: ['ブラウザ拡張', '使いやすい', '無料プランあり', 'AI機能'],
        weaknesses: ['無料版は制限あり', '機能が限定的', 'サポートが限定的']
    },
    {
        id: 97,
        name: 'Windsurf',
        categories: ['コード生成'],
        features: ['コード補完', 'コード生成', 'IDE統合', 'AI機能', 'マルチファイル編集'],
        price: '$20/月 (Pro)',
        strengths: ['強力な機能', 'IDE統合', 'マルチファイル編集', '最新技術'],
        weaknesses: ['価格が高い', '無料プランは制限あり', '学習コストあり', '新規サービス']
    },
    {
        id: 98,
        name: 'Kimi',
        categories: ['テキスト生成', 'チャットボット', '分析・要約'],
        features: ['テキスト生成', '質問応答', '文書分析', '要約', '長文処理'],
        price: '無料プラン / 要確認',
        strengths: ['長文処理', '無料プランあり', '使いやすい', '多機能'],
        weaknesses: ['無料版は制限あり', '日本語対応が限定的', '機能が発展中']
    },
    {
        id: 99,
        name: 'AutoGPT',
        categories: ['自律エージェント', 'ワークフロー'],
        features: ['自律的タスク実行', '目標設定', '自動計画', '複数ステップ実行', 'オープンソース'],
        price: '無料（オープンソース）',
        strengths: ['自律性', 'オープンソース', '無料', 'カスタマイズ可能'],
        weaknesses: ['技術的知識が必要', '設定が複雑', '実行コストが高い', '安定性に課題']
    },
    {
        id: 100,
        name: 'Riffusion',
        categories: ['音楽生成'],
        features: ['音楽生成', 'スタイル転送', 'リアルタイム生成', 'オープンソース'],
        price: '無料（オープンソース）',
        strengths: ['無料', 'オープンソース', 'リアルタイム', 'カスタマイズ可能'],
        weaknesses: ['技術的知識が必要', '品質は要調整', '機能が限定的', 'ドキュメントが少ない']
    },
    {
        id: 101,
        name: 'Lyria',
        categories: ['音楽生成'],
        features: ['音楽生成', '楽曲制作', '多様なジャンル', 'YouTube統合'],
        price: 'YouTube Premiumに含まれる',
        strengths: ['YouTube統合', '高品質', '多様なジャンル', 'Google品質'],
        weaknesses: ['YouTube Premium必須', '機能が限定的', '地域制限あり']
    },
    {
        id: 102,
        name: 'Slack AI',
        categories: ['ワークフロー', '分析・要約'],
        features: ['スレッド要約', 'チャンネル要約', '回答検索', '未読整理'],
        price: '有料プランに追加',
        strengths: ['Slack統合', '情報検索の効率化', '要約機能', '使い慣れたUI'],
        weaknesses: ['Slack必須', '日本語対応は順次', '別途契約が必要']
    },
    {
        id: 103,
        name: 'Zoom AI Companion',
        categories: ['ワークフロー', '分析・要約'],
        features: ['会議要約', '録画分析', 'メール下書き', 'チャット要約'],
        price: '有料プランに含まれる',
        strengths: ['追加費用なし（対象プラン）', '会議効率化', '多機能', 'Zoom統合'],
        weaknesses: ['Zoom必須', 'リアルタイム精度は環境依存', '高度な分析は限定的']
    },
    {
        id: 104,
        name: 'Microsoft 365 Copilot',
        categories: ['ワークフロー', 'テキスト生成', '分析・要約'],
        features: ['Officeアプリ統合', 'メール作成', 'データ分析', 'プレゼン作成', '会議要約'],
        price: '$30/ユーザー/月',
        strengths: ['最強のOffice統合', '多機能', '企業向けセキュリティ', '生産性向上'],
        weaknesses: ['価格が高い', 'Microsoft 365必須', '導入ハードル']
    },
    {
        id: 105,
        name: 'Amazon Q Developer',
        categories: ['コード生成', '開発プラットフォーム'],
        features: ['コード補完', 'AWS最適化', 'セキュリティスキャン', 'チャット機能'],
        price: '無料プラン / $19/月 (Pro)',
        strengths: ['AWS統合', 'セキュリティ重視', '旧CodeWhisperer', '企業向け'],
        weaknesses: ['AWS知識が必要な場合あり', '汎用性はCopilotに劣る可能性']
    },
    {
        id: 106,
        name: 'Consensus',
        categories: ['検索エンジン', '分析・要約', '教育'],
        features: ['学術論文検索', 'エビデンス抽出', '要約', '引用生成'],
        price: '無料プラン / $20/月 (Premium)',
        strengths: ['学術リサーチ特化', '信頼性', '出典明記', '研究効率化'],
        weaknesses: ['一般検索には不向き', '専門知識が必要な場合あり']
    },
    {
        id: 107,
        name: 'Elicit',
        categories: ['検索エンジン', '分析・要約'],
        features: ['文献レビュー', '論文要約', 'データ抽出', 'リサーチマトリックス'],
        price: '無料プラン / $10/月 (Plus)',
        strengths: ['文献調査の効率化', '高精度な要約', 'データ抽出能力', '研究者向け'],
        weaknesses: ['日本語文献は限定的', '無料版はクレジット制限あり']
    },
    {
        id: 108,
        name: 'Poe',
        categories: ['チャットボット', 'テキスト生成'],
        features: ['複数モデル利用', 'ボット作成', '高速チャット', 'コミュニティ'],
        price: '無料プラン / $20/月',
        strengths: ['多様なモデル（Claude, GPT等）', '比較しやすい', '独自ボット作成', 'アプリが使いやすい'],
        weaknesses: ['ポイント制', '一部モデルは有料のみ', '詳細設定は限定的']
    },
    {
        id: 109,
        name: 'Groq',
        categories: ['開発プラットフォーム', 'テキスト生成'],
        features: ['超高速推論', 'API提供', 'オープンソースモデルホスティング'],
        price: '無料（ベータ）/ 従量課金',
        strengths: ['爆速', '低遅延', 'Llama 3等を高速利用', '開発者向け'],
        weaknesses: ['独自モデルではない', 'コンテキスト長制限', '安定性は変動あり']
    },
    {
        id: 110,
        name: 'HaiLuo AI',
        categories: ['動画生成'],
        features: ['テキストから動画生成', '高品質動画', 'MiniMaxモデル', '高解像度'],
        price: '無料（期間・回数限定）',
        strengths: ['非常に高い動画品質', '自然な動き', '無料で試せる', '最新技術'],
        weaknesses: ['生成に時間がかかる', '商用利用規定は要確認', '日本語未定']
    },
    {
        id: 111,
        name: 'Viggle',
        categories: ['動画生成', 'デザイン'],
        features: ['キャラクター動作生成', 'ダンス動画', '写真から動画', 'ミーム作成'],
        price: '無料（Discord）',
        strengths: ['一貫したキャラクター制御', '楽しいコンテンツ', 'Discordで手軽', 'コミュニティ'],
        weaknesses: ['Discord必須', '商用利用は要確認', '画質は荒め']
    },
    {
        id: 112,
        name: 'ClickUp Brain',
        categories: ['ワークフロー', 'テキスト生成'],
        features: ['タスク要約', 'ナレッジ検索', '自動更新', 'プロジェクト管理'],
        price: '$5/ユーザー/月 (Add-on)',
        strengths: ['ClickUp統合', '一元管理', '低価格', '業務効率化'],
        weaknesses: ['ClickUp必須', '単体利用不可', '日本語精度は向上中']
    },
    {
        id: 113,
        name: 'Asana Intelligence',
        categories: ['ワークフロー'],
        features: ['スマートゴール', 'ステータス更新', 'タスク優先順位', '要約'],
        price: '有料プランに含まれる',
        strengths: ['Asana統合', 'プロジェクト管理', '意思決定支援', '可視化'],
        weaknesses: ['Asana必須', 'Enterprise機能が多い', '学習コスト']
    },
    {
        id: 114,
        name: 'Monday.com AI',
        categories: ['ワークフロー'],
        features: ['自動化ビルだー', '要約', 'メール作成', 'ボード生成'],
        price: '有料プランに含まれる',
        strengths: ['柔軟なカスタマイズ', '多機能', '視覚的', '自動化'],
        weaknesses: ['設定が複雑', 'Monday.com必須', 'プラン依存']
    },
    {
        id: 115,
        name: 'CodeRabbit',
        categories: ['コード生成', 'ワークフロー'],
        features: ['AIコードレビュー', 'PR要約', '行レベルの提案', 'チャット'],
        price: '無料プラン / $12/月 (Pro)',
        strengths: ['レビュー自動化', '品質向上', '設定不要で簡単', '明確な指摘'],
        weaknesses: ['誤検知の可能性', 'CI/CD連携必須', '複雑なロジックは限界あり']
    },
    {
        id: 116,
        name: 'Sourcery',
        categories: ['コード生成'],
        features: ['リファクタリング', 'コード品質向上', '自動修正', 'IDEプラグイン'],
        price: '無料プラン / $10/月 (Pro)',
        strengths: ['クリーンコード', 'リアルタイム提案', '技術的負債解消', 'Pythonに強い'],
        weaknesses: ['言語サポートが限定的', '好みが分かれる提案', '学習コスト']
    },
    {
        id: 117,
        name: 'Devin',
        categories: ['自律エージェント', 'コード生成'],
        features: ['完全自律型エンジニア', 'エンドツーエンド開発', 'バグ修正', 'デプロイ', '計画立案'],
        price: '$20/月 (Core) / $500/月 (Team)',
        strengths: ['自律性', '複雑なタスクの完遂', '学習能力', '最新のAIエンジニア'],
        weaknesses: ['待機リストの可能性', 'コストが高い', '複雑な設定']
    },
    {
        id: 118,
        name: 'Gumloop',
        categories: ['ワークフロー', '自律エージェント'],
        features: ['AIワークフロー自動化', 'ノーコード', 'ドラッグ＆ドロップ', '複数モデル統合'],
        price: '無料プラン / 有料プラン',
        strengths: ['使いやすい', '柔軟な自動化', 'プログラミング不要', '拡張性'],
        weaknesses: ['複雑なロジックは学習コスト', '日本語対応は順次']
    },
    {
        id: 119,
        name: 'Gamma',
        categories: ['ビジネス', 'デザイン', 'テキスト生成'],
        features: ['スライド生成', 'ドキュメント生成', 'ウェブページ生成', 'AIプレゼン'],
        price: '無料プラン / $8/月 (Plus)',
        strengths: ['圧倒的な手軽さ', 'デザインが美しい', '修正が簡単', '多機能'],
        weaknesses: ['細かいレイアウト調整は苦手', 'エクスポート制限(無料版)']
    },
    {
        id: 120,
        name: 'Otter.ai',
        categories: ['ビジネス', '分析・要約'],
        features: ['会議文字起こし', 'リアルタイム要約', 'スライドキャプチャ', '自動アクション'],
        price: '無料 / $10/月 (Pro)',
        strengths: ['英語精度が高い', 'Zoom/Meet連携', '使いやすいUI', '検索機能'],
        weaknesses: ['日本語対応は限定的', '無料版は制限あり']
    },
    {
        id: 121,
        name: 'Beautiful.ai',
        categories: ['ビジネス', 'デザイン'],
        features: ['スマートスライド', '自動レイアウト', 'テンプレート豊富', 'チーム連携'],
        price: '$12/月 (Pro)',
        strengths: ['デザイン崩れ防止', 'プロ品質', '時短', '直感的操作'],
        weaknesses: ['無料プランなし（試用のみ）', '自由度はやや低い']
    },
    {
        id: 122,
        name: 'Krea AI',
        categories: ['画像生成', 'デザイン'],
        features: ['リアルタイム生成', 'アップスケーリング', '動画生成', 'パターン生成'],
        price: '無料プラン / $8/月',
        strengths: ['リアルタイム性', '画質向上機能', '直感的な操作', 'クリエイティブ'],
        weaknesses: ['高解像度は有料', '生成速度は回線依存']
    },
    {
        id: 123,
        name: 'Meshy',
        categories: ['3D生成'],
        features: ['テキストから3D', '画像から3D', 'テクスチャ生成', '高速生成'],
        price: '無料プラン / $16/月 (Pro)',
        strengths: ['3D生成の手軽さ', 'テクスチャ品質', 'ゲーム制作に便利', '無料枠あり'],
        weaknesses: ['ポリゴン数は制限あり', '複雑な形状は調整必要']
    },
    {
        id: 124,
        name: 'Tripo',
        categories: ['3D生成'],
        features: ['高速3D生成', 'ドラフト生成', 'リファイン機能', 'アニメーション'],
        price: '無料プラン / 有料プラン',
        strengths: ['生成スピード', '手軽に試せる', 'AIによる詳細化', 'モデル共有'],
        weaknesses: ['商用利用はプラン確認', 'トポロジーは自動']
    },
    {
        id: 125,
        name: 'Magic Hour',
        categories: ['動画生成'],
        features: ['動画to動画', 'フェイススワップ', 'スタイル転送', '高品質レンダリング'],
        price: '基本無料 / クレジット制',
        strengths: ['クリエイティブな表現', '使いやすい', '多機能', '品質が高い'],
        weaknesses: ['生成時間', 'クレジット消費が早い']
    },
    {
        id: 126,
        name: 'Magnific AI',
        categories: ['画像生成', 'デザイン'],
        features: ['超高解像度化', 'ディテール追加', 'スタイル変更', 'ハルシネーション制御'],
        price: '$39/月〜',
        strengths: ['圧倒的な解像感', 'ディテール生成', 'プロ向け品質', '既存画質の向上'],
        weaknesses: ['価格が高い', '処理に時間がかかる', '元画像が必要']
    },
    {
        id: 127,
        name: 'Harvey',
        categories: ['ビジネス', 'テキスト生成'],
        features: ['法律特化', '契約書レビュー', 'リサーチ', 'ドラフト作成'],
        price: '要問い合わせ (Enterprise)',
        strengths: ['法律専門知識', 'セキュリティ', 'プロフェッショナル向け', '信頼性'],
        weaknesses: ['一般公開されていない', '導入コスト', '個人利用不可']
    },
    {
        id: 128,
        name: 'Rosebud',
        categories: ['テキスト生成', 'ライフスタイル'],
        features: ['AIジャーナリング', '自己分析', 'メンタルヘルス', '習慣化'],
        price: '無料 / 有料プラン',
        strengths: ['振り返りの支援', 'パーソナライズ', '使いやすいアプリ', '心のケア'],
        weaknesses: ['日本語対応は要確認', '深い悩みは専門家へ']
    },
    {
        id: 129,
        name: 'Lovart AI',
        categories: ['デザイン', '画像生成', '3D生成'],
        features: ['多目的デザイン', '画像・動画・3D', 'キャラバリエーション', 'ポスター作成'],
        price: '無料プラン / 有料クレジット',
        strengths: ['オールインワン', 'デザイナー向け', '直感的操作', '無料枠あり'],
        weaknesses: ['クレジット制', '日本語対応など要確認']
    },
    {
        id: 130,
        name: 'AquaVoice',
        categories: ['ビジネス', 'ワークフロー'],
        features: ['音声による文書作成', 'リアルタイム編集', 'フォーマット自動化', '多言語対応'],
        price: '無料プラン / $12/月 (Pro)',
        strengths: ['キーボード不要', '修正コマンド', '高い認識精度', '思考の速度で入力'],
        weaknesses: ['発音による精度差', '環境音の影響', '修正に慣れが必要']
    },
    {
        id: 131,
        name: 'Skywork AI',
        categories: ['テキスト生成', 'ビジネス', '検索エンジン'],
        features: ['大規模言語モデル', '数学・論理推論', 'マルチモーダル', 'AI検索'],
        price: '無料 (オープンソース/ベータ)',
        strengths: ['高い推論能力', '中国語に強い', 'オープンソースモデル', '多機能'],
        weaknesses: ['日本語・英語以外のサポート', '国内からのアクセス性']
    },
    {
        id: 132,
        name: 'Notta',
        categories: ['ビジネス', '分析・要約'],
        features: ['Web会議録音', 'リアルタイム文字起こし', 'AI要約', '話者識別'],
        price: '無料プラン / 1,200円/月 (Pro)',
        strengths: ['日本語認識精度が高い', '要約が便利', 'Zoom/Teams連携', '議事録作成'],
        weaknesses: ['無料版の制限（時間）', '音声品質に依存', '長時間録音の容量']
    },
    {
        id: 133,
        name: 'DomoAI',
        categories: ['動画生成', '画像生成'],
        features: ['動画to動画', 'アニメスタイル変換', '画像to動画', '踊らせる'],
        price: '$9.99/月〜',
        strengths: ['アニメ化が得意', 'Tiktok等で人気', '動きの維持', 'ユニークな効果'],
        weaknesses: ['クレジット消費', 'リアル系は苦手な場合も', '生成待ち時間']
    },
    {
        id: 134,
        name: 'Marble (World Labs)',
        categories: ['3D生成'],
        features: ['3D世界生成', 'テキストtoワールド', '画像toワールド', 'シーン編集'],
        price: '無料プラン / $20/月',
        strengths: ['3D空間ごと生成', '独自の技術', '没入感', 'クリエイター向け'],
        weaknesses: ['ベータ版', 'ハイエンドPC推奨', '生成コスト']
    },
    {
        id: 135,
        name: 'GoMarble',
        categories: ['マーケティング'],
        features: ['広告分析', 'AIエージェント', 'クリエイティブ生成', 'レポート自動化'],
        price: '無料プラン / $99/月',
        strengths: ['広告運用の効率化', 'データ分析', '意思決定支援', '改善提案'],
        weaknesses: ['広告媒体知識が必要', '価格が高め', '初期設定']
    },
    {
        id: 136,
        name: 'Samurai AI (Summary)',
        categories: ['分析・要約'],
        features: ['動画・記事要約', 'Chrome拡張', 'マインドマップ', 'チャット質問'],
        price: '無料試用 / 月額プラン',
        strengths: ['情報収集効率化', 'YouTube対応', '読み上げ機能', '保存機能'],
        weaknesses: ['長時間の動画制限', '要約の精度', '英語メインの場合も']
    },
    {
        id: 137,
        name: 'SamurAI (Hiring)',
        categories: ['ビジネス', '分析・要約'],
        features: ['エンジニア採用', 'スキル評価', '面接自動化', '行動分析'],
        price: '要問い合わせ / トライアル',
        strengths: ['採用工数削減', '客観的な評価', '実践的なテスト', '詳細レポート'],
        weaknesses: ['エンジニア採用特化', '候補者の抵抗感', '導入コスト']
    },
    {
        id: 138,
        name: 'Google Workspace (Gemini)',
        categories: ['ビジネス', 'ワークフロー'],
        features: ['Gmail/Docs等への統合', 'AI文章作成', 'データ整理', '会議支援'],
        price: '有料プランに追加 / Business Starter $7/月〜',
        strengths: ['使い慣れたツールと統合', 'セキュリティ', 'シームレスな連携', 'マルチモーダル'],
        weaknesses: ['Gemini利用はアドオンの場合も', 'コストがかかる']
    },
    {
        id: 139,
        name: 'Google Mixboard',
        categories: ['デザイン', 'クリエイティブ'],
        features: ['AIムードボード', '画像・レイアウト生成', '直感的なリミックス', 'アイデア出し'],
        price: '無料 (試験運用中)',
        strengths: ['ブレインストーミングに最適', '直感的操作', 'Google Labs発', '創造性刺激'],
        weaknesses: ['試験運用中', '一般公開の範囲', '商用利用は要確認']
    },
    {
        id: 140,
        name: 'MusicFX',
        categories: ['音楽生成'],
        features: ['テキストから音楽生成', 'リミックス', 'ループ作成', 'DJモード'],
        price: '無料 (AI Test Kitchen) / 有料プラン',
        strengths: ['直感的', 'Googleの高品質モデル', '実験的な機能', '手軽に音楽制作'],
        weaknesses: ['著作権の扱い', '試験運用的な側面', '長尺生成']
    },
    {
        id: 141,
        name: 'Dify',
        categories: ['開発', 'ワークフロー'],
        features: ['LLMアプリ開発', 'RAG構築', 'ノーコード/ローコード', 'エージェント作成'],
        price: '無料 (Sandbox) / $59/月 (Pro)',
        strengths: ['オープンソース', '柔軟性が高い', 'RAGが簡単', '多数のモデル対応'],
        weaknesses: ['セルフホストは知識必要', '複雑なロジック']
    },
    {
        id: 142,
        name: 'GLM-4',
        categories: ['テキスト生成', '開発'],
        features: ['高性能LLM', '長いコンテキスト', 'コストパフォーマンス', '多言語'],
        price: 'API従量課金 / $3/月〜',
        strengths: ['GPT-4クラスの性能', '安価なAPI', '中国語・英語に強い', '128kトークン'],
        weaknesses: ['日本語の自然さ', 'サービス連携']
    },
    {
        id: 143,
        name: 'Limitless',
        categories: ['ビジネス', '分析・要約'],
        features: ['会議・会話の記憶', 'ウェアラブル連携', '完全な文字起こし', 'AIリコール'],
        price: '無料プラン / $19/月 (Pro)',
        strengths: ['「忘れない」体験', 'ペンダント連携', 'プライバシー配慮', '要約精度'],
        weaknesses: ['ハードウェアは別売', '常時録音の抵抗感']
    },
    {
        id: 144,
        name: 'Raycast AI',
        categories: ['ワークフロー', 'テキスト生成'],
        features: ['Macランチャー統合', 'AIコマンド', 'システム操作', 'ChatGPT連携'],
        price: '$8/月 (Pro)',
        strengths: ['圧倒的な作業効率', 'アプリ切り替え不要', 'キーボード完結', '拡張機能'],
        weaknesses: ['Mac専用', 'Pro版必須', 'Windows非対応']
    },
    {
        id: 145,
        name: 'Comet',
        categories: ['開発', '分析・要約'],
        features: ['ML実験管理', 'モデルモニタリング', 'LLM評価 (Opik)', '可視化'],
        price: '無料 (個人) / $179/月 (Team)',
        strengths: ['MLOpsの定番', '実験の追跡が容易', 'チーム共有', 'LLM開発支援'],
        weaknesses: ['専門知識が必要', '小規模開発にはオーバースペック']
    },
    {
        id: 146,
        name: 'Ray3',
        categories: ['動画生成', '画像生成'],
        features: ['4K動画生成', 'HDR対応', 'シネマティック品質', '画像生成'],
        price: 'クレジット制 ($9.99/月〜)',
        strengths: ['画質が非常に高い', 'HDRの表現力', 'プロ向け', '詳細な制御'],
        weaknesses: ['生成コスト', 'クレジット消費', '生成時間']
    },
    {
        id: 147,
        name: 'Lucy Edit AI',
        categories: ['動画生成', 'デザイン'],
        features: ['テキストで動画編集', '服装変更', 'オブジェクト置換', 'スタイル変換'],
        price: '無料試用 / 有料クレジット',
        strengths: ['編集の自動化', '細かい修正が可能', '直感的なプロンプト', '時間の節約'],
        weaknesses: ['複雑な動きの維持', '生成コスト']
    },
    {
        id: 148,
        name: 'MuleRun',
        categories: ['ワークフロー', '自律エージェント'],
        features: ['AIエージェントマーケット', 'タスク自動化', 'デジタルワーカー', '導入が簡単'],
        price: '無料クレジット / 有料プラン',
        strengths: ['エージェントをすぐ使える', '多様なタスク対応', '開発不要', 'スケーラブル'],
        weaknesses: ['エージェントの品質差', '複雑な連携']
    },
    {
        id: 149,
        name: 'Hunyuan 3D Studio',
        categories: ['3D生成'],
        features: ['テキストto3D', '画像to3D', '高解像度テクスチャ', 'Tencent開発'],
        price: '無料試用 / クレジット制',
        strengths: ['生成速度', 'テクスチャの質', 'PBR対応', 'モデルの多様性'],
        weaknesses: ['商用利用の制限', 'トポロジー調整が必要']
    },
    {
        id: 150,
        name: 'Producer AI',
        categories: ['音楽生成'],
        features: ['AI音楽プロデューサー', '楽曲生成', 'ボーカル生成', '共同制作'],
        price: 'フリーミアム / 有料プラン',
        strengths: ['クオリティが高い', 'ボーカル対応', 'プロデュース支援', '学習機能'],
        weaknesses: ['詳細な編集機能', '権利関係']
    },
    {
        id: 151,
        name: 'TUNEE',
        categories: ['音楽生成'],
        features: ['楽曲作成', 'マスタリング', 'ステム分離', '著作権フリー'],
        price: '無料 (個人) / $18/月',
        strengths: ['商用利用可能', 'マスタリング機能', 'ステム分離', '手軽さ'],
        weaknesses: ['無料版の制限', 'プロ向け編集は限定的']
    },
    {
        id: 152,
        name: 'Sousaku AI',
        categories: ['画像生成', '動画生成'],
        features: ['日本語プロンプト', '画像・動画生成', '高画質化', '背景削除'],
        price: '無料枠あり / $9/月〜',
        strengths: ['日本語完全対応', '多機能', '使いやすいUI', '国内向け'],
        weaknesses: ['クレジット制', '生成待ち時間']
    },
    {
        id: 153,
        name: 'Felo Slide',
        categories: ['ビジネス', 'デザイン'],
        features: ['スライド自動生成', '検索エンジン連動', '多言語対応', 'PDFエクスポート'],
        price: '無料枠あり / $14.99/月',
        strengths: ['リサーチから生成まで一気通貫', '情報鮮度', '手軽さ', 'PowerPoint出力'],
        weaknesses: ['デザインの微調整', '複雑なレイアウト']
    },
    {
        id: 154,
        name: 'MiniMax',
        categories: ['テキスト生成', '開発', '動画生成'],
        features: ['超長文コンテキスト(4M)', '動画生成', 'MoEアーキテクチャ', '高精度'],
        price: 'API従量課金',
        strengths: ['圧倒的な長文処理', '記憶力', '動画生成も高品質', 'コスト'],
        weaknesses: ['日本語対応', 'API利用が主']
    },
    {
        id: 155,
        name: 'ERNIE Bot (Baidu)',
        categories: ['テキスト生成', 'ビジネス'],
        features: ['百度のLLM', 'マルチモーダル', '推論能力', 'ビジネスライティング'],
        price: '無料 / 有料プラン',
        strengths: ['中国語処理能力', '論理推論', 'マルチモーダル', '知識量'],
        weaknesses: ['日本語・英語対応', '中国国内向け機能が多い']
    },
    {
        id: 156,
        name: 'Qwen (Owen)',
        categories: ['テキスト生成', '開発'],
        features: ['大規模言語モデル', 'コーディング支援', '推論強化', 'オープンソース'],
        price: '無料 (オープンソース) / API',
        strengths: ['高いコーディング能力', '透明性', 'カスタマイズ性', 'コミュニティ'],
        weaknesses: ['ホスティングが必要', '日本語対応']
    }
];

// DOM要素
const categoryList = document.getElementById('categoryList');
const aiList = document.getElementById('aiList');
const searchInput = document.getElementById('searchInput');
const selectedCount = document.getElementById('selectedCount');
const comparisonGrid = document.getElementById('comparisonGrid');
const clearSelectionBtn = document.getElementById('clearSelection');
const compareBtn = document.getElementById('compareBtn');
const comparisonModal = document.getElementById('comparisonModal');
const closeModalBtn = document.getElementById('closeModal');

// 状態管理
let selectedCategories = new Set();
let selectedTools = new Set();

// Translation Data
const uiTranslations = {
    ja: {
        subtitle: '最適なAIツールを見つけよう',
        searchPlaceholder: 'ツールを検索...',
        categoriesHeader: 'カテゴリー',
        selectedLabel: '選択中',
        clearBtn: 'クリア',
        compareBtn: '比較する',
        modalTitle: '比較結果',
        allTools: 'AI ツール一覧',
        price: '価格',
        features: '特徴',
        strengths: '強み',
        weaknesses: '弱み',
    },
    en: {
        subtitle: 'Find the best AI tools',
        searchPlaceholder: 'Search tools...',
        categoriesHeader: 'Categories',
        selectedLabel: 'Selected',
        clearBtn: 'Clear',
        compareBtn: 'Compare',
        modalTitle: 'Comparison',
        allTools: 'All Tools',
        price: 'Price',
        features: 'Features',
        strengths: 'Strengths',
        weaknesses: 'Weaknesses',
    }
};

const categoryTranslations = {
    'テキスト生成': 'Text Gen',
    'チャットボット': 'Chatbot',
    '画像生成': 'Image Gen',
    'コード生成': 'Code Gen',
    '音声生成': 'Voice Gen',
    '動画生成': 'Video Gen',
    '音楽生成': 'Music Gen',
    'デザイン': 'Design',
    '開発': 'Development',
    'ビジネス': 'Business',
    'ワークフロー': 'Workflow',
    '分析・要約': 'Analysis',
    '翻訳': 'Translate',
    '教育': 'Education',
    'データ分析': 'Data Analysis',
    '検索エンジン': 'Search Engine',
    '自律エージェント': 'Agent',
    '開発プラットフォーム': 'Dev Platform',
    'マーケティング': 'Marketing',
    '3D生成': '3D Gen'
};

// State
let currentLang = 'ja';

// Helper: Get Translation
function t(key) {
    return uiTranslations[currentLang][key] || key;
}

// Helper: Translate Category
function tCat(category) {
    return currentLang === 'en' ? (categoryTranslations[category] || category) : category;
}

// 初期化
function init() {
    initLanguage();
    renderCategories();
    renderAITools();
    setupEventListeners();
    updateUIText();
}

function initLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const isJapanese = userLang.startsWith('ja');
    currentLang = isJapanese ? 'ja' : 'en';
    updateLangDisplay();
}

function toggleLanguage() {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    updateLangDisplay();
    updateUIText();
    renderCategories();
    renderAITools();
    // Re-render comparison if modal is open
    if (comparisonModal.style.display === 'flex') {
        renderComparison();
    }
}

function updateLangDisplay() {
    const display = document.getElementById('currentLangDisplay');
    if (display) display.textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
}

function updateUIText() {
    document.querySelector('.subtitle').textContent = t('subtitle');
    document.getElementById('searchInput').placeholder = t('searchPlaceholder');
    document.querySelector('.category-nav h3').textContent = t('categoriesHeader');
    document.querySelector('.dock-label').textContent = t('selectedLabel');
    document.getElementById('clearSelection').textContent = t('clearBtn');

    // Compare button has SVG, handle text node update carefully
    const compareBtn = document.getElementById('compareBtn');
    const svg = compareBtn.querySelector('svg');
    compareBtn.textContent = t('compareBtn') + ' ';
    if (svg) compareBtn.appendChild(svg);

    document.querySelector('.modal-header h2').textContent = t('modalTitle');
    document.querySelector('.main-header h2').textContent = t('allTools');
}

// Event Listener for Toggle
document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);

// ツール名から公式サイトURLを生成する関数
function getToolUrl(toolName) {
    const urlMap = {
        'ChatGPT': 'https://chat.openai.com',
        'Claude': 'https://claude.ai',
        'Gemini': 'https://gemini.google.com',
        'Midjourney': 'https://www.midjourney.com',
        'Stable Diffusion': 'https://stability.ai',
        'GitHub Copilot': 'https://github.com/features/copilot',
        'Notion AI': 'https://www.notion.so',
        'Jasper': 'https://www.jasper.ai',
        'Runway': 'https://runwayml.com',
        'Pika': 'https://pika.art',
        'Suno': 'https://suno.ai',
        'Udio': 'https://udio.com',
        'ElevenLabs': 'https://elevenlabs.io',
        'Zapier': 'https://zapier.com',
        'Make (Integromat)': 'https://www.make.com',
        'DeepL': 'https://www.deepl.com',
        'DALL-E': 'https://openai.com/dall-e-3',
        'Leonardo.ai': 'https://leonardo.ai',
        'Adobe Firefly': 'https://www.adobe.com/products/firefly.html',
        'Ideogram': 'https://ideogram.ai',
        'Flux': 'https://blackforestlabs.ai',
        'Synthesia': 'https://www.synthesia.io',
        'Descript': 'https://www.descript.com',
        'Luma Dream Machine': 'https://lumalabs.ai',
        'HeyGen': 'https://www.heygen.com',
        'Mubert': 'https://mubert.com',
        'AIVA': 'https://www.aiva.ai',
        'Perplexity': 'https://www.perplexity.ai',
        'Grok': 'https://x.ai',
        'Pi': 'https://pi.ai',
        'Character.AI': 'https://character.ai',
        'Cursor': 'https://cursor.sh',

        'Tabnine': 'https://www.tabnine.com',
        'Replit': 'https://replit.com',
        'Copy.ai': 'https://www.copy.ai',
        'Writesonic': 'https://writesonic.com',
        'Rytr': 'https://rytr.me',
        'Murf': 'https://murf.ai',
        'Play.ht': 'https://play.ht',
        'Google Translate': 'https://translate.google.com',
        'Microsoft Translator': 'https://www.microsoft.com/translator',
        'Figma AI': 'https://www.figma.com',
        'Canva AI': 'https://www.canva.com',
        'Uizard': 'https://uizard.io',
        'Khan Academy AI': 'https://www.khanacademy.org',
        'Quizlet AI': 'https://quizlet.com',
        'Grammarly': 'https://www.grammarly.com',
        'NotebookLM': 'https://notebooklm.google.com',
        'ChatPDF': 'https://www.chatpdf.com',
        'Tableau AI': 'https://www.tableau.com',
        'DataRobot': 'https://www.datarobot.com',
        'Hugging Face': 'https://huggingface.co',
        'Cohere': 'https://cohere.com',
        'Anthropic Claude API': 'https://www.anthropic.com/api',
        'OpenAI API': 'https://openai.com/api',
        'Sora': 'https://openai.com/sora',
        'Sora 2': 'https://openai.com/sora',
        'Google AI Studio': 'https://aistudio.google.com',
        'Antigravity': 'https://deepmind.google/technologies/gemini/',
        'Opal': 'https://opal.dev',
        'Veo 3': 'https://deepmind.google/technologies/veo/',
        'Gemini 3 Pro': 'https://deepmind.google/technologies/gemini/',
        'Claude Sonnet 4.5': 'https://www.anthropic.com',
        'GPT-5.2': 'https://openai.com',
        'Genspark': 'https://www.genspark.ai',
        'n8n': 'https://n8n.io',
        'Resemble AI': 'https://www.resemble.ai',
        'Amper Music': 'https://www.ampermusic.com',
        'Khanmigo': 'https://www.khanacademy.org/khanmigo',
        'Socratic': 'https://socratic.org',
        'Persado': 'https://www.persado.com',
        'Phrasee': 'https://phrasee.co',
        'Zendesk AI': 'https://www.zendesk.com/ai',
        'Freshdesk AI': 'https://www.freshworks.com/freshdesk',
        'Amazon Polly': 'https://aws.amazon.com/polly',
        'Google Text-to-Speech': 'https://cloud.google.com/text-to-speech',
        'Stable Diffusion 3': 'https://stability.ai',
        'DALL-E 3': 'https://openai.com/dall-e-3',
        'Runway Gen-2': 'https://runwayml.com',
        'Manus': 'https://manus.ai',
        'DeepSeek': 'https://www.deepseek.com',
        'ImageFX': 'https://aitestkitchen.withgoogle.com/tools/image-fx',
        'Kling AI': 'https://kling.kuaishou.com',
        'Janus Pro': 'https://github.com/deepseek-ai/Janus',
        'ComfyUI': 'https://github.com/comfyanonymous/ComfyUI',
        'Fooocus': 'https://github.com/lllyasviel/Fooocus',
        'Civitai': 'https://civitai.com',
        'Playground AI': 'https://playgroundai.com',
        'Bing Image Creator': 'https://www.bing.com/images/create',
        'LTX Studio': 'https://ltx.studio',
        'Runway Gen-4': 'https://runwayml.com',
        'Dream Machine': 'https://lumalabs.ai',
        'Microsoft Power Automate': 'https://powerautomate.microsoft.com',
        'Workato': 'https://www.workato.com',
        'Bardeen AI': 'https://www.bardeen.ai',
        'Windsurf': 'https://windsurf.ai',
        'Kimi': 'https://kimi.moonshot.cn',
        'AutoGPT': 'https://agpt.co',
        'Riffusion': 'https://www.riffusion.com',
        'Lyria': 'https://deepmind.google/technologies/lyria/',
        'Slack AI': 'https://slack.com',
        'Zoom AI Companion': 'https://www.zoom.us',
        'Microsoft 365 Copilot': 'https://www.microsoft.com/microsoft-365/copilot',
        'Amazon Q Developer': 'https://aws.amazon.com/q/developer/',
        'Consensus': 'https://consensus.app',
        'Elicit': 'https://elicit.org',
        'Poe': 'https://poe.com',
        'Groq': 'https://groq.com',
        'HaiLuo AI': 'https://hailuoai.com',
        'Viggle': 'https://viggle.ai',
        'ClickUp Brain': 'https://clickup.com/ai',
        'Asana Intelligence': 'https://asana.com/product/ai',
        'Monday.com AI': 'https://monday.com/lang/ja/work-management/ai',
        'CodeRabbit': 'https://coderabbit.ai',
        'Sourcery': 'https://sourcery.ai',
        'Devin': 'https://devin.ai',
        'Gumloop': 'https://www.gumloop.com',
        'Gamma': 'https://gamma.app',
        'Otter.ai': 'https://otter.ai',
        'Beautiful.ai': 'https://www.beautiful.ai',
        'Krea AI': 'https://www.krea.ai',
        'Meshy': 'https://meshy.ai',
        'Tripo': 'https://www.tripo3d.ai',
        'Magic Hour': 'https://magichour.ai',
        'Magnific AI': 'https://magnific.ai',
        'Harvey': 'https://www.harvey.ai',
        'Rosebud': 'https://www.rosebud.app',
        'Lovart AI': 'https://lovart.ai',
        'AquaVoice': 'https://aquavoice.com',
        'Skywork AI': 'https://skywork.ai',
        'Notta': 'https://www.notta.ai',
        'DomoAI': 'https://domoai.app',
        'Marble (World Labs)': 'https://worldlabs.ai',
        'GoMarble': 'https://gomarble.ai',
        'Samurai AI (Summary)': 'https://gosamurai.ai',
        'SamurAI (Hiring)': 'https://samur-ai.tech',
        'Google Workspace (Gemini)': 'https://workspace.google.com/solutions/ai',
        'Google Mixboard': 'https://labs.google',
        'MusicFX': 'https://aitestkitchen.withgoogle.com/tools/music-fx',
        'Dify': 'https://dify.ai',
        'GLM-4': 'https://www.zhipuai.cn',
        'Limitless': 'https://www.limitless.ai',
        'Raycast AI': 'https://www.raycast.com/ai',
        'Comet': 'https://www.comet.com',
        'Ray3': 'https://ray3.co/',
        'Lucy Edit AI': 'https://lucyedit.co/',
        'MuleRun': 'https://mulerun.ai',
        'Hunyuan 3D Studio': 'https://3d.hunyuan.tencent.com',
        'Producer AI': 'https://producer.ai',
        'TUNEE': 'https://tunee.ai',
        'Sousaku AI': 'https://sousaku.ai',
        'Felo Slide': 'https://felo.ai',
        'MiniMax': 'https://www.minimax.io/',
        'ERNIE Bot (Baidu)': 'https://yiyan.baidu.com',
        'Qwen (Owen)': 'https://chat.qwen.ai'
    };

    // URLがない場合はGoogle検索へのリンクを生成
    return urlMap[toolName] || `https://www.google.com/search?q=${encodeURIComponent(toolName)}`;
}

// カテゴリの描画
function renderCategories() {
    categoryList.innerHTML = '';
    categories.forEach(category => {
        const div = document.createElement('div');
        div.className = `category-item ${selectedCategories.has(category) ? 'checked' : ''}`;
        div.innerHTML = `
            <input type="checkbox" value="${category}" ${selectedCategories.has(category) ? 'checked' : ''}>
            <label>${tCat(category)}</label>
        `;

        div.addEventListener('click', (e) => {
            if (e.target.type !== 'checkbox') {
                const checkbox = div.querySelector('input');
                checkbox.checked = !checkbox.checked;
                toggleCategory(category);
            }
        });

        const input = div.querySelector('input');
        input.addEventListener('change', (e) => {
            e.stopPropagation();
            toggleCategory(category);
        });

        categoryList.appendChild(div);
    });
}

// カテゴリ切り替え
function toggleCategory(category) {
    if (selectedCategories.has(category)) {
        selectedCategories.delete(category);
    } else {
        selectedCategories.add(category);
    }
    renderCategories(); // スタイル更新のため再描画
    renderAITools();
}

// AIツールの描画
function renderAITools() {
    aiList.innerHTML = '';

    const filteredTools = aiTools.filter(tool => {
        const matchSearch = tool.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            tool.features.some(f => f.toLowerCase().includes(searchInput.value.toLowerCase()));

        if (selectedCategories.size === 0) return matchSearch;

        const matchCategory = tool.categories.some(c => selectedCategories.has(c));
        return matchSearch && matchCategory;
    });

    filteredTools.forEach(tool => {
        const div = document.createElement('div');
        div.className = `ai-card-item ${selectedTools.has(tool.id) ? 'checked' : ''}`;

        // カテゴリタグの生成
        const tagsHtml = tool.categories.map(cat => `<span class="ai-tag">${tCat(cat)}</span>`).join('');

        // リンクの生成
        const toolUrl = getToolUrl(tool.name);

        div.innerHTML = `
            <div class="ai-card-header">
                <a href="${toolUrl}" target="_blank" rel="noopener noreferrer" class="ai-title tool-link" onclick="event.stopPropagation();">${tool.name}</a>
            </div>

            <div class="ai-tags">
                ${tagsHtml}
            </div>
            <input type="checkbox" value="${tool.id}" ${selectedTools.has(tool.id) ? 'checked' : ''}>
        `;

        div.addEventListener('click', () => {
            toggleToolSelection(tool.id);
        });

        aiList.appendChild(div);
    });
}

// ツール選択切り替え
function toggleToolSelection(id) {
    if (selectedTools.has(id)) {
        selectedTools.delete(id);
    } else {
        selectedTools.add(id);
    }
    updateUIState();
}

// UI状態更新 (選択数、ドック表示など)
function updateUIState() {
    // カウント更新
    selectedCount.textContent = selectedTools.size;

    // ドックの表示制御
    if (selectedTools.size > 0) {
        document.body.classList.add('has-selection');
        compareBtn.disabled = false;
    } else {
        document.body.classList.remove('has-selection');
        compareBtn.disabled = true;
    }

    // カードのスタイル更新 (全再描画は重いのでクラス操作だけで済ますのが理想だが、簡単のため再描画)
    renderAITools();

    // 比較画面が開いていたら更新
    if (comparisonModal && comparisonModal.style.display === 'flex') {
        renderComparison();
    }
}

// 比較画面の描画
function renderComparison() {
    if (!comparisonGrid) return;
    comparisonGrid.innerHTML = '';

    if (selectedTools.size === 0) {
        comparisonGrid.innerHTML = `<p style="text-align:center; width:100%; color:var(--text-muted);">${t('subtitle')}</p>`;
        return;
    }

    const toolsToCompare = aiTools.filter(t => selectedTools.has(t.id));

    toolsToCompare.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'ai-detail-card';

        const toolUrl = getToolUrl(tool.name);

        const priceDisplay = (currentLang === 'en' && tool.data?.en?.price) ? tool.data.en.price : tool.price;
        const featuresDisplay = (currentLang === 'en' && tool.data?.en?.features) ? tool.data.en.features : tool.features;
        const strengthsDisplay = (currentLang === 'en' && tool.data?.en?.strengths) ? tool.data.en.strengths : tool.strengths;
        const weaknessesDisplay = (currentLang === 'en' && tool.data?.en?.weaknesses) ? tool.data.en.weaknesses : tool.weaknesses;

        card.innerHTML = `
            <h3><a href="${toolUrl}" target="_blank" rel="noopener noreferrer" class="tool-link-card">${tool.name}</a></h3>
            
            <div class="detail-section">
                <h4>${t('features')}</h4>
                <ul>
                    ${featuresDisplay.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h4>${t('price')}</h4>
                <p style="font-size:14px;">${priceDisplay}</p>
            </div>

            <div class="detail-section">
                <h4>${t('strengths')}</h4>
                <ul>
                    ${strengthsDisplay.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>${t('weaknesses')}</h4>
                <ul style="color:#ef4444;"> 
                    ${weaknessesDisplay.map(w => `<li style="color:var(--text-muted);">${w}</li>`).join('')}
                </ul>
            </div>
        `;
        comparisonGrid.appendChild(card);
    });
}

// イベントリスナー設定
function setupEventListeners() {
    // 検索
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderAITools();
        });
    }

    // 選択クリア
    if (clearSelectionBtn) {
        clearSelectionBtn.addEventListener('click', () => {
            selectedTools.clear();
            updateUIState();
        });
    }

    // 比較ボタン (モーダルオープン)
    if (compareBtn) {
        compareBtn.addEventListener('click', () => {
            renderComparison();
            if (comparisonModal) comparisonModal.classList.add('active');
        });
    }

    // モーダルクローズ
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (comparisonModal) comparisonModal.classList.remove('active');
        });
    }

    // モーダル背景クリックで閉じる
    if (comparisonModal) {
        comparisonModal.addEventListener('click', (e) => {
            if (e.target === comparisonModal) {
                comparisonModal.classList.remove('active');
            }
        });
    }

    // ハンバーガーメニュー
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // サイドバー外クリックで閉じる (簡易実装)
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }
}

// アプリケーション開始
init();


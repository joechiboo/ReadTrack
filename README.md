# 📚 ReadTrack - 個人閱讀追蹤系統

> 記錄閱讀心得，追蹤成長軌跡

[![Deploy to GitHub Pages](https://github.com/joechiboo/ReadTrack/actions/workflows/deploy.yml/badge.svg)](https://github.com/joechiboo/ReadTrack/actions/workflows/deploy.yml)

## 🌟 專案簡介

ReadTrack 是一個簡潔優雅的個人閱讀管理系統，用於記錄和分享讀書心得。目標是透過持續閱讀和反思，達到思維成長與生活改變。

🔗 **線上展示**: https://joechiboo.github.io/ReadTrack/

## ✨ 功能特色

### 已實現功能
- 📖 **讀書心得展示** - 以卡片形式展示每本書的心得摘要
- 🔍 **智慧搜尋** - 可搜尋書名、標籤、內容
- ⭐ **評分篩選** - 快速篩選不同評分的書籍
- 🏷️ **標籤分類** - 點擊標籤快速找到相關書籍
- 📅 **排序功能** - 支援日期、評分多種排序方式
- 📱 **響應式設計** - 完美支援手機、平板、桌面瀏覽
- 🎨 **優雅介面** - 現代化設計，閱讀體驗舒適

### 開發中功能
- 📊 資料視覺化 - 閱讀統計圖表
- 📝 線上編輯器 - 直接在網頁上撰寫心得
- 💬 評論系統 - 讀者互動討論
- 🌙 深色模式 - 保護眼睛的夜間模式

## 🎯 2025 年度目標

**52 篇讀書心得** - 平均每週一篇，但保持彈性：
- 有共鳴的書才寫心得
- 長短不拘，重質不重量
- 專注於實踐，而非單純記錄

目前進度：**3 / 52** 📈

## 📂 專案結構

```
ReadTrack/
├── index.html                 # 首頁
├── review.html               # 心得閱讀頁面
├── reviews/                  # 讀書心得 (舊格式)
│   ├── 2025-11-13-富爸爸窮爸爸.md
│   └── 2025-11-15-療癒內在小孩.md
├── reading-notes/            # 讀書心得 (新格式)
│   └── the-4-hour-workweek.md
├── .github/workflows/        # GitHub Actions 自動部署
│   └── deploy.yml
└── .specify/                 # SDD 規格文件
    └── memory/
        └── specification.md
```

## 🚀 快速開始

### 本地開發

1. Clone 專案
```bash
git clone https://github.com/joechiboo/ReadTrack.git
cd ReadTrack
```

2. 開啟本地伺服器（任選一種方式）
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# 或直接用瀏覽器開啟 index.html
```

3. 瀏覽 http://localhost:8000

### 新增讀書心得

1. 在 `reading-notes/` 建立新的 Markdown 檔案
2. 使用以下格式撰寫心得：

```markdown
# 書名

> 作者：XXX
> 閱讀日期：2025-XX-XX
> 評分：★★★★☆

## 為什麼讀這本書
...

## 核心概念
...

## 實踐與反思
...
```

3. 在 `index.html` 新增對應的書籍卡片
4. 提交並推送到 GitHub

## 🛠️ 技術架構

- **前端**: 純 HTML/CSS/JavaScript（無框架依賴）
- **部署**: GitHub Pages + GitHub Actions
- **內容**: Markdown 格式
- **開發工具**: Claude Code Assistant

### 為什麼不用框架？

- **簡單就是美** - 沒有複雜的建置流程
- **快速載入** - 無需載入龐大的框架
- **易於維護** - 任何人都能理解和修改
- **專注內容** - 技術服務於內容，而非相反

## 📝 開發規範

### Git Commit 規範

使用語意化提交訊息：
- `feat`: 新功能
- `fix`: 修復問題
- `docs`: 文件更新
- `style`: 程式碼風格調整
- `refactor`: 重構

範例：
```
feat: 新增首頁篩選功能
fix: 修復行動版顯示問題
```

### 分支策略

- `main`: 主分支，自動部署到 GitHub Pages
- `feature/*`: 功能開發分支
- `fix/*`: 問題修復分支

## 🤝 貢獻指南

歡迎提出建議和改進！

1. Fork 本專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'feat: 新增某個功能'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📜 授權

MIT License - 歡迎自由使用和修改

## 👨‍💻 關於作者

**Joe Huang**
- 38 歲 IT 管理者
- 在職攻讀碩士學位
- 相信「閱讀改變思維，思維改變人生」

### 聯絡方式
- GitHub: [@joechiboo](https://github.com/joechiboo)
- 專案連結: https://github.com/joechiboo/ReadTrack

## 🙏 致謝

- 感謝 Claude Code 的開發協助
- 感謝所有推薦好書的朋友們
- 特別感謝家人的支持與理解

---

<p align="center">
  💡 <strong>閱讀改變思維，思維改變人生</strong>
</p>

<p align="center">
  Made with ❤️ and 📚
</p>
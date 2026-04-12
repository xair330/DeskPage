# DeskPage

> A high-performance Chrome New Tab Page extension with a Glassmorphism UI — minimal, beautiful, and fully customizable.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## ✨ Features

### 🎨 Visual Design
- **Glassmorphism UI** — frosted glass cards, backdrop blur, and semi-transparent overlays
- **Dark mode first** — deep navy background with subtle gradients
- **Sun-Panel style layout** — wide side margins, section-header-first information hierarchy
- **Custom background** — upload any image with adjustable blur and dim overlay
- **Colorful Favicons** — site icons displayed in full color

### 🕐 Header
- Real-time **clock** (HH:MM) + date display
- **Google search bar** integrated into the header
- Creator credit **by Xair330** displayed beneath the brand name

### 📊 System Status
- Live monitoring of: **CPU load · Memory usage · Battery · Network speed · Screen resolution**
- Sun-Panel style SVG icon indicators with semi-transparent progress bars

### 🗂️ Categories & Shortcuts
- Create and **delete categories** via right-click context menu
- Add shortcuts with **name + URL**, auto-fetches Favicon
- **Bookmark drag-in** — drag any bookmark from Chrome's bookmarks bar directly onto the page to add it instantly
- Shortcuts display in a **responsive grid** layout

### 🖱️ Drag & Drop Sorting
- **Card sorting** (horizontal) — drag site cards within a category; swap on entry, no midpoint threshold
- **Category sorting** (vertical) — drag the section header to reorder categories; uses `dragenter` boundary detection for instant, smooth response
- Both use **FLIP animation** for silky 60fps transitions
- Built with native HTML5 Drag & Drop API — zero dependencies

### ⚙️ Settings
- Upload custom **background image**
- **Blur** slider (0–20px) and **dim** overlay (0–85%)
- **Reset all data** to factory defaults

### 🔧 UI Controls (top-right)
| Icon | Action |
|------|--------|
| ↺ Refresh | Reload the new tab page |
| 📁 New Category | Create a new shortcut category |
| ⚙️ Settings | Open settings panel |

---

## 🚀 Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the `deskpage` folder
5. Open a new tab — DeskPage is ready!

```
git clone https://github.com/xair330/DeskPage.git
```

---

## 📁 Project Structure

```
deskpage/
├── manifest.json   # Chrome Extension Manifest V3 config
├── index.html      # Page structure & modals
├── style.css       # Glassmorphism design system
└── app.js          # Core logic (Storage, Render, DragSorter, CategorySorter, SystemStatus)
```

---

## 🧠 Technical Highlights

| Feature | Implementation |
|---------|---------------|
| Drag & Drop | Native HTML5 DnD API + FLIP animation |
| Category reorder | `dragenter` + `relatedTarget` boundary detection |
| Card reorder | DOM-index swap — enter-to-swap, no midpoint |
| Data persistence | `chrome.storage.local` with `localStorage` fallback |
| System status | `navigator` API (battery, connection, screen) |
| Bookmark drop | `text/uri-list` detection + `DOMParser` for name extraction |
| Animation | CSS `cubic-bezier(0.34,1.56,0.64,1)` spring physics |

---

## 🔑 Permissions

```json
"permissions": ["storage"]
```

Only the `storage` permission is required — no network requests, no tracking.

---

## 📸 Preview

> Open a new tab in Chrome after installing to see the full experience.

---

## 👤 Author

**Xair330** — crafted with care.

- GitHub: [@xair330](https://github.com/xair330)
- Repository: [xair330/DeskPage](https://github.com/xair330/DeskPage)

---

## 📄 License

MIT © 2026 Xair330

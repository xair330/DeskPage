'use strict';

// ============================================================
// Default categories & sites
// ============================================================

const DEFAULT_CATEGORIES = [
  {
    id: 'aviation',
    name: 'Aviation',
    color: '#60a5fa',
    sites: [
      { id: 'av-1', name: 'AirbusWorld',   url: 'https://www.airbusworld.com' },
      { id: 'av-2', name: 'FlightAware',   url: 'https://flightaware.com' },
      { id: 'av-3', name: 'Skybrary',      url: 'https://skybrary.aero' },
      { id: 'av-4', name: 'ICAO',          url: 'https://www.icao.int' },
      { id: 'av-5', name: 'CAAC',          url: 'http://www.caac.gov.cn' },
      { id: 'av-6', name: '航空气象',       url: 'http://www.nmc.cn' },
      { id: 'av-7', name: 'METAR',         url: 'https://aviationweather.gov/metar' },
      { id: 'av-8', name: 'Skyvector',     url: 'https://skyvector.com' },
    ]
  },
  {
    id: 'ai',
    name: 'AI',
    color: '#a78bfa',
    sites: [
      { id: 'ai-1', name: 'ChatGPT',       url: 'https://chat.openai.com' },
      { id: 'ai-2', name: 'Claude',        url: 'https://claude.ai' },
      { id: 'ai-3', name: 'Gemini',        url: 'https://gemini.google.com' },
      { id: 'ai-4', name: 'Perplexity',    url: 'https://www.perplexity.ai' },
      { id: 'ai-5', name: 'Midjourney',    url: 'https://www.midjourney.com' },
      { id: 'ai-6', name: 'Hugging Face',  url: 'https://huggingface.co' },
      { id: 'ai-7', name: 'Suno AI',       url: 'https://suno.ai' },
      { id: 'ai-8', name: 'Cursor',        url: 'https://cursor.sh' },
    ]
  },
  {
    id: 'media',
    name: 'Media',
    color: '#f87171',
    sites: [
      { id: 'me-1', name: 'YouTube',       url: 'https://www.youtube.com' },
      { id: 'me-2', name: 'Netflix',       url: 'https://www.netflix.com' },
      { id: 'me-3', name: 'Bilibili',      url: 'https://www.bilibili.com' },
      { id: 'me-4', name: 'U Music',       url: 'https://music.163.com' },
      { id: 'me-5', name: 'Spotify',       url: 'https://open.spotify.com' },
      { id: 'me-6', name: '爱奇艺',         url: 'https://www.iqiyi.com' },
      { id: 'me-7', name: 'Twitter / X',   url: 'https://x.com' },
      { id: 'me-8', name: 'Twitch',        url: 'https://www.twitch.tv' },
    ]
  },
  {
    id: 'shopping',
    name: 'Shopping',
    color: '#fb923c',
    sites: [
      { id: 'sh-1', name: '淘宝',           url: 'https://www.taobao.com' },
      { id: 'sh-2', name: '京东',           url: 'https://www.jd.com' },
      { id: 'sh-3', name: 'Amazon',        url: 'https://www.amazon.com' },
      { id: 'sh-4', name: '拼多多',          url: 'https://www.pinduoduo.com' },
      { id: 'sh-5', name: '1688',          url: 'https://www.1688.com' },
      { id: 'sh-6', name: '什么值得买',      url: 'https://www.smzdm.com' },
      { id: 'sh-7', name: '闲鱼',           url: 'https://www.goofish.com' },
    ]
  },
  {
    id: 'it',
    name: 'IT',
    color: '#4ade80',
    sites: [
      { id: 'it-1', name: 'GitHub',        url: 'https://github.com' },
      { id: 'it-2', name: 'Stack Overflow',url: 'https://stackoverflow.com' },
      { id: 'it-3', name: 'MDN',           url: 'https://developer.mozilla.org' },
      { id: 'it-4', name: 'npm',           url: 'https://www.npmjs.com' },
      { id: 'it-5', name: 'Docker Hub',    url: 'https://hub.docker.com' },
      { id: 'it-6', name: 'Chiphell',      url: 'https://www.chiphell.com' },
      { id: 'it-7', name: 'n8n.io',        url: 'https://n8n.io' },
      { id: 'it-8', name: 'ASUS',          url: 'https://www.asus.com' },
    ]
  },
  {
    id: 'psychology',
    name: 'Psychology',
    color: '#f472b6',
    sites: [
      { id: 'ps-1', name: 'Psych Today',   url: 'https://www.psychologytoday.com' },
      { id: 'ps-2', name: 'APA',           url: 'https://www.apa.org' },
      { id: 'ps-3', name: 'ResearchGate',  url: 'https://www.researchgate.net' },
      { id: 'ps-4', name: 'PubMed',        url: 'https://pubmed.ncbi.nlm.nih.gov' },
      { id: 'ps-5', name: 'Coursera',      url: 'https://www.coursera.org' },
      { id: 'ps-6', name: 'Khan Academy',  url: 'https://www.khanacademy.org' },
    ]
  },
  {
    id: 'vps',
    name: 'VPS',
    color: '#22d3ee',
    sites: [
      { id: 'vp-1', name: 'MetaCubeXD',   url: 'http://192.168.2.1' },
      { id: 'vp-2', name: 'Vultr',         url: 'https://www.vultr.com' },
      { id: 'vp-3', name: 'DigitalOcean',  url: 'https://www.digitalocean.com' },
      { id: 'vp-4', name: 'Hetzner',       url: 'https://www.hetzner.com' },
      { id: 'vp-5', name: 'Cloudflare',    url: 'https://dash.cloudflare.com' },
      { id: 'vp-6', name: 'Linode',        url: 'https://www.linode.com' },
      { id: 'vp-7', name: '搬瓦工',         url: 'https://bandwagonhost.com' },
    ]
  },
  {
    id: 'office',
    name: 'Office',
    color: '#fbbf24',
    sites: [
      { id: 'of-1', name: 'Gmail',         url: 'https://mail.google.com' },
      { id: 'of-2', name: 'Google Drive',  url: 'https://drive.google.com' },
      { id: 'of-3', name: 'Google Docs',   url: 'https://docs.google.com' },
      { id: 'of-4', name: 'Notion',        url: 'https://www.notion.so' },
      { id: 'of-5', name: '飞书',           url: 'https://www.feishu.cn' },
      { id: 'of-6', name: 'Outlook',       url: 'https://outlook.live.com' },
    ]
  },
  {
    id: 'other',
    name: 'Other',
    color: '#94a3b8',
    sites: [
      { id: 'ot-1', name: 'FSF',           url: 'https://www.fsf.org' },
      { id: 'ot-2', name: 'Reddit',        url: 'https://www.reddit.com' },
      { id: 'ot-3', name: 'Wikipedia',     url: 'https://www.wikipedia.org' },
      { id: 'ot-4', name: 'Quora',         url: 'https://www.quora.com' },
    ]
  },
];

const COLOR_PRESETS = [
  '#60a5fa', '#a78bfa', '#f87171', '#fb923c',
  '#4ade80', '#f472b6', '#22d3ee', '#fbbf24', '#94a3b8',
];

// ============================================================
// Storage Wrapper — chrome.storage with localStorage fallback
// (localStorage fallback used when opened via file:// directly)
// ============================================================

const _hasChromeStorage = typeof chrome !== 'undefined' &&
                          chrome.storage &&
                          chrome.storage.local;

const Storage = {
  async get(key) {
    if (_hasChromeStorage) {
      return new Promise(resolve => {
        chrome.storage.local.get(key, result => resolve(result[key] ?? null));
      });
    }
    try {
      const raw = localStorage.getItem('dp_' + key);
      return raw !== null ? JSON.parse(raw) : null;
    } catch { return null; }
  },

  async set(key, value) {
    if (_hasChromeStorage) {
      return new Promise(resolve => {
        chrome.storage.local.set({ [key]: value }, resolve);
      });
    }
    try { localStorage.setItem('dp_' + key, JSON.stringify(value)); } catch {}
  },

  async remove(key) {
    if (_hasChromeStorage) {
      return new Promise(resolve => {
        chrome.storage.local.remove(key, resolve);
      });
    }
    try { localStorage.removeItem('dp_' + key); } catch {}
  },
};

// ============================================================
// IndexedDB — for storing background image blob
// ============================================================

const BgDB = {
  _db: null,

  async open() {
    if (this._db) return this._db;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('DeskPageDB', 1);
      req.onupgradeneeded = e => {
        e.target.result.createObjectStore('assets');
      };
      req.onsuccess = e => {
        this._db = e.target.result;
        resolve(this._db);
      };
      req.onerror = e => reject(e.target.error);
    });
  },

  async get(key) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('assets', 'readonly');
      const req = tx.objectStore('assets').get(key);
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror  = () => reject(req.error);
    });
  },

  async set(key, value) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('assets', 'readwrite');
      tx.objectStore('assets').put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror    = () => reject(tx.error);
    });
  },

  async delete(key) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('assets', 'readwrite');
      tx.objectStore('assets').delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror    = () => reject(tx.error);
    });
  },
};

// ============================================================
// Main Application
// ============================================================

class DeskPageApp {
  constructor() {
    this.categories = [];
    this.settings   = { blur: 0, dim: 40 };
    this._contextCatId = null;
    this._bgObjectUrl  = null;
  }

  // ---------- Init ----------

  async init() {
    await this._loadData();
    this._initClock();
    this._renderAll();
    this._bindEvents();
    await this._loadBackground();
    this._applySettings();

    // System status strip
    const status = new SystemStatus();
    status.init();
  }

  async _loadData() {
    const savedCats = await Storage.get('cats_v3');
    this.categories = savedCats ?? JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));

    // Migrate: strip emoji from category names if needed
    this.categories.forEach(c => { c.name = c.name.replace(/^\p{Emoji}\s*/u, '').trim(); });

    const savedSettings = await Storage.get('settings');
    if (savedSettings) this.settings = { ...this.settings, ...savedSettings };
  }

  async _saveCategories() {
    await Storage.set('cats_v3', this.categories);
  }

  async _saveSettings() {
    await Storage.set('settings', this.settings);
  }

  // ---------- Clock ----------

  _initClock() {
    const tick = () => {
      const now = new Date();
      document.getElementById('clock-time').textContent =
        now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false });
      document.getElementById('clock-date').textContent =
        now.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    };
    tick();
    setInterval(tick, 1000);
  }

  // ---------- Render ----------

  _renderAll() {
    const container = document.getElementById('categories-container');
    container.innerHTML = this.categories.map(cat => this._renderCard(cat)).join('');
    this._bindCardEvents();
  }

  _renderCard(cat) {
    const sitesHtml = cat.sites.length
      ? cat.sites.map(site => this._renderSite(site, cat.id, cat.color)).join('')
      : '<div class="sites-empty">暂无快捷方式，点击 + 添加</div>';

    return `
      <div class="category-section" data-cat-id="${this._esc(cat.id)}" style="--cat-color:${this._esc(cat.color)}">
        <div class="section-header" draggable="true">
          <span class="section-title">${this._esc(cat.name)}</span>
          <div class="section-line"></div>
          <div class="cat-actions">
            <button class="cat-btn cat-add-btn" data-cat-id="${this._esc(cat.id)}" title="添加到此分类">+</button>
            <button class="cat-btn cat-menu-btn" data-cat-id="${this._esc(cat.id)}" title="分类菜单">⋯</button>
          </div>
        </div>
        <div class="sites-grid">${sitesHtml}</div>
      </div>`;
  }

  _renderSite(site, catId, catColor = '#60a5fa') {
    const fav = this._faviconUrl(site.url);
    const initial = (site.name.replace(/[^\w\u4e00-\u9fa5]/g, '')[0] || '?').toUpperCase();
    return `
      <a class="site-item" href="${this._esc(site.url)}" target="_blank"
         data-site-id="${this._esc(site.id)}" data-cat-id="${this._esc(catId)}"
         style="--cat-color:${this._esc(catColor)}" draggable="true">
        <div class="site-favicon-wrap">
          <img class="site-favicon" src="${fav}" alt=""
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="site-favicon-fallback">${initial}</div>
        </div>
        <span class="site-name">${this._esc(site.name)}</span>
        <button class="site-delete-btn" data-site-id="${this._esc(site.id)}" data-cat-id="${this._esc(catId)}" title="删除">×</button>
      </a>`;
  }

  _faviconUrl(url) {
    try {
      const { hostname } = new URL(url);
      return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=32`;
    } catch { return ''; }
  }

  _esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ---------- Card-level event binding ----------

  _bindCardEvents() {
    // Site delete buttons
    document.querySelectorAll('.site-delete-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        this._deleteSite(btn.dataset.catId, btn.dataset.siteId);
      });
    });

    // Category "+" button
    document.querySelectorAll('.cat-add-btn').forEach(btn => {
      btn.addEventListener('click', () => this._openAddSite(btn.dataset.catId));
    });

    // Category menu button
    document.querySelectorAll('.cat-menu-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        this._showContextMenu(btn.dataset.catId, e.clientX, e.clientY);
      });
    });

    // Initialize drag-sort for each category grid
    const sorter = new DragSorter();
    document.querySelectorAll('.category-section').forEach(section => {
      const catId = section.dataset.catId;
      const grid  = section.querySelector('.sites-grid');
      if (grid) {
        sorter.attachGrid(grid, catId, (cid, order) => this._applySortedOrder(cid, order));
      }
    });

    // Initialize category drag-sort (whole section reorder)
    const catSorter = new CategorySorter();
    catSorter.attachContainer(
      document.getElementById('categories-container'),
      order => this._applyCategorySortedOrder(order)
    );
  }

  // ---------- CRUD: Sites ----------

  async _deleteSite(catId, siteId) {
    const cat = this.categories.find(c => c.id === catId);
    if (!cat) return;
    cat.sites = cat.sites.filter(s => s.id !== siteId);
    await this._saveCategories();
    this._renderAll();
    this._showToast('快捷方式已删除');
  }

  _openAddSite(preCatId = null) {
    const select = document.getElementById('new-site-category');
    select.innerHTML = this.categories.map(cat =>
      `<option value="${this._esc(cat.id)}" ${cat.id === preCatId ? 'selected' : ''}>${this._esc(cat.name)}</option>`
    ).join('');
    this._openModal('add-shortcut-modal');
  }

  async _confirmAddSite() {
    const name  = document.getElementById('new-site-name').value.trim();
    let   url   = document.getElementById('new-site-url').value.trim();
    const catId = document.getElementById('new-site-category').value;

    if (!name || !url) { this._showToast('请填写名称和网址'); return; }
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    const cat = this.categories.find(c => c.id === catId);
    if (!cat) return;

    cat.sites.push({ id: `site-${Date.now()}`, name, url });
    await this._saveCategories();
    this._renderAll();
    this._closeModal('add-shortcut-modal');
    document.getElementById('new-site-name').value = '';
    document.getElementById('new-site-url').value  = '';
    this._showToast(`已添加「${name}」`);
  }

  // ---------- CRUD: Categories ----------

  async _confirmAddCategory() {
    const name  = document.getElementById('new-cat-name').value.trim();
    const color = document.getElementById('new-cat-color').value;
    if (!name) { this._showToast('请填写分类名称'); return; }

    this.categories.push({ id: `cat-${Date.now()}`, name, color, sites: [] });
    await this._saveCategories();
    this._renderAll();
    this._closeModal('add-category-modal');
    document.getElementById('new-cat-name').value = '';
    this._showToast(`已创建分类「${name}」`);
  }

  async _deleteCategory(catId) {
    const cat = this.categories.find(c => c.id === catId);
    if (!cat) return;
    if (!confirm(`确定删除分类「${cat.name}」及其所有快捷方式？`)) return;
    this.categories = this.categories.filter(c => c.id !== catId);
    await this._saveCategories();
    this._renderAll();
    this._showToast('分类已删除');
  }

  // ---------- Context menu ----------

  _showContextMenu(catId, x, y) {
    this._contextCatId = catId;
    const menu = document.getElementById('context-menu');
    menu.style.display = 'block';
    menu.style.left = x + 'px';
    menu.style.top  = y + 'px';

    // Prevent menu from going off screen
    requestAnimationFrame(() => {
      const rect = menu.getBoundingClientRect();
      if (rect.right  > window.innerWidth)  menu.style.left = (x - rect.width)  + 'px';
      if (rect.bottom > window.innerHeight) menu.style.top  = (y - rect.height) + 'px';
    });
  }

  _hideContextMenu() {
    document.getElementById('context-menu').style.display = 'none';
  }

  // ---------- Modals ----------

  _openModal(id) {
    document.getElementById(id).classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
  }

  _closeModal(id) {
    document.getElementById(id).classList.remove('active');
    if (!document.querySelector('.modal.active')) {
      document.getElementById('modal-overlay').classList.remove('active');
    }
  }

  _closeAllModals() {
    document.querySelectorAll('.modal.active').forEach(m => {
      m.classList.remove('active');
    });
    document.getElementById('modal-overlay').classList.remove('active');
  }

  // ---------- Background image ----------

  async _loadBackground() {
    try {
      const blob = await BgDB.get('backgroundImage');
      if (blob) {
        const url = URL.createObjectURL(blob);
        this._applyBgUrl(url);
        document.getElementById('bg-preview-img').src = url;
        document.getElementById('bg-preview-img').style.display = 'block';
        document.getElementById('bg-no-preview').style.display  = 'none';
      }
    } catch (e) {
      console.warn('DeskPage: background load failed', e);
    }
  }

  _applyBgUrl(url) {
    if (this._bgObjectUrl && this._bgObjectUrl !== url) {
      URL.revokeObjectURL(this._bgObjectUrl);
    }
    this._bgObjectUrl = url;
    const cover = document.getElementById('bg-cover');
    const dim   = document.getElementById('bg-dim');
    cover.style.backgroundImage = `url(${url})`;
    cover.style.display = 'block';
    dim.style.display   = 'block';
    this._applySettings();
  }

  _clearBg() {
    const cover = document.getElementById('bg-cover');
    const dim   = document.getElementById('bg-dim');
    cover.style.display = 'none';
    dim.style.display   = 'none';
    if (this._bgObjectUrl) {
      URL.revokeObjectURL(this._bgObjectUrl);
      this._bgObjectUrl = null;
    }
  }

  async _handleBgUpload(file) {
    if (!file) return;
    try {
      await BgDB.set('backgroundImage', file);
      const url = URL.createObjectURL(file);
      this._applyBgUrl(url);
      // Update preview
      const img = document.getElementById('bg-preview-img');
      img.src = url;
      img.style.display = 'block';
      document.getElementById('bg-no-preview').style.display = 'none';
      this._showToast('背景图已更新');
    } catch (e) {
      console.error('DeskPage: bg save failed', e);
      this._showToast('背景图保存失败');
    }
  }

  async _clearBackground() {
    try {
      await BgDB.delete('backgroundImage');
      this._clearBg();
      const img = document.getElementById('bg-preview-img');
      img.src = '';
      img.style.display = 'none';
      document.getElementById('bg-no-preview').style.display = 'flex';
      this._showToast('背景图已清除');
    } catch (e) {
      console.error('DeskPage: clear bg failed', e);
    }
  }

  // ---------- Settings (blur / dim) ----------

  _applySettings() {
    const cover = document.getElementById('bg-cover');
    const dim   = document.getElementById('bg-dim');
    cover.style.filter         = `blur(${this.settings.blur}px)`;
    // Scale up cover to avoid blur edge white
    cover.style.transform      = this.settings.blur > 0 ? 'scale(1.05)' : 'scale(1)';
    dim.style.background       = `rgba(0,0,0,${this.settings.dim / 100})`;
  }

  async _updateBlur(val) {
    this.settings.blur = Number(val);
    document.getElementById('bg-blur-value').textContent = val + 'px';
    this._applySettings();
    await this._saveSettings();
  }

  async _updateDim(val) {
    this.settings.dim = Number(val);
    document.getElementById('bg-dim-value').textContent = val + '%';
    this._applySettings();
    await this._saveSettings();
  }

  // ---------- Search ----------

  _handleSearch(e) {
    const raw = document.getElementById('search-input').value.trim();
    if (!raw) { e.preventDefault(); return; }

    // Looks like a URL? Navigate directly.
    if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(raw) && !raw.includes(' ')) {
      e.preventDefault();
      const url = /^https?:\/\//i.test(raw) ? raw : 'https://' + raw;
      window.open(url, '_blank');
      document.getElementById('search-input').value = '';
    }
    // Otherwise let the form submit to Google normally
  }

  // ---------- Toast ----------

  _showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // ---------- Global event binding ----------

  _bindEvents() {
    // Search
    document.getElementById('search-form').addEventListener('submit', e => this._handleSearch(e));

    // Top-right icon buttons (github-btn is a plain <a> link, no binding needed)
    document.getElementById('add-category-btn').addEventListener('click', () => this._openModal('add-category-modal'));
    document.getElementById('settings-btn').addEventListener('click', () => {
      // Sync sliders to current settings
      document.getElementById('bg-blur').value    = this.settings.blur;
      document.getElementById('bg-blur-value').textContent = this.settings.blur + 'px';
      document.getElementById('bg-dim-range').value = this.settings.dim;
      document.getElementById('bg-dim-value').textContent  = this.settings.dim + '%';
      this._openModal('settings-modal');
    });

    // Modal overlay + ESC
    document.getElementById('modal-overlay').addEventListener('click', () => this._closeAllModals());
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { this._closeAllModals(); this._hideContextMenu(); }
    });

    // Modal close buttons & cancel buttons
    document.querySelectorAll('.modal-close, .btn-cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.modal || btn.closest('.modal').id;
        this._closeModal(id);
      });
    });

    // Confirm add shortcut (Enter key support too)
    document.getElementById('confirm-add-shortcut').addEventListener('click', () => this._confirmAddSite());
    document.getElementById('add-shortcut-modal').addEventListener('keydown', e => {
      if (e.key === 'Enter') this._confirmAddSite();
    });

    // Confirm add category
    document.getElementById('confirm-add-category').addEventListener('click', () => this._confirmAddCategory());
    document.getElementById('add-category-modal').addEventListener('keydown', e => {
      if (e.key === 'Enter') this._confirmAddCategory();
    });

    // Background upload
    document.getElementById('bg-upload').addEventListener('change', e => {
      const file = e.target.files[0];
      if (file) this._handleBgUpload(file);
      e.target.value = ''; // allow re-upload same file
    });

    document.getElementById('clear-bg-btn').addEventListener('click', () => this._clearBackground());

    // Sliders
    document.getElementById('bg-blur').addEventListener('input', e => this._updateBlur(e.target.value));
    document.getElementById('bg-dim-range').addEventListener('input', e => this._updateDim(e.target.value));

    // Reset data
    document.getElementById('reset-data-btn').addEventListener('click', async () => {
      if (!confirm('确定重置所有数据？这将恢复默认的分类和快捷方式。')) return;
      await Storage.remove('cats_v3');
      this.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
      this._renderAll();
      this._closeModal('settings-modal');
      this._showToast('数据已重置');
    });

    // Color presets
    const presetsEl = document.getElementById('color-presets');
    presetsEl.innerHTML = COLOR_PRESETS.map(c =>
      `<button class="color-preset" style="background:${c}" data-color="${c}" title="${c}"></button>`
    ).join('');
    presetsEl.querySelectorAll('.color-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('new-cat-color').value = btn.dataset.color;
      });
    });

    // Context menu actions
    document.getElementById('ctx-add-site').addEventListener('click', () => {
      this._openAddSite(this._contextCatId);
      this._hideContextMenu();
    });
    document.getElementById('ctx-delete-category').addEventListener('click', () => {
      const id = this._contextCatId;
      this._hideContextMenu();
      this._deleteCategory(id);
    });

    // Hide context menu on outside click
    document.addEventListener('click', e => {
      if (!e.target.closest('#context-menu') && !e.target.closest('.cat-menu-btn')) {
        this._hideContextMenu();
      }
    });

    // ---- Bookmark drag-in ----
    const dropZone = document.getElementById('drop-zone');
    let _dragDepth = 0; // track nested events

    document.addEventListener('dragenter', e => {
      if (!this._isExternalDrag(e)) return;
      _dragDepth++;
      dropZone.classList.add('active');
    });

    document.addEventListener('dragleave', e => {
      if (!dropZone.classList.contains('active')) return;
      _dragDepth--;
      if (_dragDepth <= 0) { _dragDepth = 0; dropZone.classList.remove('active'); }
    });

    document.addEventListener('dragover', e => {
      if (this._isExternalDrag(e)) e.preventDefault();
    });

    document.addEventListener('drop', e => {
      _dragDepth = 0;
      dropZone.classList.remove('active');
      if (this._isExternalDrag(e)) this._handleBookmarkDrop(e);
    });
  }

  // ---------- External bookmark drag helpers ----------

  _isExternalDrag(e) {
    // Internal drags use only 'text/plain'; external bookmarks/links carry 'text/uri-list'
    if (document.querySelector('.dragging, .cat-dragging')) return false;
    return Array.from(e.dataTransfer?.types || []).includes('text/uri-list');
  }

  async _handleBookmarkDrop(e) {
    e.preventDefault();
    // Extract URL (uri-list may contain multiple lines; take first valid one)
    const raw = e.dataTransfer.getData('text/uri-list') ||
                e.dataTransfer.getData('text/plain') || '';
    const url = raw.split(/\r?\n/).map(s => s.trim())
                   .find(s => /^https?:\/\//i.test(s));
    if (!url) return;

    // Try to extract a human-readable name from dragged HTML
    let name = '';
    const html = e.dataTransfer.getData('text/html');
    if (html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      name = (doc.querySelector('a')?.textContent || doc.body.textContent || '').trim();
    }
    if (!name) {
      try { name = new URL(url).hostname.replace(/^www\./, ''); } catch {}
    }

    // Open the add-shortcut modal pre-filled with url & name
    this._openAddSite(null);
    await new Promise(r => requestAnimationFrame(r));
    const nameEl = document.getElementById('new-site-name');
    const urlEl  = document.getElementById('new-site-url');
    if (nameEl) nameEl.value = name;
    if (urlEl)  urlEl.value  = url;
    // Focus the name field for quick correction
    if (nameEl) nameEl.select();
  }
}

// Patch: _applySortedOrder is called by DragSorter callback
DeskPageApp.prototype._applySortedOrder = async function(catId, newOrder) {
  const cat = this.categories.find(c => c.id === catId);
  if (!cat) return;
  const map = new Map(cat.sites.map(s => [s.id, s]));
  cat.sites = newOrder.map(id => map.get(id)).filter(Boolean);
  await this._saveCategories();
};

// Patch: _applyCategorySortedOrder
DeskPageApp.prototype._applyCategorySortedOrder = async function(newOrder) {
  const map = new Map(this.categories.map(c => [c.id, c]));
  this.categories = newOrder.map(id => map.get(id)).filter(Boolean);
  await this._saveCategories();
};

// ============================================================
// CategorySorter — FLIP drag-and-drop for whole category sections
// ============================================================

class CategorySorter {
  constructor() {
    this._dragging  = null;
    this._container = null;
    this._onSorted  = null;
  }

  attachContainer(container, onSorted) {
    this._container = container;
    this._onSorted  = onSorted;
    container.addEventListener('dragstart',  e => this._start(e));
    // dragenter fires once per element boundary crossing — no throttle needed
    container.addEventListener('dragenter',  e => this._enter(e));
    // dragover must preventDefault to allow drop (no FLIP logic here)
    container.addEventListener('dragover',   e => { if (this._dragging) e.preventDefault(); });
    container.addEventListener('dragend',    e => this._end(e));
    container.addEventListener('drop',       e => e.preventDefault());
  }

  _start(e) {
    const header = e.target.closest('.section-header');
    if (!header) return;
    const section = header.closest('.category-section');
    if (!section) return;
    e.stopPropagation();
    this._dragging = section;
    e.dataTransfer.effectAllowed = 'move';
    const ghost = Object.assign(document.createElement('div'), {
      style: 'position:fixed;top:-9999px;width:1px;height:1px;'
    });
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 0, 0);
    requestAnimationFrame(() => {
      section.classList.add('cat-dragging');
      document.body.removeChild(ghost);
    });
  }

  _enter(e) {
    if (!this._dragging) return;
    const target = e.target.closest('.category-section');
    if (!target || target === this._dragging) return;

    // True section crossing: relatedTarget must NOT be inside the same section
    const from = e.relatedTarget?.closest?.('.category-section');
    if (from === target) return;

    // Step 0: flush in-progress transforms for accurate getBCR
    const sections = [...this._container.querySelectorAll('.category-section:not(.cat-dragging)')];
    sections.forEach(s => {
      if (s.style.transform) { s.style.transition = 'none'; s.style.transform = ''; }
    });

    // Step 1: snapshot real positions
    const snap = new Map(sections.map(s => [s, s.getBoundingClientRect()]));

    // Step 2: DOM-index swap — enter = immediate swap
    const all    = [...this._container.querySelectorAll('.category-section')];
    const di     = all.indexOf(this._dragging);
    const ti     = all.indexOf(target);
    if (di > ti) { this._container.insertBefore(this._dragging, target); }
    else         { target.after(this._dragging); }

    // Step 3: FLIP animate
    sections.forEach(s => {
      const old = snap.get(s); if (!old) return;
      const now = s.getBoundingClientRect();
      const dy  = old.top - now.top;
      if (Math.abs(dy) < 0.5) return;
      s.style.transition = 'none';
      s.style.transform  = `translateY(${dy}px)`;
      s.getBoundingClientRect();
      s.style.transition = 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)';
      s.style.transform  = '';
    });
  }

  _end(e) {
    const section = this._dragging;
    if (!section) return;
    section.classList.remove('cat-dragging');
    this._container.querySelectorAll('.category-section').forEach(s => {
      s.style.transform = ''; s.style.transition = '';
    });
    const newOrder = [...this._container.querySelectorAll('.category-section')]
      .map(s => s.dataset.catId);
    this._onSorted(newOrder);
    this._dragging = null;
  }
}

// ============================================================
// System Status
// ============================================================
// DragSorter — FLIP animation drag-and-drop for site cards
// ============================================================

class DragSorter {
  constructor() {
    this._dragging = null;
    this._grid     = null;
    this._catId    = null;
    this._onSorted = null;
    this._lastOver = null;
  }

  attachGrid(grid, catId, onSorted) {
    grid.addEventListener('dragstart', e => this._start(e, grid, catId, onSorted));
    grid.addEventListener('dragover',  e => this._over(e));
    grid.addEventListener('dragend',   e => this._end(e));
    grid.addEventListener('drop',      e => e.preventDefault());
  }

  _start(e, grid, catId, onSorted) {
    const item = e.target.closest('.site-item');
    if (!item) { e.preventDefault(); return; }
    this._dragging = item;
    this._grid     = grid;
    this._catId    = catId;
    this._onSorted = onSorted;
    this._lastOver = null;
    e.dataTransfer.effectAllowed = 'move';
    // Use tiny ghost so browser doesn't show the default link-drag shadow
    const ghost = Object.assign(document.createElement('div'), {
      style: 'position:fixed;top:-9999px;width:1px;height:1px;'
    });
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 0, 0);
    requestAnimationFrame(() => {
      item.classList.add('dragging');
      document.body.removeChild(ghost);
    });
  }

  _over(e) {
    e.preventDefault();
    if (!this._dragging || !this._grid) return;
    const target = e.target.closest('.site-item');
    if (!target || target === this._dragging || target === this._lastOver) return;
    this._lastOver = target;

    // Step 0: flush in-progress transforms so getBCR reads real position
    const items = [...this._grid.querySelectorAll('.site-item:not(.dragging)')];
    items.forEach(it => {
      if (it.style.transform) {
        it.style.transition = 'none';
        it.style.transform  = '';
      }
    });

    // Step 1: snapshot real positions after flush
    const snap = new Map(items.map(it => [it, it.getBoundingClientRect()]));

    // Step 2: insert — compare DOM index, swap on entry (no midpoint needed)
    const allItems = [...this._grid.querySelectorAll('.site-item')];
    const dragIdx  = allItems.indexOf(this._dragging);
    const tgtIdx   = allItems.indexOf(target);
    // If dragging is to the right of target → insert before; else → insert after
    const before   = dragIdx > tgtIdx;
    if (before) {
      this._grid.insertBefore(this._dragging, target);
    } else {
      target.after(this._dragging);
    }

    // Step 3: FLIP — animate each displaced item
    items.forEach(it => {
      const old = snap.get(it);
      if (!old) return;
      const now = it.getBoundingClientRect();
      const dx  = old.left - now.left;
      const dy  = old.top  - now.top;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
      it.style.transition = 'none';
      it.style.transform  = `translate(${dx}px,${dy}px)`;
      it.getBoundingClientRect(); // force reflow
      it.style.transition = 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1)';
      it.style.transform  = '';
    });
  }

  _end(e) {
    const item = this._dragging;
    const grid = this._grid;
    if (!item || !grid) return;
    item.classList.remove('dragging');
    grid.querySelectorAll('.site-item').forEach(it => {
      it.style.transform  = '';
      it.style.transition = '';
    });
    const newOrder = [...grid.querySelectorAll('.site-item')].map(it => it.dataset.siteId);
    this._onSorted(this._catId, newOrder);
    this._dragging = this._grid = this._catId = this._onSorted = this._lastOver = null;
  }

  // ---------- Save sorted order to app state ----------
  // (injected from DeskPageApp._applySortedOrder via onSorted callback)
}

// ============================================================

class SystemStatus {
  constructor() {
    this._battery = null;
  }

  // ---- SVG icon definitions (Sun-Panel line style) ----
  get _icons() {
    const s = 'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
    const base = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ${s}`;
    return {
      cpu: `<svg ${base}>
        <rect x="7" y="7" width="10" height="10" rx="1"/>
        <path d="M9 7V4M12 7V4M15 7V4
                 M9 17v3M12 17v3M15 17v3
                 M7 9H4M7 12H4M7 15H4
                 M17 9h3M17 12h3M17 15h3"/>
      </svg>`,

      memory: `<svg ${base}>
        <rect x="2" y="8" width="20" height="8" rx="1"/>
        <path d="M6 8V5M9 8V5M12 8V5M15 8V5M18 8V5"/>
        <path d="M4 12h2M10 12h2M16 12h2"/>
      </svg>`,

      battery: `<svg ${base}>
        <rect x="2" y="8" width="16" height="8" rx="2"/>
        <path d="M20 11v2" stroke-width="3"/>
      </svg>`,

      batteryCharging: `<svg ${base}>
        <rect x="2" y="8" width="16" height="8" rx="2"/>
        <path d="M20 11v2" stroke-width="3"/>
        <path d="M11 8l-3 4h4l-3 4" stroke-width="1.5"/>
      </svg>`,

      network: `<svg ${base}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
                 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>`,

      networkOff: `<svg ${base}>
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55
                 M5 12.55a10.94 10.94 0 0 1 5.17-2.39
                 M10.71 5.05A16 16 0 0 1 22.56 9
                 M1.42 9a15.91 15.91 0 0 1 4.7-2.88
                 M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
      </svg>`,

      screen: `<svg ${base}>
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>`,
    };
  }

  async init() {
    if (navigator.getBattery) {
      try {
        this._battery = await navigator.getBattery();
        this._battery.addEventListener('chargingchange', () => this._render());
        this._battery.addEventListener('levelchange',   () => this._render());
      } catch { /* desktop / no battery */ }
    }
    await this._render();
    setInterval(() => this._render(), 8000);
  }

  async _render() {
    const el = document.getElementById('status-cards');
    if (!el) return;

    const ic = this._icons;
    const cards = [];

    // CPU cores
    cards.push({
      icon: ic.cpu,
      name: 'CPU',
      value: `${navigator.hardwareConcurrency || '?'} Logical Cores`,
      pct: null,
      color: '#60a5fa',
    });

    // JS Heap Memory (Chrome-specific)
    if (performance && performance.memory) {
      const used  = performance.memory.usedJSHeapSize;
      const total = performance.memory.jsHeapSizeLimit;
      const pct   = Math.min(100, Math.round(used / total * 100));
      const usedMB  = (used  / 1048576).toFixed(0);
      const totalMB = (total / 1048576).toFixed(0);
      const color = pct > 80 ? '#f87171' : pct > 55 ? '#fb923c' : '#4ade80';
      cards.push({ icon: ic.memory, name: 'Memory', value: `${usedMB} / ${totalMB} MB`, pct, color });
    }

    // Battery
    if (this._battery) {
      const b       = this._battery;
      const pct     = Math.round(b.level * 100);
      const charging = b.charging;
      const color   = pct < 20 ? '#f87171' : pct < 50 ? '#fb923c' : '#4ade80';
      let label = `${pct}%`;
      if (charging) label += ' · Charging';
      else if (b.dischargingTime && b.dischargingTime < Infinity) {
        const h = Math.floor(b.dischargingTime / 3600);
        const m = Math.floor((b.dischargingTime % 3600) / 60);
        label += ` · ${h}h ${m}m left`;
      }
      cards.push({ icon: charging ? ic.batteryCharging : ic.battery, name: 'Battery', value: label, pct, color });
    }

    // Network
    const online = navigator.onLine;
    const conn   = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let netLabel = online ? 'Online' : 'Offline';
    if (online && conn) {
      if (conn.effectiveType) netLabel = conn.effectiveType.toUpperCase();
      if (conn.downlink)      netLabel += ` · ${conn.downlink} Mbps`;
    }
    cards.push({ icon: online ? ic.network : ic.networkOff, name: 'Network', value: netLabel, pct: online ? 100 : 0, color: online ? '#4ade80' : '#f87171' });

    // Screen
    cards.push({ icon: ic.screen, name: 'Screen', value: `${screen.width} × ${screen.height}`, pct: null, color: '#a78bfa' });

    el.innerHTML = cards.map(c => this._card(c)).join('');
  }

  _card({ icon, name, value, pct, color }) {
    const bar = pct !== null
      ? `<div class="status-bar-wrap">
           <div class="status-bar-fill" style="width:${pct}%;background:${color}"></div>
         </div>`
      : '';
    return `
      <div class="status-card">
        <div class="status-icon-wrap">${icon}</div>
        <div class="status-info">
          <div class="status-name">${name}</div>
          ${bar}
          <div class="status-value">${value}</div>
        </div>
      </div>`;
  }
}

// ============================================================
// Bootstrap
// ============================================================

const app = new DeskPageApp();
app.init().catch(console.error);

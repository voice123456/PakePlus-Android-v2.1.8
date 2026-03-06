window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function () {
  var MENU_ITEMS = [
    { text: '比赛', targetId: 'matches' },
    { text: '新闻', targetId: 'news' },
    { text: '导航', targetId: 'navs' }
  ];

  function createMenu() {
    if (document.getElementById('pp-top-menu')) return;

    var nav = document.createElement('nav');
    nav.id = 'pp-top-menu';

    nav.style.position = 'fixed';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.zIndex = '9999';
    nav.style.display = 'flex';
    nav.style.alignItems = 'center';
    nav.style.justifyContent = 'center';
    nav.style.gap = '14px';
    nav.style.padding = '8px 16px';
    nav.style.background = '#222';
    nav.style.color = '#fff';
    nav.style.fontSize = '16px';
    nav.style.boxShadow = '0 -2px 8px rgba(0,0,0,.2)';

    MENU_ITEMS.forEach(function (item) {
      var btn = document.createElement('button');
      btn.textContent = item.text;
      btn.dataset.targetId = item.targetId;

      btn.style.border = 'none';
      btn.style.outline = 'none';
      btn.style.background = 'transparent';
      btn.style.color = '#fff';
      btn.style.cursor = 'pointer';
      btn.style.padding = '6px 10px';
      btn.style.borderRadius = '4px';
      btn.style.textAlign = 'center';

      btn.addEventListener('mouseenter', function () {
        btn.style.background = 'rgba(255,255,255,.15)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.background = 'transparent';
      });

      btn.addEventListener('click', function () {
        var id = btn.dataset.targetId;
        var target = document.getElementById(id);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      nav.appendChild(btn);
    });

    document.body.appendChild(nav);
  }

  function init() {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', createMenu);
    } else {
      createMenu();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
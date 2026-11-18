// Display options: text size and colour theme, remembered between visits.
(function () {
  var root = document.documentElement;
  var status = document.getElementById('status');
  var themeSel = document.getElementById('theme');
  var MIN = 100, MAX = 200, DEFAULT = 125; // font size as % of browser default

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function say(t) { status.textContent = t; }

  var size = parseInt(get('size'), 10) || DEFAULT;
  function applySize(announce) {
    root.style.fontSize = size + '%';
    set('size', size);
    if (announce) say('Text size ' + size + ' percent');
  }
  applySize(false);

  document.querySelectorAll('[data-size]').forEach(function (b) {
    b.addEventListener('click', function () {
      var a = b.getAttribute('data-size');
      if (a === 'up') size = Math.min(MAX, size + 15);
      if (a === 'down') size = Math.max(MIN, size - 15);
      if (a === 'reset') size = DEFAULT;
      applySize(true);
    });
  });

  var theme = get('theme');
  if (!theme) {
    theme = window.matchMedia && matchMedia('(prefers-contrast: more)').matches ? 'contrast' : 'dark';
  }
  root.setAttribute('data-theme', theme);
  themeSel.value = theme;
  themeSel.addEventListener('change', function () {
    root.setAttribute('data-theme', themeSel.value);
    set('theme', themeSel.value);
    say(themeSel.options[themeSel.selectedIndex].text + ' theme on');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();

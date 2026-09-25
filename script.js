(() => {
  'use strict';

  const ADMIN_PIN = '117067';
  const loginScreen = document.getElementById('loginScreen');
  const appShell = document.getElementById('appShell');
  const pinInput = document.getElementById('pinInput');
  const loginBtn = document.getElementById('loginBtn');
  const loginError = document.getElementById('loginError');
  const logoutBtn = document.getElementById('logoutBtn');

  function showLogin() {
    loginScreen.classList.remove('hidden');
    appShell.classList.add('hidden');
    pinInput.value = '';
    pinInput.focus();
  }

  function showApp() {
    loginScreen.classList.add('hidden');
    appShell.classList.remove('hidden');
  }

  function handleLogin() {
    if (pinInput.value.trim() === ADMIN_PIN) {
      loginError.textContent = '';
      showApp();
    } else {
      loginError.textContent = 'الرقم السري غير صحيح. الرجاء المحاولة مرة أخرى.';
      pinInput.select();
    }
  }

  loginBtn.addEventListener('click', handleLogin);
  pinInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') handleLogin();
  });
  logoutBtn.addEventListener('click', showLogin);
  showLogin();
})();

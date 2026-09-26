'use strict';

const ADMIN_PIN = '117067';
const STORAGE_KEY = 'master_crm_state_v1';
const LANG_KEY = 'master_crm_lang';

const translations = {
  ar: {
    loginTitle: 'بوابة الوصول الآمن',
    adminLabel: 'مدير النظام: Master Admin',
    pinLabel: 'أدخل الرقم السري',
    loginBtn: 'دخول النظام',
    supportText: 'نسخة تجريبية أولية - السوق المصري',
    crmSubtitle: 'CRM + Business Suite',
    navDashboard: 'لوحة التحكم',
    navCustomers: 'العملاء',
    navInvoices: 'الفواتير',
    navBranches: 'الفروع',
    navPermissions: 'الصلاحيات',
    navIntegrations: 'التكاملات',
    topTitle: 'نظرة عامة على الأداء',
    logoutBtn: 'تسجيل الخروج',
    statusInterested: 'مهتم',
    statusSold: 'تم البيع',
    statusFollowUp: 'متابعة',
  },
  en: {
    loginTitle: 'Secure Access Portal',
    adminLabel: 'System admin: Master Admin',
    pinLabel: 'Enter the security PIN',
    loginBtn: 'Access System',
    supportText: 'Initial prototype for the Egyptian market',
    crmSubtitle: 'CRM + Business Suite',
    navDashboard: 'Dashboard',
    navCustomers: 'Customers',
    navInvoices: 'Invoices',
    navBranches: 'Branches',
    navPermissions: 'Permissions',
    navIntegrations: 'Integrations',
    topTitle: 'Performance Overview',
    logoutBtn: 'Logout',
    statusInterested: 'Interested',
    statusSold: 'Sold',
    statusFollowUp: 'Follow-up',
  }
};

const defaultState = {
  language: 'ar',
  customers: [
    { id: 1, name: 'أحمد محمد', phone: '+20 100 123 4567', company: 'أويا للتقنية', status: 'interested' },
    { id: 2, name: 'سارة علي', phone: '+20 101 234 5678', company: 'مستقبل العقار', status: 'sold' },
    { id: 3, name: 'ناصر حسن', phone: '+20 102 345 6789', company: 'مذكرة البرمجة', status: 'follow_up' },
  ],
  invoices: [
    { id: 1, invoiceNumber: 'INV-2026-001', invoiceDate: '2026-09-01', taxDate: '2026-09-02', customerId: 1, total: 12500, paymentStatus: 'paid', etaBuyerName: 'أحمد محمد', etaTaxId: '123456789', waReady: 'true' },
    { id: 2, invoiceNumber: 'INV-2026-002', invoiceDate: '2026-09-12', taxDate: '2026-09-13', customerId: 2, total: 45300, paymentStatus: 'pending', etaBuyerName: 'سارة علي', etaTaxId: '987654321', waReady: 'false' }
  ],
  branches: [
    { id: 1, name: 'القاهرة - المركز', city: 'القاهرة' },
    { id: 2, name: 'الإسكندرية', city: 'الإسكندرية' },
    { id: 3, name: 'الجيزة', city: 'الجيزة' }
  ],
  employees: [
    { id: 1, name: 'Master Admin', role: 'مالك النظام', access: 'إدارة كاملة', branch: 'القاهرة - المركز' },
    { id: 2, name: 'سارة مريم', role: 'مدير مبيعات', access: 'إدارة العملاء', branch: 'القاهرة - المركز' },
    { id: 3, name: 'عبدالله أحمد', role: 'مستشار مالي', access: 'الفواتير والمالية', branch: 'الجيزة' }
  ]
};

let state = loadState();
const loginScreen = document.getElementById('loginScreen');
const appShell = document.getElementById('appShell');
const pinInput = document.getElementById('pinInput');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const langToggle = document.getElementById('langToggle');
const navButtons = [...document.querySelectorAll('.nav-item')];
const sections = [...document.querySelectorAll('.content-section')];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ...defaultState, language: localStorage.getItem(LANG_KEY) || 'ar' };
  try { return JSON.parse(saved); }
  catch (e) { return { ...defaultState, language: localStorage.getItem(LANG_KEY) || 'ar' }; }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(LANG_KEY, state.language);
}

function setLanguage(lang) {
  state.language = lang;
  saveState();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  applyTranslations();
  renderAll();
}

function applyTranslations() {
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[state.language] && translations[state.language][key]) {
      node.textContent = translations[state.language][key];
    }
  });
}

function showLogin() {
  loginScreen.classList.remove('hidden');
  appShell.classList.add('hidden');
  pinInput.value = '';
  pinInput.focus();
  loginError.textContent = '';
}

function showApp() {
  loginScreen.classList.add('hidden');
  appShell.classList.remove('hidden');
}

function handleLogin() {
  const entered = pinInput.value.trim();
  if (entered === ADMIN_PIN) {
    loginError.textContent = '';
    showApp();
    renderAll();
  } else {
    loginError.textContent = state.language === 'ar' 
      ? 'الرقم السري غير صحيح. الرجاء المحاولة مرة أخرى.'
      : 'Invalid PIN. Please try again.';
    pinInput.select();
  }
}

function logout() { showLogin(); }

function formatCurrency(value) {
  return new Intl.NumberFormat(state.language === 'ar' ? 'ar-EG' : 'en-US', {
    style: 'currency', currency: 'EGP', maximumFractionDigits: 0
  }).format(value);
}

function getCustomerById(id) {
  return state.customers.find((c) => c.id === Number(id));
}

function renderDashboard() {
  const totalSales = state.invoices.reduce((sum, inv) => sum + Number(inv.total || 0), 0);
  const customersCount = state.customers.length;
  const paidInvoices = state.invoices.filter((inv) => inv.paymentStatus === 'paid').length;
  const followUps = state.customers.filter((c) => c.status === 'follow_up').length;

  const els = { totalSalesValue: 0, newCustomersValue: 1, paidInvoicesValue: 2, followUpsValue: 3 };
  const values = [formatCurrency(totalSales), customersCount, paidInvoices, followUps];
  
  Object.keys(els).forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) el.textContent = values[idx];
  });

  const salesChart = document.getElementById('salesChart');
  if (salesChart) {
    const vals = [9, 12, 11, 15, 20, 17, 22];
    const months = state.language === 'ar' 
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
    salesChart.innerHTML = vals.map((v, i) => `
      <div class="bar-col"><div class="bar" style="height:${v*8}px"></div><span class="bar-label">${months[i]}</span></div>
    `).join('');
  }

  const legend = document.getElementById('customerLegend');
  if (legend) {
    const counts = {
      interested: state.customers.filter((c) => c.status === 'interested').length,
      sold: state.customers.filter((c) => c.status === 'sold').length,
      follow_up: state.customers.filter((c) => c.status === 'follow_up').length
    };
    legend.innerHTML = [
      { label: translations[state.language].statusInterested, value: counts.interested, color: '#2563eb' },
      { label: translations[state.language].statusSold, value: counts.sold, color: '#1d9b69' },
      { label: translations[state.language].statusFollowUp, value: counts.follow_up, color: '#f59e0b' }
    ].map((e) => `<li><span class="swatch" style="background:${e.color}"></span>${e.label}: <strong>${e.value}</strong></li>`).join('');
  }

  const csEl = document.getElementById('customerStatusTotal');
  if (csEl) csEl.textContent = customersCount;
}

function renderCustomers() {
  const tbody = document.getElementById('customersTable')?.querySelector('tbody');
  if (!tbody) return;

  tbody.innerHTML = state.customers.map((c) => `
    <tr>
      <td>${c.name}</td>
      <td>${c.phone}</td>
      <td>${c.company || '-'}</td>
      <td><span class="status-chip status-${c.status}">${translations[state.language][`status${c.status === 'follow_up' ? 'FollowUp' : c.status === 'interested' ? 'Interested' : 'Sold'}`]}</span></td>
      <td><button class="action-btn delete delete-customer" data-id="${c.id}">🗑️</button></td>
    </tr>
  `).join('');

  const cs = document.getElementById('customerSelect');
  if (cs) cs.innerHTML = state.customers.map((c) => `<option value="${c.id}">${c.name}</option>`).join('');
}

function renderInvoices() {
  const tbody = document.getElementById('invoicesTable')?.querySelector('tbody');
  if (!tbody) return;

  tbody.innerHTML = state.invoices.map((inv) => {
    const c = getCustomerById(inv.customerId);
    return `
      <tr>
        <td>${inv.invoiceNumber}</td>
        <td>${c ? c.name : '-'}</td>
        <td>${formatCurrency(inv.total)}</td>
        <td>${inv.taxDate}</td>
        <td><span class="status-chip status-${inv.paymentStatus === 'paid' ? 'sold' : 'follow_up'}">${inv.paymentStatus}</span></td>
        <td><button class="action-btn delete delete-invoice" data-id="${inv.id}">🗑️</button></td>
      </tr>
    `;
  }).join('');
}

function renderBranches() {
  const bl = document.getElementById('branchesList');
  if (bl) bl.innerHTML = state.branches.map((b) => `<li style="padding:8px 0;border-bottom:1px solid var(--line);"><strong>${b.name}</strong><br/><small style="color:var(--muted);">${b.city}</small></li>`).join('');

  const el = document.getElementById('employeesList');
  if (el) el.innerHTML = state.employees.map((e) => `<li style="padding:12px 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;"><div><strong>${e.name}</strong><br/><small style="color:var(--muted);">${e.role}</small></div><span style="font-size:0.85rem;">${e.access}</span></li>`).join('');
}

function renderRoles() {
  const rt = document.getElementById('rolesTable')?.querySelector('tbody');
  if (!rt) return;
  rt.innerHTML = state.employees.map((e) => `<tr><td>${e.name}</td><td>${e.role}</td><td>${e.access}</td><td>${e.branch}</td></tr>`).join('');
}

function renderAll() {
  renderDashboard();
  renderCustomers();
  renderInvoices();
  renderBranches();
  renderRoles();
}

function exportCSV() {
  const rows = [
    ['Invoice', 'Customer', 'Total', 'Date', 'Status'],
    ...state.invoices.map((i) => [i.invoiceNumber, getCustomerById(i.customerId)?.name || '', i.total, i.taxDate, i.paymentStatus])
  ];
  const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `invoices_${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function setupNavigation() {
  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const sid = btn.dataset.section;
      navButtons.forEach((b) => b.classList.toggle('active', b === btn));
      sections.forEach((s) => s.classList.toggle('active', s.id === sid));
    });
  });
}

loginBtn?.addEventListener('click', handleLogin);
pinInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleLogin(); });
logoutBtn?.addEventListener('click', logout);
langToggle?.addEventListener('click', () => setLanguage(state.language === 'ar' ? 'en' : 'ar'));

document.getElementById('customersTable')?.addEventListener('click', (e) => {
  const db = e.target.closest('.delete-customer');
  if (db && confirm('Sure?')) {
    state.customers = state.customers.filter((c) => c.id !== Number(db.dataset.id));
    saveState(); renderAll();
  }
});

document.getElementById('invoicesTable')?.addEventListener('click', (e) => {
  const db = e.target.closest('.delete-invoice');
  if (db && confirm('Sure?')) {
    state.invoices = state.invoices.filter((i) => i.id !== Number(db.dataset.id));
    saveState(); renderAll();
  }
});

document.getElementById('exportInvoicesBtn')?.addEventListener('click', exportCSV);

setupNavigation();
setLanguage(state.language);
applyTranslations();
showLogin();
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
    totalSales: 'إجمالي المبيعات',
    monthlyGrowth: '+18.4% مقارنة بالشهر الماضي',
    newCustomers: 'عدد العملاء الجدد',
    activeThisMonth: 'نشط هذا الشهر',
    paidInvoices: 'الفواتير المدفوعة',
    collectionRate: 'معدل التحصيل 78%',
    followUps: 'المتابعات',
    needAttention: 'تحتاج متابعة',
    salesTrend: 'اتجاه المبيعات',
    egpOnly: 'EGP فقط',
    statusBreakdown: 'توزيع الحالات',
    customers: 'عملاء',
    customersTitle: 'إدارة العملاء',
    addCustomer: 'إضافة عميل',
    customerFormTitle: 'بيانات العميل',
    customerName: 'الاسم',
    customerPhone: 'رقم الهاتف',
    customerCompany: 'الشركة',
    customerStatus: 'الحالة',
    statusInterested: 'مهتم',
    statusSold: 'تم البيع',
    statusFollowUp: 'متابعة',
    saveCustomer: 'حفظ العميل',
    cancelBtn: 'إلغاء',
    tableCustomerName: 'الاسم',
    tablePhone: 'الهاتف',
    tableCompany: 'الشركة',
    tableStatus: 'الحالة',
    tableActions: 'الإجراءات',
    invoicesTitle: 'الفواتير',
    exportBtn: 'تصدير CSV',
    invoiceFormTitle: 'بيانات الفاتورة',
    invoiceNumber: 'رقم الفاتورة',
    invoiceDate: 'تاريخ الإصدار',
    taxDate: 'تاريخ الضريبة',
    customerSelect: 'العميل',
    invoiceTotal: 'إجمالي الفاتورة (EGP)',
    paymentStatus: 'حالة الدفع',
    paymentPaid: 'مدفوع',
    paymentPending: 'قيد الدفع',
    paymentPartial: 'مدفوع جزئيًا',
    etaBuyerName: 'اسم المشتري',
    etaTaxId: 'الرقم الضريبي',
    waReady: 'جاهزية WhatsApp API',
    readyYes: 'نعم',
    readyNo: 'لا',
    saveInvoice: 'حفظ الفاتورة',
    invoiceNo: 'رقم الفاتورة',
    invoiceCustomer: 'العميل',
    invoiceTotalHeader: 'الإجمالي',
    invoiceTaxDate: 'تاريخ الضريبة',
    invoicePaymentStatus: 'حالة الدفع',
    branchesTitle: 'الفروع والموظفين',
    branchListTitle: 'قائمة الفروع',
    employeeListTitle: 'الموظفون والصلاحيات',
    permissionsTitle: 'إدارة الصلاحيات',
    rolePerson: 'الموظف',
    roleName: 'الدور',
    roleAccess: 'الصلاحيات',
    roleBranch: 'الفرع',
    integrationsTitle: 'التكاملات المستقبلية',
    etaCompliance: 'مواصفة ETA',
    etaText: 'مهيأة لتضمين بيانات الفاتورة، الرقم الضريبي، وتاريخ الضريبة وفق متطلبات الفاتورة الإلكترونية المصرية.',
    whatsappApi: 'WhatsApp API',
    waText: 'تم تجهيز حقول الإشعارات، قوالب الرسائل، ومؤشرات الالتزام لدمجها لاحقاً عبر Webhook / API.',
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
    totalSales: 'Total Sales',
    monthlyGrowth: '+18.4% vs. last month',
    newCustomers: 'New Customers',
    activeThisMonth: 'Active this month',
    paidInvoices: 'Paid Invoices',
    collectionRate: 'Collection rate 78%',
    followUps: 'Follow-ups',
    needAttention: 'Need attention',
    salesTrend: 'Sales Trend',
    egpOnly: 'EGP only',
    statusBreakdown: 'Status Breakdown',
    customers: 'Customers',
    customersTitle: 'Customer Management',
    addCustomer: 'Add Customer',
    customerFormTitle: 'Customer Details',
    customerName: 'Name',
    customerPhone: 'Phone',
    customerCompany: 'Company',
    customerStatus: 'Status',
    statusInterested: 'Interested',
    statusSold: 'Sold',
    statusFollowUp: 'Follow-up',
    saveCustomer: 'Save Customer',
    cancelBtn: 'Cancel',
    tableCustomerName: 'Name',
    tablePhone: 'Phone',
    tableCompany: 'Company',
    tableStatus: 'Status',
    tableActions: 'Actions',
    invoicesTitle: 'Invoices',
    exportBtn: 'Export CSV',
    invoiceFormTitle: 'Invoice Details',
    invoiceNumber: 'Invoice Number',
    invoiceDate: 'Issue Date',
    taxDate: 'Tax Date',
    customerSelect: 'Customer',
    invoiceTotal: 'Invoice Total (EGP)',
    paymentStatus: 'Payment Status',
    paymentPaid: 'Paid',
    paymentPending: 'Pending',
    paymentPartial: 'Partially Paid',
    etaBuyerName: 'Buyer Name',
    etaTaxId: 'Tax ID',
    waReady: 'WhatsApp API Ready',
    readyYes: 'Yes',
    readyNo: 'No',
    saveInvoice: 'Save Invoice',
    invoiceNo: 'Invoice Number',
    invoiceCustomer: 'Customer',
    invoiceTotalHeader: 'Total',
    invoiceTaxDate: 'Tax Date',
    invoicePaymentStatus: 'Payment Status',
    branchesTitle: 'Branches and Employees',
    branchListTitle: 'Branch List',
    employeeListTitle: 'Employees and Permissions',
    permissionsTitle: 'Permission Management',
    rolePerson: 'Employee',
    roleName: 'Role',
    roleAccess: 'Permissions',
    roleBranch: 'Branch',
    integrationsTitle: 'Future Integrations',
    etaCompliance: 'ETA Standard',
    etaText: 'Ready to include invoice data, tax ID, and tax date according to Egyptian e-invoice requirements.',
    whatsappApi: 'WhatsApp API',
    waText: 'Notification fields, message templates, and compliance indicators have been prepared for later integration via Webhook/API.',
  }
};

const defaultState = {
  language: 'ar',
  customers: [
    { id: 1, name: 'أحمد محمد', phone: '+966512345678', company: 'أويا للتقنية', status: 'interested' },
    { id: 2, name: 'سارة علي', phone: '+966555123456', company: 'مستقبل العقار', status: 'sold' },
    { id: 3, name: 'ناصر حسن', phone: '+966500998877', company: 'مذكرة البرمجة', status: 'follow_up' },
  ],
  invoices: [
    {
      id: 1,
      invoiceNumber: 'INV-1001',
      invoiceDate: '2026-09-01',
      taxDate: '2026-09-02',
      customerId: 1,
      total: 12500,
      paymentStatus: 'paid',
      etaBuyerName: 'أحمد محمد',
      etaTaxId: '123456789',
      waReady: 'true'
    },
    {
      id: 2,
      invoiceNumber: 'INV-1002',
      invoiceDate: '2026-09-12',
      taxDate: '2026-09-13',
      customerId: 2,
      total: 45300,
      paymentStatus: 'pending',
      etaBuyerName: 'سارة علي',
      etaTaxId: '987654321',
      waReady: 'false'
    }
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
  if (!saved) {
    return { ...defaultState, language: localStorage.getItem(LANG_KEY) || 'ar' };
  }

  try {
    return JSON.parse(saved);
  } catch {
    return { ...defaultState, language: localStorage.getItem(LANG_KEY) || 'ar' };
  }
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
    if (translations[state.language][key]) {
      node.textContent = translations[state.language][key];
    }
  });
}

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
  const entered = pinInput.value.trim();
  if (entered === ADMIN_PIN) {
    loginError.textContent = '';
    showApp();
    return;
  }

  loginError.textContent = 'الرقم السري غير صحيح. الرجاء المحاولة مرة أخرى.';
  pinInput.value = '';
}

function logout() {
  showLogin();
  loginError.textContent = '';
}

function formatCurrency(value) {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 0
  }).format(value);
}

function getCustomerById(id) {
  return state.customers.find((customer) => customer.id === Number(id));
}

function renderDashboard() {
  const totalSales = state.invoices.reduce((sum, invoice) => sum + Number(invoice.total || 0), 0);
  const customersCount = state.customers.length;
  const paidInvoices = state.invoices.filter((invoice) => invoice.paymentStatus === 'paid').length;
  const followUps = state.customers.filter((customer) => customer.status === 'follow_up').length;

  document.getElementById('totalSalesValue').textContent = formatCurrency(totalSales);
  document.getElementById('newCustomersValue').textContent = String(customersCount);
  document.getElementById('paidInvoicesValue').textContent = String(paidInvoices);
  document.getElementById('followUpsValue').textContent = String(followUps);

  const salesChart = document.getElementById('salesChart');
  const salesValues = [9, 12, 11, 15, 20, 17, 22];
  salesChart.innerHTML = salesValues.map((value, idx) => `
    <div class="bar-col">
      <div class="bar" style="height:${value * 8}px"></div>
      <span class="bar-label">${['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو'][idx]}</span>
    </div>
  `).join('');

  const statusCounts = {
    interested: state.customers.filter((c) => c.status === 'interested').length,
    sold: state.customers.filter((c) => c.status === 'sold').length,
    follow_up: state.customers.filter((c) => c.status === 'follow_up').length
  };

  document.getElementById('customerStatusTotal').textContent = String(customersCount);
  const legend = document.getElementById('customerLegend');
  legend.innerHTML = [
    { label: translations[state.language].statusInterested, value: statusCounts.interested, color: '#2563eb' },
    { label: translations[state.language].statusSold, value: statusCounts.sold, color: '#1d9b69' },
    { label: translations[state.language].statusFollowUp, value: statusCounts.follow_up, color: '#f59e0b' }
  ].map((entry) => `
    <li>
      <span class="swatch" style="background:${entry.color}"></span>
      ${entry.label}: ${entry.value}
    </li>
  `).join('');
}

function renderCustomers() {
  const tbody = document.getElementById('customersTable');
  tbody.innerHTML = state.customers.map((customer) => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.phone}</td>
      <td>${customer.company || '-'}</td>
      <td><span class="status-chip status-${customer.status}">${translations[state.language][`status${customer.status === 'follow_up' ? 'FollowUp' : customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}`] || customer.status}</span></td>
      <td>
        <button class="action-btn edit-customer" data-id="${customer.id}">تعديل</button>
        <button class="action-btn delete delete-customer" data-id="${customer.id}">حذف</button>
      </td>
    </tr>
  `).join('');

  const customerSelect = document.getElementById('customerSelect');
  customerSelect.innerHTML = state.customers.map((customer) => `<option value="${customer.id}">${customer.name}</option>`).join('');
}

function renderInvoices() {
  const tbody = document.getElementById('invoicesTable');
  tbody.innerHTML = state.invoices.map((invoice) => {
    const customer = getCustomerById(invoice.customerId);
    return `
      <tr>
        <td>${invoice.invoiceNumber}</td>
        <td>${customer ? customer.name : '-'}</td>
        <td>${formatCurrency(invoice.total)}</td>
        <td>${invoice.taxDate}</td>
        <td><span class="status-chip ${invoice.paymentStatus === 'paid' ? 'status-sold' : invoice.paymentStatus === 'pending' ? 'status-follow_up' : 'status-interested'}">${translations[state.language][`payment${invoice.paymentStatus.charAt(0).toUpperCase() + invoice.paymentStatus.slice(1)}`] || invoice.paymentStatus}</span></td>
        <td>
          <button class="action-btn edit-invoice" data-id="${invoice.id}">تعديل</button>
          <button class="action-btn delete delete-invoice" data-id="${invoice.id}">حذف</button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderBranches() {
  const branchesList = document.getElementById('branchesList');
  branchesList.innerHTML = state.branches.map((branch) => `
    <li>
      <strong>${branch.name}</strong>
      <span>${branch.city}</span>
    </li>
  `).join('');

  const employeesList = document.getElementById('employeesList');
  employeesList.innerHTML = state.employees.map((employee) => `
    <li>
      <div>
        <strong>${employee.name}</strong><br>
        <small>${employee.role}</small>
      </div>
      <span>${employee.access}</span>
    </li>
  `).join('');
}

function renderRoles() {
  const rolesTable = document.getElementById('rolesTable');
  rolesTable.innerHTML = state.employees.map((employee) => `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.role}</td>
      <td>${employee.access}</td>
      <td>${employee.branch}</td>
    </tr>
  `).join('');
}

function renderAll() {
  renderDashboard();
  renderCustomers();
  renderInvoices();
  renderBranches();
  renderRoles();
}

function resetCustomerForm() {
  document.getElementById('customerForm').reset();
  document.getElementById('customerId').value = '';
}

function resetInvoiceForm() {
  document.getElementById('invoiceForm').reset();
  document.getElementById('invoiceId').value = '';
}

function openCustomerForm(customer = null) {
  const form = document.getElementById('customerForm');
  if (customer) {
    document.getElementById('customerId').value = String(customer.id);
    document.getElementById('customerName').value = customer.name;
    document.getElementById('customerPhone').value = customer.phone;
    document.getElementById('customerCompany').value = customer.company || '';
    document.getElementById('customerStatus').value = customer.status;
  } else {
    form.reset();
    document.getElementById('customerId').value = '';
  }
}

function openInvoiceForm(invoice = null) {
  if (invoice) {
    document.getElementById('invoiceId').value = String(invoice.id);
    document.getElementById('invoiceNumber').value = invoice.invoiceNumber;
    document.getElementById('invoiceDate').value = invoice.invoiceDate;
    document.getElementById('taxDate').value = invoice.taxDate;
    document.getElementById('customerSelect').value = String(invoice.customerId);
    document.getElementById('invoiceTotal').value = invoice.total;
    document.getElementById('paymentStatus').value = invoice.paymentStatus;
    document.getElementById('etaBuyerName').value = invoice.etaBuyerName || '';
    document.getElementById('etaTaxId').value = invoice.etaTaxId || '';
    document.getElementById('waReady').value = invoice.waReady || 'true';
  } else {
    document.getElementById('invoiceForm').reset();
    document.getElementById('invoiceId').value = '';
  }
}

function handleCustomerSubmit(event) {
  event.preventDefault();
  const id = document.getElementById('customerId').value;
  const data = {
    id: id ? Number(id) : Date.now(),
    name: document.getElementById('customerName').value.trim(),
    phone: document.getElementById('customerPhone').value.trim(),
    company: document.getElementById('customerCompany').value.trim(),
    status: document.getElementById('customerStatus').value
  };

  if (!data.name || !data.phone) return;

  if (id) {
    state.customers = state.customers.map((customer) => (customer.id === data.id ? data : customer));
  } else {
    state.customers.unshift(data);
  }

  saveState();
  renderAll();
  resetCustomerForm();
}

function handleInvoiceSubmit(event) {
  event.preventDefault();
  const id = document.getElementById('invoiceId').value;
  const data = {
    id: id ? Number(id) : Date.now(),
    invoiceNumber: document.getElementById('invoiceNumber').value.trim(),
    invoiceDate: document.getElementById('invoiceDate').value,
    taxDate: document.getElementById('taxDate').value,
    customerId: Number(document.getElementById('customerSelect').value),
    total: Number(document.getElementById('invoiceTotal').value || 0),
    paymentStatus: document.getElementById('paymentStatus').value,
    etaBuyerName: document.getElementById('etaBuyerName').value.trim(),
    etaTaxId: document.getElementById('etaTaxId').value.trim(),
    waReady: document.getElementById('waReady').value
  };

  if (!data.invoiceNumber || !data.invoiceDate || !data.taxDate || !data.customerId) return;

  if (id) {
    state.invoices = state.invoices.map((invoice) => (invoice.id === data.id ? data : invoice));
  } else {
    state.invoices.unshift(data);
  }

  saveState();
  renderAll();
  resetInvoiceForm();
}

function handleCustomerAction(event) {
  const btn = event.target.closest('.edit-customer');
  if (btn) {
    const customer = state.customers.find((entry) => entry.id === Number(btn.dataset.id));
    openCustomerForm(customer);
    return;
  }

  const del = event.target.closest('.delete-customer');
  if (del) {
    const id = Number(del.dataset.id);
    state.customers = state.customers.filter((customer) => customer.id !== id);
    saveState();
    renderAll();
  }
}

function handleInvoiceAction(event) {
  const btn = event.target.closest('.edit-invoice');
  if (btn) {
    const invoice = state.invoices.find((entry) => entry.id === Number(btn.dataset.id));
    openInvoiceForm(invoice);
    return;
  }

  const del = event.target.closest('.delete-invoice');
  if (del) {
    const id = Number(del.dataset.id);
    state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    saveState();
    renderAll();
  }
}

function exportInvoicesCSV() {
  const rows = [
    ['Invoice Number', 'Customer', 'Total', 'Tax Date', 'Payment Status'],
    ...state.invoices.map((invoice) => {
      const customer = getCustomerById(invoice.customerId);
      return [invoice.invoiceNumber, customer ? customer.name : '', invoice.total, invoice.taxDate, invoice.paymentStatus];
    })
  ];

  const csv = rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'master_crm_invoices.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function setupNavigation() {
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      navButtons.forEach((item) => item.classList.toggle('active', item === button));
      sections.forEach((section) => section.classList.toggle('active', section.id === button.dataset.section));
    });
  });
}

loginBtn.addEventListener('click', handleLogin);
pinInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleLogin();
});
logoutBtn.addEventListener('click', logout);
langToggle.addEventListener('click', () => {
  setLanguage(state.language === 'ar' ? 'en' : 'ar');
});

document.getElementById('customerForm').addEventListener('submit', handleCustomerSubmit);
document.getElementById('invoiceForm').addEventListener('submit', handleInvoiceSubmit);
document.getElementById('addCustomerBtn').addEventListener('click', () => openCustomerForm());
document.getElementById('cancelCustomer').addEventListener('click', resetCustomerForm);
document.getElementById('cancelInvoice').addEventListener('click', resetInvoiceForm);
document.getElementById('exportInvoicesBtn').addEventListener('click', exportInvoicesCSV);
document.getElementById('customersTable').addEventListener('click', handleCustomerAction);
document.getElementById('invoicesTable').addEventListener('click', handleInvoiceAction);

setupNavigation();
setLanguage(state.language);
renderAll();
showLogin();
""
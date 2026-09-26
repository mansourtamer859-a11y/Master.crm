// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('✅ Service Worker registered successfully:', registration);
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              console.log('🔄 New Service Worker activated - app updated');
              // Optionally show update notification to user
              if (confirm('تحديث جديد متاح! هل تريد إعادة تحميل التطبيق؟')) {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}

// ===== PWA INSTALL PROMPT =====
let deferredPrompt;
const installButton = document.getElementById('installPWA');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  console.log('📱 Install prompt available');
  
  // Show install button if it exists
  if (installButton) {
    installButton.style.display = 'block';
    installButton.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('✅ User accepted app installation');
          } else {
            console.log('❌ User dismissed app installation');
          }
          deferredPrompt = null;
        });
      }
    });
  }
});

// Hide install button when app is installed
window.addEventListener('appinstalled', () => {
  console.log('🎉 App successfully installed');
  if (installButton) {
    installButton.style.display = 'none';
  }
  deferredPrompt = null;
});

// ===== OFFLINE DETECTION =====
const updateOnlineStatus = () => {
  const isOnline = navigator.onLine;
  const statusIndicator = document.getElementById('onlineStatus');
  
  if (statusIndicator) {
    if (isOnline) {
      statusIndicator.textContent = '🟢 متصل';
      statusIndicator.className = 'online';
      console.log('✅ Connected to network');
    } else {
      statusIndicator.textContent = '🔴 بدون اتصال';
      statusIndicator.className = 'offline';
      console.log('⚠️ Offline mode - using cached data');
    }
  }
};

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Check initial status
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateOnlineStatus);
} else {
  updateOnlineStatus();
}

// ===== APP SHORTCUTS =====
if ('launchQueue' in window && 'LaunchParams' in window) {
  window.launchQueue.setConsumer((launchParams) => {
    console.log('🚀 App launched with:', launchParams);
    // Handle launch params (share target, shortcuts, etc.)
    if (launchParams.files && launchParams.files.length > 0) {
      console.log('📄 Files shared:', launchParams.files);
    }
  });
}

// ===== PERIODIC BACKGROUND SYNC =====
if ('periodicSync' in ServiceWorkerRegistration.prototype) {
  navigator.serviceWorker.ready.then(async (registration) => {
    try {
      await registration.periodicSync.register('sync-data', {
        minInterval: 24 * 60 * 60 * 1000 // 24 hours
      });
      console.log('📅 Periodic sync registered');
    } catch (error) {
      console.error('❌ Periodic sync registration failed:', error);
    }
  });
}

// ===== WEB SHARE API =====
if (navigator.share) {
  const shareButton = document.getElementById('shareApp');
  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: 'Master.crm',
          text: 'نظام إدارة علاقات العملاء المتقدم - Master.crm',
          url: window.location.href
        });
        console.log('📤 App shared successfully');
      } catch (error) {
        console.error('❌ Share failed:', error);
      }
    });
  }
}

// ===== STORAGE QUOTA =====
const checkStorageQuota = async () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const estimate = await navigator.storage.estimate();
    const percentUsed = (estimate.usage / estimate.quota) * 100;
    console.log(`💾 Storage: ${percentUsed.toFixed(2)}% used (${Math.round(estimate.usage / 1024 / 1024)}MB / ${Math.round(estimate.quota / 1024 / 1024)}MB)`);
    return {
      usage: estimate.usage,
      quota: estimate.quota,
      percentUsed
    };
  }
};

// ===== REQUEST PERSISTENT STORAGE =====
const requestPersistentStorage = async () => {
  if ('storage' in navigator && 'persist' in navigator.storage) {
    try {
      const isPersistent = await navigator.storage.persist();
      if (isPersistent) {
        console.log('✅ Persistent storage granted');
      } else {
        console.log('⚠️ Persistent storage not granted');
      }
      return isPersistent;
    } catch (error) {
      console.error('❌ Persistent storage request failed:', error);
      return false;
    }
  }
};

// Request persistent storage on app load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    checkStorageQuota();
    requestPersistentStorage();
  });
} else {
  checkStorageQuota();
  requestPersistentStorage();
}

// ===== NOTIFICATION PERMISSION =====
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('✅ Notification permission granted');
    } else {
      console.log('❌ Notification permission denied');
    }
  });
}

console.log('✅ PWA features initialized');

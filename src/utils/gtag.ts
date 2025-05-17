declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const initializeGoogleConsent = () => {
  // Set Google consent mode defaults
  window.gtag = window.gtag || function() {
    (window.dataLayer = window.dataLayer || []).push(arguments);
  };

  window.dataLayer = window.dataLayer || [];

  // Default consent settings
  window.gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted'
  });
};

export const updateGoogleConsent = (cookie: { categories: string[] }) => {
  const consentModeStates = {
    'analytics_storage': cookie.categories.includes('analytics') ? 'granted' : 'denied',
    'ad_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
    'functionality_storage': cookie.categories.includes('necessary') ? 'granted' : 'denied',
    'personalization_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
    'security_storage': 'granted'
  };
  
  window.gtag('consent', 'update', consentModeStates);
};

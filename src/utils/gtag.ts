type GtagConsentArg = 
  | ['consent', 'default', Record<string, 'granted' | 'denied'>]
  | ['consent', 'update', Record<string, 'granted' | 'denied'>];

declare global {
  interface Window {
    dataLayer: any[];
    gtag: {
      (...args: GtagConsentArg): void;
      (...args: any[]): void;
    };
  }
}

export const initializeGoogleConsent = () => {
  if (typeof window !== 'undefined') {
    // Set Google consent mode defaults
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };

    // Default consent settings
    window.gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied',
      'security_storage': 'granted'
    });
  }
};

export const updateGoogleConsent = (cookie: { categories: string[] }) => {
  if (typeof window !== 'undefined') {
    const consentModeStates = {
      'analytics_storage': cookie.categories.includes('analytics') ? 'granted' : 'denied',
      'ad_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
      'functionality_storage': cookie.categories.includes('necessary') ? 'granted' : 'denied',
      'personalization_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
      'security_storage': 'granted'
    } as const;
    
    window.gtag('consent', 'update', consentModeStates);
  }
};

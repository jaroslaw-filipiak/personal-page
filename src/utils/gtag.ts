type GtagConsentArg = 
  | ['consent', 'default', Record<string, 'granted' | 'denied'>]
  | ['consent', 'update', Record<string, 'granted' | 'denied'>];

// Augment the existing Window interface
interface Window {
  gtag: {
    (...args: GtagConsentArg): void;
    (...args: any[]): void;
  };
}

export const initializeGoogleConsent = () => {
  if (typeof window !== 'undefined') {
    // Set Google consent mode defaults
    // @ts-ignore - dataLayer is added by Google Tag Manager script
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      // @ts-ignore - dataLayer is added by Google Tag Manager script
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };

    // Default consent settings
    window.gtag('consent', 'default', {
      'analytics_storage': 'denied',  // Analytics
      'ad_storage': 'denied',  // Cookies reklamowe
      'ad_user_data': 'denied',     // Pomiar skuteczności  
      'ad_personalization': 'denied',   // Personalizacja
      'functionality_storage': 'denied',  // Funkcjonalność
      'personalization_storage': 'denied',  // Personalizacja
      'security_storage': 'granted'
    });
  }
};

export const updateGoogleConsent = (cookie: { categories: string[] }) => {
  if (typeof window !== 'undefined') {
    const consentModeStates = {
      'analytics_storage': cookie.categories.includes('analytics') ? 'granted' : 'denied',
      'ad_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
      'ad_user_data': cookie.categories.includes('marketing') ? 'granted' : 'denied',
      'ad_personalization': cookie.categories.includes('marketing') ? 'granted' : 'denied',
      'functionality_storage': cookie.categories.includes('necessary') ? 'granted' : 'denied',
      'personalization_storage': cookie.categories.includes('marketing') ? 'granted' : 'denied',
      'security_storage': 'granted'
    } as const;
    
    window.gtag('consent', 'update', consentModeStates);
  }
};

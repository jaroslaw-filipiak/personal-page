export const trackFBEvent = (eventName: string, params = {}) => {
  // Sprawdzamy czy fbq istnieje
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

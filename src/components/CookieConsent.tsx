'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import pluginConfig from './CookieConsentConfig';
import { initializeGoogleConsent } from '@/utils/gtag';

const CookieConsentComponent = () => {
  useEffect(() => {
    initializeGoogleConsent();
    CookieConsent.run(pluginConfig);
  }, []);

  return (
    <a href='#' onClick={CookieConsent.showPreferences}>
      Preferencje cookies
    </a>
  );
};

export default CookieConsentComponent;

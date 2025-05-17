import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  onFirstConsent: function ({ cookie }) {
   
  },

  onConsent: function ({ cookie }) {
   
  },

  onChange: function ({ changedCategories, cookie }) {
   
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },

          {
            name: /^CLID/,
          },
          {
            name: /^MUID/,
          },
        ],
      },
    },
    marketing: {
      readOnly: false,
      enabled: false,
    },
  },

  language: {
    default: 'pl',

    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            'Our website uses tracking cookies to understand how you interact with it. The tracking will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          //closeIconLabel: 'Close',
          footer: `
            <a href="#link">Privacy Policy</a>
            <a href="#link">Impressum</a>
          `,
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc__link">privacy policy</a>.',
            },
            {
              title: 'Strictly necessary cookies',
              description: 'Description',
              linkedCategory: 'necessary',
            },
            {
              title: 'Performance and Analytics cookies',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description:
                      'Cookie set by <a href="#das">Google Analytics</a>.',
                    expiration: 'Expires after 12 days',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description:
                      'Cookie set by <a href="#das">Google Analytics</a>',
                    expiration: 'Session',
                  },
                ],
              },
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
            },
          ],
        },
      },
      pl: {
        consentModal: {
          title: 'Czas na ciasteczka',
          description:
            'Ta strona korzysta z plików cookies aby zrozumieć jak użytkownicy poruszają się po serwisie.',
          acceptAllBtn: 'Akceptuje wszystkie',
          acceptNecessaryBtn: 'Odmawiam',
          showPreferencesBtn: 'Preferencje',
          //closeIconLabel: 'Close',
          footer: `
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          `,
        },
        preferencesModal: {
          title: 'Preferencje',
          acceptAllBtn: 'Akceptuje wszystkie',
          acceptNecessaryBtn: 'Odmawiam',
          savePreferencesBtn: 'Zapisz preferencje',
          closeIconLabel: 'Zamknij',
          sections: [
            {
              title: 'Użycie Cookies',
              description:
                'Używam plików cookie, aby zapewnić podstawowe funkcjonalności witryny i usprawnić korzystanie z Internetu. Dla każdej kategorii możesz zdecydować się na włączenie/wyłączenie, kiedy tylko chcesz. Aby uzyskać więcej informacji na temat plików cookie i innych wrażliwych danych, zapoznaj się z pełną  <a href="/polityka-prywatnosci" class="cc__link">polityką prywatności</a>.',
            },
            {
              title: 'Niezbędne pliki',
              description:
                'Niezbędne pliki umożliwiające wczytanie tej strony. Generowane przez serwer. Nie zbierają żadnych informacji o uzytkowniku',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analityczne',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Nazwa',
                  domain: 'Usługa',
                  description: 'Opis',
                  expiration: 'Wygaśnięcie',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description: 'Cookie Google Analytics.',
                    expiration: '2 lata',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description: 'Cookie Google Analytics',
                    expiration: 'Sesja usera',
                  },
                  {
                    name: 'CLID, MUID',
                    domain: 'www.clarity.ms',
                    description: 'Microsoft Clarity',
                    expiration: '1 rok',
                  },
                ],
              },
            },
            {
              title: 'Marketingowe',
              linkedCategory: 'marketing',
              cookieTable: {
                headers: {
                  name: 'Nazwa',
                  domain: 'Usługa',
                  description: 'Opis',
                  expiration: 'Wygaśnięcie',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description: 'Cookie Google Analytics.',
                    expiration: '2 lata',
                  },
                ],
              },
            },

            {
              title: 'Więcej informacji',
              description:
                'Jeżeli masz jakieś pytania <a class="cc__link" href="mailto:info@j-filipiak.pl">skontaktuj się ze mną</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;

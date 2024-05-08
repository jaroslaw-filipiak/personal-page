import {
  run,
  reset,
  hide,
  acceptCategory,
  showPreferences,
} from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';

const acceptAndHide = (acceptType: string | string[]) => {
  acceptCategory(acceptType);
  hide();
};

const resetPlugin = () => {
  reset(true);
  run(pluginConfig);
};

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('cc--darkmode');
};

const CookieConsentApiBtns = () => {
  return (
    <>
      {/* <p>Api calls:</p> */}
      <div className='cc-btns'>
        <button type='button' onClick={showPreferences}>
          Pokaż preferencje
        </button>
        <button type='button' onClick={() => acceptAndHide('all')}>
          Akceptuje wszystko
        </button>
        <button type='button' onClick={() => acceptAndHide([])}>
          Tylko niezbędne
        </button>
        {/* <button type='button' onClick={resetPlugin}>
          Reset plugin
        </button>
        <button type='button' onClick={toggleDarkMode}>
          Toggle DarkMode
        </button> */}
      </div>
    </>
  );
};

export default CookieConsentApiBtns;

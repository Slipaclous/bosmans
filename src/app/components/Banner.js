// components/Banner.js
import '../styles/banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Banner({ closeBanner, hide }) {
    const { t } = useTranslation();
    return (
      <div className={`banner ${hide ? 'hide' : ''}`}>
        <h3 class="banner-title"> {t('alert')} </h3>
        <p><FontAwesomeIcon icon={faTriangleExclamation} /> {t('banner')}</p>
        <button className='button-banner' onClick={closeBanner}>X</button>
      </div>
    );
}

export default Banner;

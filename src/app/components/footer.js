import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const openingHours = [
    { day: t("lundi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("mardi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("mercredi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("jeudi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("vendredi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("samedi"), hours: ["08:00-12:00"] },
    { day: t("dimanche"), hours: [] },
  ];

  const isOpen = true;

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__contact">
          <h3 class="footer-title">INFOS</h3>
          <div className="infos-cont">

          <p>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+32475234567"> +32 475 23 45 67</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Chaussée d'Enghien 67, 1540 Herne</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Anne.bosmans@outlook.com</span>
          </p>
          </div>
        </div>
        <div className="footer-content__links">
          <h3 class="footer-title">{t("liens")}</h3>
          <ul>
            

            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/services/pneus">{t("pneus")}</Link>
            </li>
            <li>
              <Link href="/services/jantes">{t("jantes")}</Link>
            </li>
            
            
            
            <li>
              <Link href="/entretiens/controle_technique">
                {t('controle technique')}
              </Link>
            </li>
            <li>
              <Link href="/entretiens/climatisation">
                {t('climatisation')}
              </Link>
            </li>
            <li>
          <Link href="/leasing">
            leasing
          </Link>
        </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
            
          </ul>
        </div>
       

        <div className="footer-content__hours">
          <h3 class="footer-title">{t("horaire")}</h3>
          <div className="schedule-list">
            {openingHours.map(({ day, hours }) => (
              <div key={day} className="horaires">
                <strong>{day}</strong>: {hours.join(" / ")}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-credits">
        <p>{t("credits")}</p>
      </div>
    </footer>
  );
};
export default Footer;

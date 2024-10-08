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
    { day: t("dimanche"), hours: [t("ferme")] },
  ];

  const isOpen = true;

  return (
    <footer>
      <div className="footer-contents">
        <div className="footer-images footer-content">
          <img className="logo-bosmans" src="/images/logo-bosmans.png" alt="" />
          <img className="text-bosmans" src="/images/text-bosmans.png" alt="" />
        </div>
        <div className="footer-infos footer-content">
            <h3 className="footer-title">Contact</h3>
          <div className="infos-contact">
            <a href="tel:+32475234567">02 396 11 84</a>
            <p className="">bosmans.anne@outlook.com</p>
          </div>
            <h3 className="footer-title adresse">{t("adresse")}</h3>
          <div className="infos-adress">
            <p>Edingsesteenweg 67 </p>
            <p>1540 Herne</p>
            <p>Belgique</p>
          </div>
        </div>
        <div className="footer-horaire footer-content">
          <h3 className="footer-title">{t("horaire")}</h3>
          <div className="schedule-liste">
            {openingHours.map(({ day, hours }) => (
              <div key={day} className="horaire">
                <strong>{day}</strong>: {hours.join(" | ")}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-links footer-content">
          <h3 className="footer-title title-links">{t("liens")}</h3>
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
              <Link href="/entretiens/controle_technique">{t('controle technique')}</Link>
            </li>
            <li>
              <Link href="/entretiens/climatisation">{t('climatisation')}</Link>
            </li>
            <li>
              <Link href="/leasing">Leasing</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-credits">
        <a href=""> Mentions légales</a>
        <p className="dots"> - </p>
        <p> Site réalisé par G-Minor </p>
        <p className="dots"> - </p>
        <p> Bosmans pneus  &copy; 2024 </p>
        </div>
    </footer>
  );
};
export default Footer;
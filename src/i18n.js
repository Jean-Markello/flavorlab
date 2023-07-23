import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const Languages = ["en", "fr"];

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "fr",
    debug: true,
    supportedLngs: ["en", "fr"],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: {
          home_title:
            "Unlock the Chef in You - Reserve Your Culinary Adventure Today!",
          home_sub_title:
            "Embark on an extraordinary culinary journey! Cook with pros or learn at home. Reserve now and savor the joy of creating mouthwatering dishes. Join us and let the sizzling symphony of flavors begin!",
          serv_title: "List of Services",
          serv_one: {
            title: "One Session",
            sub_title: "less popular",
            description:
              "Experience the joy of cooking with our 2-hour interactive sessions for just $50. Learn from expert chefs, unleash your culinary creativity, and master gourmet techniques in a personalized and affordable culinary education.",
            price: "$50 for 2h",
          },
          serv_two: {
            title: "In-Person Cooking",
            sub_title: "Popular choice",
            description:
              "Embark on a culinary adventure with our in-person cooking program. Over 5 months, master the art of cooking alongside experienced chefs, explore diverse cuisines, and elevate your skills for $400. Unleash your inner chef in a hands-on, immersive journey.",
            price: "$400 for 5 month",
          },
          serv_three: {
            title: "In-Person Cooking",
            sub_title: "Online Cooking",
            description:
              "Embark on a culinary adventure with our in-person cooking program. Over 5 months, master the art of cooking alongside experienced chefs, explore diverse cuisines, and elevate your skills for $400. Unleash your inner chef in a hands-on, immersive journey.",
            price: "$200 for 2 month",
          },
          address: "Address",
          phone: "Phone",
          email: "Email",
          lang: "Français",
          home: "Home",
          services: "Services",
          instructors: "Instructors",
          meals: "Meals",
          reserve: "Reserve"

        },
      },
      fr: {
        translation: {
          home_title:
            "Libérez le Chef en Vous - Cuisine Avec Les Pro ou À Domicile!",
          home_sub_title:
            "Partez pour une aventure culinaire extraordinaire! Cuisinez avec des pros ou apprenez chez vous. Réservez maintenant et savourez la joie de créer des plats délicieux. Rejoignez-nous et réservez dès maintenant!",
          serv_title: "Liste des Services",
          serv_one: {
            title: "Une session",
            sub_title: "Moins populaire",
            description:
              "Découvrez la joie de cuisiner lors de nos sessions interactives de 2 heures pour seulement 50 $. Apprenez des chefs experts, libérez votre créativité culinaire et maîtrisez les techniques gastronomiques lors d'une formation culinaire personnalisée et abordable.",
            price: "50 $ pour 2 heures",
          },
          serv_two: {
            title: "Cuisine en personne",
            sub_title: "Choix populaire",
            description:
              "Lancez-vous dans une aventure culinaire avec notre programme de cuisine en personne. En 5 mois, maîtrisez l'art de cuisiner aux côtés de chefs expérimentés, explorez des cuisines variées et développez vos compétences pour 400 $. Libérez le chef qui sommeille en vous lors d'un voyage pratique et immersif.",
            price: "400 $ pour 5 mois",
          },
          serv_three: {
            title: "Cuisine en ligne",
            sub_title: "Choix le plus apprécié",
            description:
              "Rejoignez notre programme de cuisine en ligne et découvrez un monde de délices culinaires depuis le confort de votre propre cuisine. En 2 mois, apprenez des chefs de premier plan, maîtrisez les techniques de cuisine et créez des plats délicieux pour seulement 200 $. Améliorez vos compétences culinaires en toute simplicité et à moindre coût.",
            price: "200 $ pour 2 mois",
          },
          address: "Adresse",
          phone: "Téléphone",
          email: "Courriel",
          lang: "English",
          home: "Acceuil",
          services: "Services",
          instructors: "Instructeurs",
          meals: "Repas",
          reserve: "Réserver"
        },
      },
    },
  });

export default i18n;

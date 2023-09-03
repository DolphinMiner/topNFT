import i18next, { InitOptions } from "i18next";
import { languages, fallbackLng, namespaces, defaultNS } from "./config";

export { languages, fallbackLng, namespaces, defaultNS };

// Load all locales
const locales = Object.assign(
  {},
  ...Object.keys(languages).map((lng, index) => {
    const language = languages[index];

    return {
      [language]: Object.assign(
        {},
        ...Object.keys(namespaces).map((ns, index) => {
          const namespace = namespaces[index];
          return {
            [namespace]: require(
              "./locales/" + language + "/" + namespace + ".json",
            ),
          };
        }),
      ),
    };
  }),
);

// const detection = {
//   // Order and from where user language should be detected
//   order: [
//     "querystring",
//     "cookie",
//     "localStorage",
//     "sessionStorage",
//     "navigator",
//     "htmlTag",
//     "path",
//     "subdomain",
//   ],
//
//   // Keys or params to lookup language from
//   lookupCookie: "lng",
//   lookupLocalStorage: "lng",
//   lookupFromPathIndex: 0,
//   lookupFromSubdomainIndex: 0,
//
//   // Cache user language on
//   caches: ["localStorage", "cookie"],
//   excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
//
//   // Optional set cookie options, reference: MDN Set-Cookie docs, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
//   cookieOptions: { path: "/", sameSite: "strict" },
// };

// export default i18next.use(LanguageDetector).init({
export default i18next.init({
  // detection: detection,
  fallbackLng,
  resources: locales,
  ns: namespaces,
  defaultNS,
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false, // Not needed for React
  },
  react: {
    wait: true,
  },
} as InitOptions);

export function getAllLanguageSlugs() {
  return languages.map((lang) => {
    return { params: { lang: lang } };
  });
}

export function getLanguage(lang: string) {
  return languages.includes(lang) ? lang : fallbackLng;
}

const { t } = i18next;

// 将各个namespace的translator单独曝露出去
export const t_common = (key: string) => t(key, { ns: "common" });
export const t_home = (key: string) => t(key, { ns: "home" });
export const t_story = (key: string) => t(key, { ns: "story" });

export const fallbackLng = "en";

// export const languages = [fallbackLng, "zh"]
export const languages = [fallbackLng];

export const defaultNS = "common";

// Locale files under ./locales/[lang]/
export const namespaces = [
  defaultNS,
  "home",
  "meta",
  "error",
  "story",
] as const;

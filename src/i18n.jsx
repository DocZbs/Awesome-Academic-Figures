import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  LANGUAGE_KEY,
  languageFromUrl,
  resolveLanguage,
  translate,
} from "./locale.js";

const LocaleContext = createContext(null);
function savedLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_KEY);
  } catch {
    return null;
  }
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() =>
    resolveLanguage(location.search, savedLanguage()),
  );
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(LANGUAGE_KEY, locale);
    } catch {
      // A language preference can safely fall back to this page and its URL.
    }
  }, [locale]);
  useEffect(() => {
    const back = () =>
      setLocale(resolveLanguage(location.search, savedLanguage()));
    const sync = (event) => {
      if (event.key === LANGUAGE_KEY && !languageFromUrl(location.search))
        setLocale(resolveLanguage(location.search, event.newValue));
    };
    window.addEventListener("popstate", back);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("popstate", back);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const value = useMemo(
    () => ({
      locale,
      t: (text) => translate(text, locale),
      setLocale: (next) => {
        const url = new URL(location.href);
        url.searchParams.set("lang", next === "en" ? "en" : "zh");
        history.replaceState(null, "", url);
        setLocale(next);
      },
    }),
    [locale],
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("LocaleProvider is required");
  return value;
}

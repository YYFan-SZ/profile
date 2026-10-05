"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  translate,
  type Lang,
} from "@/lib/i18n";

type LanguageCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
};

const Ctx = createContext<LanguageCtx | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);

  const t = useCallback((path: string) => translate(path, lang), [lang]);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLanguage(): LanguageCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // Safe fallback outside the provider: default language, no-op setter.
    return {
      lang: DEFAULT_LANG,
      setLang: () => {},
      t: (path) => translate(path, DEFAULT_LANG),
    };
  }
  return ctx;
}

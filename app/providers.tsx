"use client";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import type { ReaderLanguage } from "@/lib/readerLanguage";

export function Providers({ children, initialLanguage }: { children: React.ReactNode; initialLanguage: ReaderLanguage }) {
  return (
    <ThemeProvider>
      <LangProvider initialLanguage={initialLanguage}>{children}</LangProvider>
    </ThemeProvider>
  );
}

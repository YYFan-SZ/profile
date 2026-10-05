import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FrozenBackground from "@/components/FrozenBackground";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticTargets from "@/components/MagneticTargets";
import SeasonProvider, {
  SEASON_BOOT_SCRIPT,
} from "@/components/SeasonProvider";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "ZhengYifan · 个人作品集",
  description:
    "ZhengYifan 的个人作品集，记录小程序、网页、AI 工具、内容运营和实践经历。",
  authors: [{ name: "ZhengYifan" }],
  openGraph: {
    title: "ZhengYifan · 个人作品集",
    description:
      "记录小程序、网页、AI 工具、内容运营和实践经历。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZhengYifan · 个人作品集",
    description:
      "记录小程序、网页、AI 工具、内容运营和实践经历。",
  },
};

export const viewport: Viewport = {
  themeColor: "#060e1c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <Script id="season-boot" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: SEASON_BOOT_SCRIPT }} />
        <LanguageProvider>
          <SeasonProvider>
            <FrozenBackground />
            <ScrollProgress />
            {children}
            <CustomCursor />
            <MagneticTargets />
            <Analytics />
          </SeasonProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

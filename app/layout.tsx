import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FrozenBackground from "@/components/FrozenBackground";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticTargets from "@/components/MagneticTargets";
import SeasonProvider, {
  SEASON_BOOT_SCRIPT,
} from "@/components/SeasonProvider";
import LanguageProvider, {
  LANG_BOOT_SCRIPT,
} from "@/components/LanguageProvider";

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
    locale: "es_ES",
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
      <head>
        {/* Run synchronously before hydration to apply the user's stored
            season + language — avoids a flash of the default values. */}
        <script dangerouslySetInnerHTML={{ __html: SEASON_BOOT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOT_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SeasonProvider>
            <FrozenBackground />
            <ScrollProgress />
            {children}
            <CustomCursor />
            <MagneticTargets />
          </SeasonProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

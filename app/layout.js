  import { Sora } from "next/font/google";
import "./globals.css";

/**
 * Primary UI typeface — matches Figma "Font/Font-face" (Sora) for Align by DBS.
 * Weights cover display numerals (light), body (400), UI (500–600), and emphasis (700).
 */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Align by DBS Workspace",
  description: "Workspace solutions by DBS",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}

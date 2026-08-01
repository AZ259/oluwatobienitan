import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oluwatobi Enitan | Journalist & Media Consultant",
  description: "Investigate, Report and amplify stories that matter, for the sake of truth and accountability.",
  icons: {
    icon: "/oluwatobi_enitan_logo.png",
    shortcut: "/oluwatobi_enitan_logo.png",
    apple: "/oluwatobi_enitan_logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`
          }}
          suppressHydrationWarning
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

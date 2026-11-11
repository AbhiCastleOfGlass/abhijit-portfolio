import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abhijit Ghosh | Senior Systems Engineer — GAE & Dimensional Management",
  description: "Portfolio of Abhijit Ghosh – Senior Systems Engineer at Infosys (Stellantis Program), specializing in GD&T, 3D tolerance stack-up analysis (CETOL), and automotive dimensional management.",
  keywords: ["Abhijit Ghosh", "Senior Systems Engineer", "Geometrical Assurance Engineer", "GAE", "GD&T", "Tolerance Analysis", "Siemens NX", "CETOL", "Automotive Engineer", "Dimensional Management", "VSA"],
  authors: [{ name: "Abhijit Ghosh" }],
  creator: "Abhijit Ghosh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhijit-portfolio.vercel.app", // Update this when you have a real domain
    title: "Abhijit Ghosh — Senior Systems Engineer | GAE & Dimensional Management",
    description: "Portfolio of a Senior Systems Engineer specializing in tolerance stack-up analysis (CETOL), GD&T, Siemens NX, and automotive dimensional management.",
    siteName: "Abhijit Ghosh Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${rajdhani.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
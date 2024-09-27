import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Timer",
  description: "Shreyash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

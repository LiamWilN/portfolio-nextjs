import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Calda",
  description: "Your IT Guy for your IT Needs",
  icons: {
    icon: "/me.ico",
  },
  keywords:
    "web developer, nextjs developer, react developer, ms powerplatform developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${roboto.className} text-neutral-100 bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 mx-8 sm:mx-0`}
        >
          <Header />
          <Section>{children}</Section>
          <Footer />
        </body>
      </html>
    </>
  );
}

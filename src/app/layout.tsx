import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Container from "@/components/Container";
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
    <html lang="en">
      <body
        className={`${roboto.className} text-neutral-100 bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900`}
      >
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}

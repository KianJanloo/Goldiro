import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layouts/Layout";


export const metadata: Metadata = {
  title: "Goldiro",

  description: "Goldiro Store. welcome to our family!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

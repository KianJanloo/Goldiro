import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";


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
        <div className="flex flex-col h-full gap-4 w-full overflow-x-hidden">
          <Header />
          <div className="w-full">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

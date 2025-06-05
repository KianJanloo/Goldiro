import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header/Header";


export const metadata: Metadata = {
  title: " Goldiro | ",
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
        <div className="flex flex-col h-full gap-4 w-full">
          <Header />
          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

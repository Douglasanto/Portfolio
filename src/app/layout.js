import { Poppins } from "next/font/google";

import Navbar from "./navbar/navbar";
import Contact from "./contact/contact";
import SmoothScroll from "@/components/SmoothScroll";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfólio  DES",
  description: "Portfólio  DES",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased bg-[#f7f7f7]`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Contact />
        </SmoothScroll>
      </body>
    </html>
  );
}

import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar/page";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Movies Browser 2.0",
  description: "TheMovieDB based app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}

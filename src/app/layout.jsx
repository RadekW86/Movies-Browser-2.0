import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar/page";
import { GenresProvider } from "@/common/genresContext";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Movies Browser 2.0",
  description: "TheMovieDB based app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-lightGray text-black ${poppins.className}`}>
        <TopBar />
        <GenresProvider>{children}</GenresProvider>
      </body>
    </html>
  );
}

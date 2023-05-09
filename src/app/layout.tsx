import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import LoadingAnimation from "./components/modules/loading-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coming Soon",
  description: "Coming Soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingAnimation />
        <main>{children}</main>
      </body>
    </html>
  );
}

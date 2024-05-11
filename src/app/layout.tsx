import "@/styles/globals.css";

import { Inter,Poppins } from "next/font/google";


const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight:[
    '100',
    '200',
    '300',
    '400',
    '500'
  ]
});

export const metadata = {
  title: "Empowerify",
  description: "your little contriubtion can makes infitiy level of peace",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{
      children}
      </body>
    </html>
  );
}

import "@/styles/globals.css";

import { Inter,Poppins,Baloo_Bhai_2, Baloo_2 } from "next/font/google";

export const balooBhai  = Baloo_2({
  subsets:['latin'],
  variable: "--font-baloo-bhai",
  weight:[
    '400',
    '500',
    '600',
    '700'
  ]
  

})

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
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
      <body className={` font-poppins ${balooBhai.variable} ${inter.variable}`}>{
      children}
      </body>
    </html>
  );
}

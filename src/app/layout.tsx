import type { Metadata } from "next";
import { Bodoni_Moda,  Montserrat,Hahmlet} from "next/font/google";
import "./globals.scss";
import Header from "./layout/header/Header";
import { CSSProperties } from "react";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable:'--fontHead' });
const hahmlet = Hahmlet({ subsets: ["latin"],variable:'--fontPara'},);
const monstserrat = Montserrat({ subsets: ["latin"],variable:'--fontAlt'},);
export const metadata: Metadata = {
  title: "Winnieblue❄️ ☕ ",
  description: `
	Hi there i'm Winnie, an already sailed Talent and Social media manager with a focus on Vtubers.
Here you'll be finding a wide selections of service i can provide in order for you and your business to make a skyrocket growth and lighten the burden of content creating and social/project managing on your shoulders.
Let's make it to the top together!✨ 🚀
	`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''style={{'--fontHead':bodoni.style.fontFamily,'--fontPara':hahmlet.style.fontFamily,'--fontAlt':monstserrat.style.fontFamily} as CSSProperties}  >
				<Header/>
				{children}
				
			</body>
    </html>
  );
}

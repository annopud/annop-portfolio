import {
  Kodchasan,
  Righteous,
  Chakra_Petch,
  Space_Grotesk,
  Inter
} from "next/font/google";

export const inter = Inter({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: '--font-inter',
});

export const kodchasan = Kodchasan({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: '--font-kodchasan',
});

export const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-righteous',
});

export const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-chakra-petch',
});

export const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

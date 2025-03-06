import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const fontVariables = `${inter.variable}`;

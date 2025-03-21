import { Navbar } from "@/features/navbar";
import Provider from "@/shared/components/providers";
import { fontVariables } from "@/shared/lib/fonts";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Caper",
	description: "Caper by kelompok 1 SWE Academya",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fontVariables} antialiased`}>
				<Navbar />
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}

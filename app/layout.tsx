import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";

const prompt = Prompt({ subsets: ["thai"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
	title: "My Pointer",
	description: "Credit reward concept.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`container mx-auto ${prompt.className}`}>
				<Toaster />
				<section className="space-y-4">{children}</section>
			</body>
		</html>
	);
}


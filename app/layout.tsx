import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

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
				<section className="my-5 space-y-4">
					<h1 className="text-3xl text-violet-600 font-bold">My Pointer</h1>
					<hr />
					<main>{children}</main>
				</section>
			</body>
		</html>
	);
}


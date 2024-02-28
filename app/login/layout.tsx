import type { Metadata } from "next";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["thai"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
	title: "My Pointer",
	description: "Credit reward concept.",
};

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className={prompt.className}>{children}</div>;
}


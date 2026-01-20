import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./app.css";
import { DeepSeaNav } from "@/components/design-system/DeepSeaNav";
import { DeepSeaBackground } from "@/components/canvas/DeepSeaBackground";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nerdonica",
  description: "Veronica Ray's blog",
  openGraph: {
    title: "Nerdonica",
    description: "Veronica Ray's blog",
    url: "https://veronicaray.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <DeepSeaBackground />
        <DeepSeaNav />
        <main className="relative z-10 pt-24 pb-16 px-8">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}

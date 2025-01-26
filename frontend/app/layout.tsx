import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: ["400"],
  subsets: ['latin'],
  preload: true,
  variable: "--font-michroma",
});


export const metadata: Metadata = {
  title: "X-plane Labs",
  description: "X-plane Labs is a company that is focused on green aviation technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${michroma.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

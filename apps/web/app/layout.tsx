import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Check",
  description: "Cross-platform music link matching for friend groups."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-accent="orange" lang="en">
      <body>{children}</body>
    </html>
  );
}

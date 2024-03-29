import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/feature/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management App",
  description:
    "All in one platform for managing everything about your school. This app can be used to manage students, teachers, parents, create competitions, grade students, and so much more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}

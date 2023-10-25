import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ProjectCtxProvider } from "@/context/ProjectContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JC | Full Stack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProjectCtxProvider>
        <body className={inter.className + "relative .no-scrollbar"}>
          <Navbar />
          {children}
        </body>
      </ProjectCtxProvider>
    </html>
  );
}

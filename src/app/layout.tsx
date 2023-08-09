import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Nav, Provider } from "@/components/organism";
import "@/styles/globals.css";
import Wrapper from "@/components/page/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prompt.io",
  description: "Prompt.io is a platform for creating and sharing prompts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Wrapper>
            <Nav />
            <div className="w-full py-12 px-8 text-black flex flex-col items-center flex-grow bg-white min-h-[81vh]">
              {children}
            </div>
            <Footer />
          </Wrapper>
        </body>
      </Provider>
    </html>
  );
}

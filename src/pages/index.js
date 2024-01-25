import Image from "next/image";
import { Inter } from "next/font/google";
import { Head } from "next/document";
import Script  from 'next/script';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
  // {/* meta tage=s are use to seo freindly webs eraching and add to the head tags to  rank the website */}
  //     <Head>
  //       <title>hunting</title>
  //     </Head>
  <Script
        src="https://example.com/script.js"
        strategy="beforeInteractive"
      />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div>
          <div className="text-center justify-center text-7xl flex flex-col">
            Skills Hunter
          </div>
        </div>
      </main>
    </>
  );
}

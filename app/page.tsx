import Head from 'next/head'
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Inter } from "next/font/google";
import styles from "./Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Kergida Project</title>
    </Head>
      <main className={`${inter.className} h-screen flex justify-center items-center`}>
        <div className="flex flex-col">
          <div className="mb-2">
            <Heading variant="main" size="default">
              Kergida One
            </Heading>
          </div>

          <div className="mb-4">
            <p className=" text-gray-600 text-lg">
              Welcome to the Kergida Project, a small tech initiative dedicated
              to improving the world of IT through collaboration and open-source
              software.
            </p>
          </div>

          <div className="mb-4">
            <Button variant="primary" className={styles.backlight}>
              Get Started
            </Button>
          </div>

          <div className="invisible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}

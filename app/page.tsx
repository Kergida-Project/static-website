import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} antialiased`}>
      <div className="justify-center grid grid-rows-3 gap-7">
        <div className="">
          <Heading variant="default" size="default">
            Kergida One
          </Heading>
        </div>

        <div className="">
          <p className=" text-gray-600 text-lg">
            Welcome to the Kergida Project, a small tech initiative dedicated to
            improving the world of IT through collaboration and open-source
            software.
          </p>
        </div>

        <div className=''>
          <Button variant='primary' shadow='sm'>Get Started</Button>
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
  );
}

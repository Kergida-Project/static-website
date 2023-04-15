import PopoverButton from "@/components/Popover";
import { Heading } from "@/components/ui/Heading";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} antialiased`}>
      <div className="h-screen grid-rows-3">
        <div className="flex justify-center pt-80 grid-rows-3">
          <Heading variant="default" size="default">
            Kergida One
          </Heading>
        </div>

        <div className="flex pt-10 justify-center">
          <p className=" text-gray-600 text-lg">
            Welcome to the Kergida Project, a small tech initiative dedicated to
            improving the world of IT through collaboration and open-source
            software.
          </p>
        </div>

        <div className="flex justify-center pt-10">
          <PopoverButton />
        </div>

        <div className="invisible flex justify-center pt-10">
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

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className='h-screen'>
        <div className='flex justify-center pt-80'>
          <h1 className='h-40 text-7xl font-bold tracking-tight'>
            Kergida Project. Redefined.
          </h1>
        </div>

        <div className='flex justify-center'>
          <p>
          Welcome to the Kergida Project, a small tech initiative dedicated to improving the world of IT through collaboration and open-source software.
          </p>
        </div>

        <div className='flex justify-center pt-10'>
          <button type='button' className='bg-transparent hover:bg-white border hover:transition-colors duration-200 shadow-md shadow-gray-700 hover:text-black py-2 px-4 rounded'>Learn more</button>
        </div>

        <div className='flex justify-center pt-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>

      <div className='h-screen'>
        <div className='flex justify-center pt-80' data-aos="fade-up">
          <h1 className='text-7xl font-bold tracking-tight'>
            A brand new game:
          </h1>
        </div>

        <div className='flex justify-center pt-6' data-aos="fade-up">
          <h1 className='text-4xl font-normal tracking-tight'>
            SCP: Escape The Facility
          </h1>

          <span className='inline-block whitespace-nowrap rounded-[0.27rem] bg-orange px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] leading-none text-white"'>
            Alpha
          </span>
        </div>

        <div className='flex justify-center pt-10'>
          <button type='button' className='bg-transparent border duration-200 shadow-md shadow-gray-700 py-2 px-4 rounded' disabled>Download</button>
        </div>


        
      </div>
    </main>
  )
}

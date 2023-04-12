import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className={`${inter.className}`}>
        <div className='flex items-center justify-center'>
            <h1 className='text-7xl font-bold tracking-tight'>
                Projects
            </h1>
        </div>
    </main>
  )
}

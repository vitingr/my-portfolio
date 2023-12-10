import Hero from '@/components/Hero'
import Contact from '@/components/sections/Contact'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-16 p-[2%] sm:p-[5%] xl:p-[10%]'>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

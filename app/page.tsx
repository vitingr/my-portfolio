import Hero from '@/components/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-16 p-[10%]'>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  )
}

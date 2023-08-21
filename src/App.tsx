import { useEffect, useRef } from "react"
import { useObserver } from "./hooks/useObserver";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Footer } from "./components/Footer";

function App() {
  const [, setElements, entries] = useObserver({
    threshold: 0.6,
    root: null,
    rootMargin: '-50px',
  })

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    setElements(sections)
  }, [setElements])

  useEffect(() => {
    const stickyBoxes = document.querySelectorAll('#rotate')
    stickyBoxes.forEach(stickyBox => {
      stickyBox.classList.remove('open')
    })
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute('id')
        const box = document.querySelector(`a[data-box="${section}"]`);
        box?.classList.add('open')
      }
    })
  })

  const ref = useRef<HTMLDivElement>(null)




  return (
    <div ref={ref} >

      <div className="relative bg-bg-light lg:px-32 dark:bg-bg-dark dark:text-white">
        <Header divDark={ref} />
        <main className="p-6">
          <Sections />
          <hr className="w-full h-1 bg-disabled border-none my-14" />
          <Footer />
        </main>
      </div>

    </div>
  )
}

export default App

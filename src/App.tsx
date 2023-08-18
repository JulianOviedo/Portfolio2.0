import { useEffect, useRef, useState } from "react"
import { SectionTitle } from "./components/SectionTitle";
import { Logos } from "./components/Logos";
import { BurgerMenuIcon, DarkThemeIcon, LighThemeIcon, Logo } from "./assets/Icons/Icons";
import { Proyects } from "./components/ProyectsSection";
import { SocialMedia } from "./components/SocialMedia";
import { useObserver } from "./hooks/useObserver";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)


  const titlesList = ['FrontEnd Web Developer   .', 'Accountant   .', 'Dog Dad 🤣   .'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % titlesList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const NAV_LIs = ['Home', 'About', 'Skills', 'My Work', 'Contact']

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
    if (isBurgerMenuOpen) {
      document.body.classList.remove('no-scroll')

    } else {
      document.body.classList.add('no-scroll')
    }
  }


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

  const handleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      ref.current?.classList.add('dark')
    }
    if (darkMode) {
      ref.current?.classList.remove('dark')
    }
  }



  return (
    <div ref={ref} className="relative bg-bg-light lg:px-32">


      <header className="flex flex-row p-6 py-3 justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Logo />
          <h1 className="font-bold text-lg">Julian Oviedo</h1>
        </div>

        <nav className="flex gap-4 lg:gap-8 items-center">
          <ul className="flex-row hidden gap-8 items-center text-disabled md:flex">
            {NAV_LIs.map(navItem => {
              return (
                <li className={`${navItem === 'Home' ? 'text-black scale-105 border-b-2' : 'transition-all duration-150 ease-in-out cursor-pointer hover:scale-105 hover:border-b-2'}`} key={navItem}>
                  <a className="hover:text-black" href={`#${navItem}`}>{navItem}</a>
                </li>
              )
            })}
            <a href="mailto:julianovie234@gmail.com" className="bg-primary px-4 p-2 text-white rounded hover:shadow-xl hover:underline">Hire Me</a>
          </ul>
          <div className="flex flex-row gap-3 items-center ml-4 md:hidden">
            <button onClick={handleBurgerMenu}>
              <BurgerMenuIcon isOpen={isBurgerMenuOpen} />
            </button>
          </div>
          {darkMode
            ? <DarkThemeIcon handleTheme={handleTheme} />
            : <LighThemeIcon handleTheme={handleTheme}/>
          }
        </nav>
      </header>

      <div className="hidden lg:block">
        <div className="fixed bottom-0 h-44 w-[2px] bg-disabled -ml-8 flex">
          <div className="fixed bottom-48 flex flex-col gap-4 -ml-4">
            <SocialMedia />
          </div>
        </div>
        <div className="fixed right-24 bottom-0 h-44 w-[2px] bg-disabled ">
          <div className="fixed bottom-48 -ml-2 flex flex-col gap-4">
            <a href="#Home" data-box='Home' id="rotate" className="open w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150"></a>
            <a href="#About" data-box='About' id="rotate" className="w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150"></a>
            <a href="#Skills" data-box='Skills' id="rotate" className="w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150"></a>
            <a href="#My Work" data-box='My Work' id="rotate" className="w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150"></a>
            <a href="#Contact" data-box='Contact' id="rotate" className="w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150"></a>

          </div>
        </div>
      </div>

      {isBurgerMenuOpen &&
        <div id="burger-menu" className="z-20 absolute bg-white w-full h-full p-6">
          <nav className="flex flex-col">
            <ul className="flex-col items-center">
              {NAV_LIs.map(navItem => {
                return (
                  <li className='mb-4 transition-all duration-150 ease-in-out hover:scale-105' key={navItem}>
                    <a onClick={handleBurgerMenu} className="hover:text-disabled cursor-pointer text-black" href={`#${navItem}`}>{navItem}</a>
                  </li>
                )
              })}
            </ul>
            <a href="mailto:julianovie234@gmail.com" className="bg-primary w-32 text-center mt-4 px-4 p-2 text-white rounded hover:shadow-xl hover:underline">Hire Me</a>
          </nav>
        </div>
      }

      <main className="p-6">

        <section id="Home" className="text-xl flex h-screen items-start justify-center flex-col lg:ml-24">
          <span className="text-primary font-bold text-xl lg:text-2xl">Hello! 👋🏻 My Name is</span>
          <h1 className="font-extrabold text-4xl mt-4 lg:text-6xl">Julian Oviedo</h1>
          <h2 className="mt-2 relative text-2xl font-bold lg:text-4xl">{titlesList[currentIndex]}<span id='typewritter'>&#160;</span></h2>
          <p className="mt-2 text-sm lg:text-lg">I design and build websites that look good, and work well.</p>
          <a href="#My Work" className="text-white bg-primary rounded w-34 h-12 mt-4 font-extralight px-4 text-sm hover:shadow-2xl hover:underline flex items-center justify-center cursor-pointer lg:mb-56 lg:text-md">
            See my Work
          </a>
        </section>

        <section id="About" className="mb-40 lg:h-screen" >
          <SectionTitle>About</SectionTitle>
          <div className="md:flex md:flex-row-reverse md:gap-10 md:justify-end mt-10">
            <img className="w-full lg:w-[450px] h-[350px] lg:h-[550px] lg:ml-20  rounded-md " src="/profile.jpeg" alt="profile img" />
            <p className="my-6 text-md text-justify font-extralight lg:w-[45%] lg:text-lg">
              👋🏻 I’m 26 years old. I’m currently studying Computer Science since almost 3 years and also have an Accountant degree. As you can see, I really like maths and everything related with numbers. <br /><br />

              🌍  I'm based in Córdoba, Argentina <br /><br />

              🖥 I'm a software developer with solid professional experience building web applications. My main focus is on the front-end, but i love building and learning about both ends of the stacks. <br /><br />

              📚 I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I'm worth</p>
          </div>
        </section>

        <section id="Skills" className="mb-40 lg:h-screen">
          <SectionTitle>Skills</SectionTitle>
          <div className="mt-20 flex gap-10 lg:gap-28 items-center flex-wrap justify-center lg:w-[70%] lg:m-auto lg:mt-20">
            <Logos />
          </div>

        </section>

        <section id="My Work" className="mb-40 ">
          <SectionTitle>My Work</SectionTitle>
          <Proyects />
        </section>

        <section id="Contact" className="lg:mt-24 ">
          <SectionTitle>Contact</SectionTitle>
          <p className="mt-10">
            I'm currently available to get involved in new projects, so get in touch if you'd like to work together. <br /><br />
            Email me at <a className="text-primary font-bold hover:underline" href="mailto:julianovie234@gmail.com">julianovie234@gmail.com</a> and let's talk !
          </p>
        </section>

        <hr className="w-full h-1 bg-disabled border-none my-14" />

        <footer className="flex flex-col gap-4">
          <Logo />
          <span>© 2023 - Developed by Julian Oviedo</span>
          <div className="flex flex-row gap-3 items-center lg:hidden">
            <SocialMedia />
          </div>

        </footer>


      </main>
    </div>
  )
}

export default App

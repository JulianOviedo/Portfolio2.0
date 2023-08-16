import { useState } from "react"
// import { useObserver } from "./hooks/useObserver"
import { SectionTitle } from "./components/SectionTitle";
import { Logos } from "./components/Logos";
import { BurgerMenuIcon, LighThemeIcon, Logo } from "./assets/Icons/Icons";
import { Proyects } from "./components/ProyectsSection";
import { SocialMedia } from "./components/SocialMedia";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const NAV_LIs = ['Home', 'About', 'Skills', 'My Work', 'Contact']

  const handleBurgerMenu = () => {
    const span = document.getElementById('burger-logo')
    console.log(span)
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
    if (isBurgerMenuOpen) {
      document.body.classList.remove('no-scroll')

    } else {
      document.body.classList.add('no-scroll')
    }
  }


  return (
    <div className="relative bg-bg-light lg:px-32">
      <header className="flex flex-row p-6 py-3 justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Logo />
          <h1 className="font-bold text-lg">Julian Oviedo</h1>
        </div>

        <nav className="flex">
          <ul className="flex-row hidden gap-8 items-center text-disabled sm:flex">
            {NAV_LIs.map(navItem => {
              return (
                <li className={`${navItem === 'Home' ? 'text-black scale-105 border-b-2' : 'transition-all duration-150 ease-in-out cursor-pointer hover:scale-105 hover:border-b-2'}`} key={navItem}>
                  <a className="hover:text-black" href={`#${navItem}`}>{navItem}</a>
                </li>
              )
            })}
            <button className="bg-primary px-4 p-2 text-white rounded hover:shadow-xl hover:underline">Hire Me</button>
          </ul>
          <div className="flex flex-row gap-3 items-center ml-4">
            <button onClick={handleBurgerMenu}>
              <BurgerMenuIcon isOpen={isBurgerMenuOpen} />
            </button>
            <LighThemeIcon />
          </div>
        </nav>
      </header>

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

        <section id="Home" className="text-xl flex h-screen items-start justify-center flex-col">
          <span className="text-primary font-bold text-xl">Hello! 👋🏻 My Name is</span>
          <h1 className="font-extrabold text-4xl mt-4">Julian Oviedo</h1>
          <h2 className="mt-2 relative text-2xl font-bold">FrontEnd Web Developer  .<span id='typewritter'>&#160;</span></h2>
          <p className="mt-1 text-sm">I design and build websites that look good, and work well.</p>
          <a href="#My Work" className="text-white bg-primary rounded w-34 h-12 mt-4 font-extralight px-4 text-sm hover:shadow-2xl hover:underline flex items-center justify-center cursor-pointer">
            See my Work
          </a>
        </section>

        <section id="About" className="mb-40" >
          <SectionTitle>About</SectionTitle>


          <img className="w-full h-[350px] rounded-md" src="/profile.png" alt="profile img" />
          <p className="my-6 text-md text-justify font-extralight">
            👋🏻 I’m 26 years old. I’m currently studying Computer Science since almost 3 years and also have an Accountant degree. As you can see, I really like maths and everything related with numbers. <br /><br />

            🌍  I'm based in Córdoba, Argentina <br /><br />

            🖥 I'm a software developer with solid professional experience building web applications. My main focus is on the front-end, but i love building and learning about both ends of the stacks. <br /><br />

            📚 I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I'm worth</p>
        </section>

        <section id="Skills" className="mb-40">
          <SectionTitle>Skills</SectionTitle>
          <div className="mt-20 flex gap-10 items-center flex-wrap justify-center">
            <Logos />
          </div>

        </section>

        <section id="My Work" className="mb-40">
          <SectionTitle>My Work</SectionTitle>
          <Proyects />
        </section>

        <section id="Contact">
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
          <SocialMedia />
        </footer>


      </main>
    </div>
  )
}

export default App

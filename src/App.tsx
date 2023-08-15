import { BurgerMenuIcon, LighThemeIcon, Logo } from "./assets/Icons/Icons"

function App() {

  return (
    <div className="bg-bg-light">
      <header className="flex flex-row p-6 justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Logo />
          <h1 className="font-bold text-lg">Julian Oviedo</h1>
        </div>

        <nav>
          <ul className="flex-row flex gap-4 items-center text-disabled">
              <li data-section='home' className="focus: cursor-pointer">Home</li>           
              <li data-section='about'>About</li>           
              <li data-section='skills'>Skills</li>           
              <li>My Work</li>           
              <li>Contact</li>
              <button className="bg-primary px-4 p-2 text-white rounded">Hire Me</button>
          </ul>
        </nav>

        {/* <div className="flex flex-row gap-1 items-center">
          <BurgerMenuIcon />
          <LighThemeIcon />
        </div> */}
      </header>

      <main>

        <section data-section="home" className="text-xl p-6 flex h-screen items-start justify-center flex-col">
          <span className="text-primary font-bold text-2xl">Hello! 👋🏻 My Name is</span>
          <h1 className="font-extrabold text-4xl">Julian Oviedo</h1>
          <h2>oficios...</h2>
          <p className="font-light">creo paginas web algo asi je</p>
          <button className="text-white bg-primary rounded w-44 h-16 mt-4 font-extralight px-4 text-lg ">
            See my Work
          </button>
        </section>

        <section data-section="about" className="p-6 h-screen" >
          <h1 className="font-extrabold text-5xl">About</h1>
          <hr className="w-40 h-1 bg-primary mt-3 " />

          <img className="w-full h-[450px] rounded-md" src="src/assets/profile.png" alt="profile img" />
          <p className="my-6 text-lg font-extralight">
           👋🏻 My name is Julian, I’m 26 years old. I’m currently studying Computer Science since almost 3 years and also have an Accountant degree. As you can see, I really like maths and everything related with numbers. <br /><br />

            🌍  I'm based in Córdoba, Argentina <br /><br />

            🖥 I'm a software developer with solid professional experience building web applications. My main focus is on the front-end, but i love building and learning about both ends of the stacks. <br /><br />

            📚 I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I'm worth</p>
        </section>

        <section data-section='skills' className="h-screen bg-black">

        </section>


      </main>
    </div>
  )
}

export default App

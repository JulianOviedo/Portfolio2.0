import { useEffect, useState } from "react"
import { Logos } from "./SkillLogos"
import { Proyects } from "./ProyectsSection"
import { SectionTitle } from "./SectionTitle"
import { Timeline } from "./Timeline"

export const Sections = () => {
  const titlesList = ['FrontEnd Web Developer   .', 'Accountant   .', 'Musician   .', 'Dog Dad 🤣   .'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % titlesList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <section id="Home" className="text-xl flex h-screen items-start justify-center flex-col lg:ml-24">
        <span className="text-primary font-bold text-xl lg:text-2xl">Hello! 👋🏻 My Name is</span>
        <h1 className="font-extrabold text-4xl mt-4 lg:text-6xl">Julian Oviedo</h1>
        <h2 className="mt-2 relative text-2xl font-bold lg:text-4xl dark:text-disabled">{titlesList[currentIndex]}<span id='typewritter' className="bg-bg-light after:bg-bg-dark dark:bg-bg-dark dark:after:bg-white">&#160;</span></h2>
        <p className="mt-2 text-sm lg:text-lg dark:text-disabled">I design and build websites that look good, and work well.</p>
        <a href="#My Work" className="text-white bg-primary rounded w-34 h-12 mt-4 font-extralight px-4 text-sm hover:shadow-2xl hover:underline flex items-center justify-center cursor-pointer lg:mb-56 lg:text-md">
          See my Work
        </a>
      </section>

      <section id="About" className="mb-40 lg:h-screen" >
        <SectionTitle>About</SectionTitle>
        <div className="md:flex md:flex-row-reverse md:gap-10 md:justify-end mt-10">
          <img className="w-full lg:w-[450px] h-[350px] lg:h-[550px] lg:ml-20  rounded-md " src="/profile.jpeg" alt="profile img" />
          <p className="my-6 text-md text-justify font-extralight lg:w-[45%] lg:text-lg dark:text-disabled">
            👋🏻 I’m 26 years old. I’m currently studying Computer Science since almost 3 years and also have an Accountant degree. As you can see, I really like maths and everything related with numbers. <br /><br />

            🌍  I'm based in Córdoba, Argentina <br /><br />

            🖥 I'm a software developer with solid professional experience building web applications. My main focus is on the front-end, but i love building and learning about both ends of the stacks. <br /><br />

            📚 I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I'm worth</p>
        </div>
      </section>

      <section id="Experience" className="mb-40 lg:h-screen">
        <SectionTitle>Experience</SectionTitle>
        <Timeline />
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
    </>
  )
}
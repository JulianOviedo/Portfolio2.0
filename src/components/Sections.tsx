import { useEffect, useState } from "react";
import { Logos } from "./SkillLogos";
import { Proyects } from "./ProyectsSection";
import { SectionTitle } from "./SectionTitle";
import { Timeline } from "./Timeline";
import { Element } from "react-scroll";

export const Sections = () => {
  const titlesList = [
    "FrontEnd Web Developer",
    "Accountant",
    "Musician",
    "Dog Dad 🤣",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % titlesList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <section
        id="Home"
        className="text-xl flex h-screen items-start justify-center flex-col lg:ml-24"
      >
        <span className="text-primary font-bold text-xl lg:text-2xl">
          Hello! 👋🏻 My Name is
        </span>
        <h1 className="font-extrabold text-4xl mt-4 lg:text-6xl">
          Julian Oviedo
        </h1>
        <h2 className="mt-2 relative text-2xl font-bold lg:text-4xl dark:text-disabled animate-wiggle">
          {titlesList[currentIndex]}
        </h2>
        <p className="mt-2 text-sm lg:text-lg dark:text-disabled">
          I design and build websites that look good, and work well.
        </p>
        <a
          href="#My Work"
          className="text-white bg-primary rounded w-34 h-12 mt-4 font-extralight px-4 text-sm hover:shadow-2xl hover:underline flex items-center justify-center cursor-pointer lg:mb-56 lg:text-md"
        >
          See my Work
        </a>
      </section>

      <Element name="About">
        <section id="About" className="mb-40 lg:h-screen">
          <SectionTitle>About</SectionTitle>
          <div className="md:flex md:flex-col md:gap-10 md:justify-center xl:flex-row-reverse mt-10 xl:max-h-[700px]">
            <img
              className="w-full sm:w-[450px] sm:self-center"
              src="/profile.png"
              alt="profile img"
            />
            <p className="my-6 text-md text-justify font-extralight lg:w-full lg:text-lg dark:text-disabled 2xl:p-5 h-auto max-w-[800px] self-center ">
              👋🏻 Hello there! I'm Julian, a passionate software developer based
              in Córdoba, Argentina. With a background in Public Accounting,
              I've transitioned into the world of computer science, currently
              pursuing a degree in the field. <br />
              <br />
              💼 In my current role at Solvd, I specialize in front-end
              development while also delving into backend tools and
              technologies. Known for my teamwork and empathy, I thrive in
              collaborative environments, constantly seeking opportunities to
              learn and grow both personally and professionally.
              <br />
              <br />
              👨‍🏫 Additionally, I've had the privilege of mentoring testing
              students at Solvd, focusing on frontend development. I organize
              weekly classes, assign tasks, and provide constructive feedback to
              help others reach their full potential in software development.{" "}
              <br />
              <br />
              🌱 I'm always eager to expand my skill set and explore new
              technologies in the development landscape.
              <br />
              <br />
              🌎 Fluent in English, I'm adept at communicating in international
              settings and contributing to global projects. <br />
              <br />
              I'm excited to continue my journey of growth and contribute to the
              ever-evolving world of software development!
            </p>
          </div>
        </section>
      </Element>

      <Element name="Experience">
        <section id="Experience" className="mb-40 lg:h-screen">
          <SectionTitle>Experience</SectionTitle>
          <Timeline />
        </section>
      </Element>

      <Element name="Skills">
        <section id="Skills" className="mb-40 lg:h-screen">
          <SectionTitle>Skills</SectionTitle>
          <div className="mt-20 flex gap-10 lg:gap-28 items-center flex-wrap justify-center lg:w-[70%] lg:m-auto lg:mt-20">
            <Logos />
          </div>
        </section>
      </Element>

      <Element name="My Work">
        <section id="My Work" className="mb-40 ">
          <SectionTitle>My Work</SectionTitle>
          <Proyects />
        </section>
      </Element>

      <Element name="Contact">
        <section id="Contact" className="lg:mt-24 ">
          <SectionTitle>Contact</SectionTitle>
          <p className="mt-10">
            I'm currently available to get involved in new projects, so get in
            touch if you'd like to work together. <br />
            <br />
            Email me at{" "}
            <a
              className="text-primary font-bold hover:underline"
              href="mailto:julianovie234@gmail.com"
            >
              julianovie234@gmail.com
            </a>{" "}
            and let's talk !
          </p>
        </section>
      </Element>
    </>
  );
};

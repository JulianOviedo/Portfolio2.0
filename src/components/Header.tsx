import { useState } from "react";
import {
  BurgerMenuIcon,
  DarkThemeIcon,
  LighThemeIcon,
  Logo,
} from "../assets/Icons/Icons";
import { SocialMedia } from "./SocialMedia";
import { Link } from "react-scroll";

interface HeaderProps {
  divDark: any;
}

export const Header = ({ divDark }: HeaderProps) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const NAV_LIs = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "My Work",
    "Contact",
  ];

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    if (isBurgerMenuOpen) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  const handleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      divDark.current?.classList.add("dark");
    }
    if (darkMode) {
      divDark.current?.classList.remove("dark");
    }
  };

  return (
    <>
      <header className="flex flex-row p-6 py-3 justify-between sticky top-0 bg-bg-light z-10 dark:bg-bg-dark transition-all duration-1000 ">
        <div className="flex flex-row gap-4 items-center">
          <Logo />
          <h1 className="font-bold text-lg">Julian Oviedo</h1>
        </div>

        <nav className="flex gap-4 lg:gap-8 items-center">
          <ul className="flex-row hidden gap-8 items-center text-disabled md:flex">
            {NAV_LIs.map((navItem) => {
              return (
                <li
                  className="transition-all duration-150 ease-in-out cursor-pointer hover:scale-105 hover:border-b-2"
                  key={navItem}
                >
                  <Link
                    to={`${navItem}`}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    className="hover:text-black dark:hover:text-white"
                  >
                    {navItem}
                  </Link>
                </li>
              );
            })}
            <a
              href="mailto:julianovie234@gmail.com"
              className="bg-primary px-4 p-2 text-white rounded hover:shadow-xl hover:underline"
            >
              Hire Me
            </a>
          </ul>
          <div className="flex flex-row gap-3 items-center ml-4 md:hidden">
            <button onClick={handleBurgerMenu}>
              <BurgerMenuIcon isOpen={isBurgerMenuOpen} />
            </button>
          </div>
          {darkMode ? (
            <DarkThemeIcon handleTheme={handleTheme} />
          ) : (
            <LighThemeIcon handleTheme={handleTheme} />
          )}
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
            {NAV_LIs.map((navItem) => {
              return (
                <Link
                  to={navItem}
                  smooth={true}
                  data-box={`${navItem}`}
                  activeClass="active"
                  spy={true}
                  id="rotate"
                  className="w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150"
                  key={navItem}
                ></Link>
              );
            })}
          </div>
        </div>
      </div>

      {isBurgerMenuOpen && (
        <div
          id="burger-menu"
          className="z-20 absolute bg-white w-full h-full p-6 dark:bg-bg-dark"
        >
          <nav className="flex flex-col">
            <ul className="flex-col items-center">
              {NAV_LIs.map((navItem) => {
                return (
                  <li
                    className="mb-4 transition-all duration-150 ease-in-out hover:scale-105"
                    key={navItem}
                  >
                    <Link
                      onClick={handleBurgerMenu}
                      className="hover:text-disabled cursor-pointer text-black dark:text-disabled"
                      activeClass="active"
                      to={`${navItem}`}
                      smooth={true}
                    >
                      {navItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href="mailto:julianovie234@gmail.com"
              className="bg-primary w-32 text-center mt-4 px-4 p-2 text-white rounded hover:shadow-xl hover:underline"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

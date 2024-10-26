import { useState } from "react";
import { Link } from "react-scroll";
import { BurgerMenuIcon, DarkThemeIcon, LighThemeIcon, Logo } from "../assets/Icons/Icons";
import { SocialMedia } from "./SocialMedia";

interface HeaderProps {
  divDark: any;
}

export const Header = ({ divDark }: HeaderProps) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentActive, setCurrentActive] = useState("");

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
    document.body.classList.toggle("no-scroll", isBurgerMenuOpen);
    if (!isBurgerMenuOpen) {
      window.scrollTo(0, 0);
    }
  };

  const handleTheme = () => {
    setDarkMode(!darkMode);
    divDark.current?.classList.toggle("dark", !darkMode);
  };

  const NAVBAR_OFFSET = 300;

  const handleSetActive = (to:any) => {
    setCurrentActive(to);
  };

  return (
    <>
      <header className="flex flex-row p-6 py-3 justify-between sticky top-0 bg-bg-light dark:bg-bg-dark transition-all duration-1000 z-[999] rounded-lg ">
        <div className="flex flex-row gap-4 items-center z-10">
          <Logo />
          <h1 className="font-bold text-lg">Julian Oviedo</h1>
        </div>

        <nav className="flex gap-4 lg:gap-8 items-center">
          <ul className="flex-row hidden gap-8 items-center text-disabled md:flex">
            {NAV_LIs.map((navItem) => {
              return (
                <li
                  key={navItem}
                  className="transition-all duration-150 ease-in-out cursor-pointer hover:scale-105 hover:border-b-2"
                >
                  <Link
                    to={navItem}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-NAVBAR_OFFSET}
                    className="hover:text-black dark:hover:text-white"
                    onSetActive={handleSetActive}
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
                  offset={-NAVBAR_OFFSET}
                  spy={true}
                  id="rotate"
                  className={`w-[20px] h-[20px] bg-disabled rounded hover:bg-black cursor-pointer transition-all duration-150 ${currentActive === navItem ? 'open' : ''}`} // Aquí aplicas la clase 'open'
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
          className="z-20 absolute w-full h-full p-6 dark:bg-bg-dark overflow-hidden bg-bg-light"
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
                      offset={-NAVBAR_OFFSET}
                      to={navItem}
                      smooth={true}
                      onSetActive={handleSetActive}
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

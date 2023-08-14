import { BurgerMenuIcon, LighThemeIcon, Logo } from "./assets/Icons/Icons"

function App() {

  return (
    <header className="flex flex-row p-4 justify-between items-center">
      <div className="flex flex-row gap-4">
        <Logo />
        <h1 className="font-bold">Julian Oviedo</h1>
      </div>
      <div className="flex flex-row gap-1">
        <BurgerMenuIcon />
        <LighThemeIcon />
      </div>
    </header>
  )
}

export default App

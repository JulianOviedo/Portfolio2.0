import { Logo } from "../assets/Icons/Icons"
import { SocialMedia } from "./SocialMedia"

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4">
      <Logo />
      <span>© 2023 - Developed by Julian Oviedo</span>
      <div className="flex flex-row gap-3 items-center lg:hidden">
        <SocialMedia />
      </div>
    </footer>
  )
}
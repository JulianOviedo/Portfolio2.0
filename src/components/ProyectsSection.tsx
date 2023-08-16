import { HtmlIcon, NextLogo, ReactLogo, TailwindIcon } from "../assets/Icons/Icons"
import { ProyectCard } from "./ProyectCard"

export const Proyects = () => {
    return (
        <>
            <ProyectCard img={"/src/assets/profile.png"} title={"Proyecto 1"} technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <NextLogo/>]} description="Create an amazing GitHub profile complete with skills icons, stat graphs and more in just a couple of minutes."/>
            <ProyectCard img={"/src/assets/profile.png"} title={"Proyecto 1"} technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <NextLogo/>]} description="Create an amazing GitHub profile complete with skills icons, stat graphs and more in just a couple of minutes."/>
            <ProyectCard img={"/src/assets/profile.png"} title={"Proyecto 1"} technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <NextLogo/>]} description="Create an amazing GitHub profile complete with skills icons, stat graphs and more in just a couple of minutes."/>
            <ProyectCard img={"/src/assets/profile.png"} title={"Proyecto 1"} technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <NextLogo/>]} description="Create an amazing GitHub profile complete with skills icons, stat graphs and more in just a couple of minutes."/>
        </>
    )
}
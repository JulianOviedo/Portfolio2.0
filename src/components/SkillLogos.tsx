import { ExpressLogo } from "../assets/Icons/Icons"
import { NodeLogo } from "../assets/Icons/Icons"
import { MaterialUILogo } from "../assets/Icons/Icons"
import { MySQLLogo } from "../assets/Icons/Icons"
import { MongoLogo } from "../assets/Icons/Icons"
import { NextLogo } from "../assets/Icons/Icons"
import { CSSIcon, HtmlIcon, JavascriptIcon, ReactLogo, TailwindIcon, TypescriptIcon } from "../assets/Icons/Icons"

export const Logos = () => {
    const logos = [<HtmlIcon />, <CSSIcon />, <TailwindIcon />, <JavascriptIcon />, <TypescriptIcon />, <ReactLogo />, <NextLogo />, <NodeLogo />, <ExpressLogo />, <MongoLogo />, <MySQLLogo />, <MaterialUILogo />,]
    return (
        <>
            {logos.map((logo, idx) => {
                return (
                    <div key={idx} className="w-16 lg:w-[84px]">
                        {logo}
                    </div>
                )
            })}
        </>
    )
}
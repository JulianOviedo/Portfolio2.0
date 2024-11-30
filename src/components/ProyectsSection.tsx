import { HtmlIcon, JavascriptIcon, MaterialUILogo, NextLogo, NodeLogo, ReactLogo, SupabaseIcon, TailwindIcon, TypescriptIcon } from "../assets/Icons/Icons"
import { ProyectCard } from "./ProyectCard"

export const Proyects = () => {
    return (
        <div className="xl:grid xl:grid-cols-2 xl:gap-20 xl:justify-items-center xl:mt-10 mt-10 lg:flex lg:items-center lg:flex-col lg:gap-20 ">
            <ProyectCard
                img={"/solvd.png"}
                title={"Solvd Main Page"}
                urlDeploy={'https://www.solvd.com/'}
                urlGithub={'https://github.com/solvdinc/solvd-website-frontend'}
                technologies={[<HtmlIcon />, <MaterialUILogo />, <ReactLogo />, <TypescriptIcon />, <NextLogo/>, <JavascriptIcon/>, <NodeLogo/>]}
                description="Current project. The company website is constantly modified through the decisions of the marketing team and has a very particular design"
            />
            <ProyectCard
                img={"/surveydApp.png"}
                title={"Surveyd App"}
                technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <JavascriptIcon />, <NextLogo/>, <SupabaseIcon/>]}
                urlGithub={'https://github.com/utvecklarlabbet/enkatt'}
                urlDeploy={'https://surveyd.app/'}
                description="The Survey App is an efficient, modern, and user-friendly tool that enables the creation, distribution, and analysis of surveys effectively, designed with a focus on user experience and scalability."
            />
             <ProyectCard
                img={"/gargolas-fc.png"}
                title={"Gargolas Football Club"}
                technologies={[<HtmlIcon />, <MaterialUILogo />, <ReactLogo />, <TypescriptIcon />, <NextLogo/>]}
                urlGithub={'https://github.com/JulianOviedo/GARGOLAS-FC'}
                urlDeploy={'https://gargolas-fc.vercel.app/'}
                description="Developed and designed website for an amateur football club"
            />
            <ProyectCard
                img={"/countries-api.png"}
                title={"Countries API"}
                technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <TypescriptIcon />]}
                urlGithub={'https://github.com/JulianOviedo/countries-api'}
                urlDeploy={'https://countries-api-sooty.vercel.app/'}
                description="Countries around the world. App made with react and typescript and wouter"
            />
            <ProyectCard
                img={"/shoes-shop.png"}
                title={"Shoes Shop - Ecommerce"}
                technologies={[<HtmlIcon />, <MaterialUILogo />, <ReactLogo />, <NextLogo />, <JavascriptIcon />]}
                urlGithub={'https://github.com/emiacerbi/shoes-shop'}
                urlDeploy={'https://shoes-shop-main.vercel.app/'}
                description="A team-made app created with Next.js using Next-auth for management the authentication and mainly React.js and MUI, also other libraries
                like Axios & ReactQuery to connect the API to the app."
            />
            <ProyectCard
                img={"/short-url.png"}
                title={"Shorter URL"}
                urlDeploy={'https://url-shortly-qmg2.vercel.app/'}
                urlGithub={'https://github.com/JulianOviedo/url-shortly'}
                technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <TypescriptIcon />]}
                description="Short your looooong looooooong URL"
            />
            <ProyectCard
                img={"/tesla.png"}
                title={"Tesla Landing"}
                urlGithub={'https://github.com/JulianOviedo/Tesla-landing'}
                urlDeploy={'https://tesla-landing-pi.vercel.app/'}
                technologies={[<HtmlIcon />, <TailwindIcon />, <JavascriptIcon />]}
                description="Copy of the official landing of Tesla."
            />
            <ProyectCard
                img={"/old-portfolio.png"}
                title={"Portfolio v1.0"}
                urlGithub={'https://github.com/JulianOviedo/Portfolio'}
                urlDeploy={'https://julianoviedo-portfolio.vercel.app/'}
                technologies={[<HtmlIcon />, <MaterialUILogo />, <JavascriptIcon />, <ReactLogo />]}
                description="Old Portfolio"
            />
        </div>
    )
}

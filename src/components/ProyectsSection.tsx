import { ExpressLogo, HtmlIcon, JavascriptIcon, MaterialUILogo, MongoLogo, NextLogo, NodeLogo, ReactLogo, TailwindIcon, TypescriptIcon } from "../assets/Icons/Icons"
import { ProyectCard } from "./ProyectCard"

export const Proyects = () => {
    return (
        <>
            <ProyectCard
                img={"/Users/solvd/Desktop/dev/Portfolio2.0/src/assets/countries-api.png"}
                title={"Countries API"}
                technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <TypescriptIcon/>]}
                urlGithub={'https://github.com/JulianOviedo/countries-api'}
                urlDeploy={'https://countries-api-sooty.vercel.app/'}
                description="Countries around the world. App made with react and typescript and wouter"
            />
            <ProyectCard
                img={"/src/assets/shoes-shop.png"}
                title={"Shoes Shop - Ecommerce"}
                technologies={[<HtmlIcon />, <MaterialUILogo />, <ReactLogo />, <NextLogo />, <JavascriptIcon/>]}
                urlGithub={'https://github.com/emiacerbi/shoes-shop'}
                urlDeploy={'https://shoes-shop-main.vercel.app/'}
                description="A team-made app created with Next.js using Next-auth for management the authentication and mainly React.js and MUI, also other libraries
                like Axios & ReactQuery to connect the API to the app."
            />
            <ProyectCard
                img={"/src/assets/short-url.png"}
                title={"Shorter URL"}
                urlDeploy={'https://url-shortly-qmg2.vercel.app/'}
                urlGithub={'https://github.com/JulianOviedo/url-shortly'}
                technologies={[<HtmlIcon />, <TailwindIcon />, <ReactLogo />, <TypescriptIcon/>]}
                description="Short your looooong looooooong URL"
            />
            <ProyectCard
                img={"/src/assets/tesla.png"}
                title={"Tesla Landing"}
                urlGithub={'https://github.com/JulianOviedo/Tesla-landing'}
                urlDeploy={'https://tesla-landing-pi.vercel.app/'}
                technologies={[<HtmlIcon />, <TailwindIcon/>, <JavascriptIcon/>]}
                description="Copy of the official landing of Tesla."
            />
              <ProyectCard
                img={"/src/assets/movie-browser.png"}
                title={"Movie Browser"}
                urlGithub={'https://github.com/JulianOviedo/Movie-Browser'}
                urlDeploy={'https://movie-browser-pi.vercel.app/'}
                technologies={[<HtmlIcon />, <TailwindIcon/>, <JavascriptIcon/>, <ReactLogo/>]}
                description="Responsive Movie browser made with React. The main goal of this project 
                was used the useMemo & useCallback hooks from React to avoid to fetch every mutation on the value of the controlled input."
            />
             <ProyectCard
                img={"/src/assets/yelp-camp.png"}
                title={"Yelp Camp"}
                urlGithub={'https://github.com/JulianOviedo/YelpCamp'}
                technologies={[<HtmlIcon />, <MaterialUILogo/>, <JavascriptIcon/>, <ReactLogo/>, <NextLogo/>, <ExpressLogo/>, <NodeLogo/>, <MongoLogo/>]}
                description="Fullstack app"
            />
              <ProyectCard
                img={"/src/assets/old-portfolio.png"}
                title={"Portfolio v1.0"}
                urlGithub={'https://github.com/JulianOviedo/Portfolio'}
                urlDeploy={'https://julianoviedo-portfolio.vercel.app/'}
                technologies={[<HtmlIcon />, <MaterialUILogo/>, <JavascriptIcon/>, <ReactLogo/>]}
                description="Old Portfolio"
            />
        </>
    )
}

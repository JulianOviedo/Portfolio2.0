import { GithubIcon, UrlIcon } from "../assets/Icons/Icons";

interface ProyectCardProps {
    img: string;
    title: string;
    description: string;
    technologies: JSX.Element[];
    urlGithub?: string;
    urlDeploy?: string;
}

export const ProyectCard = ({ img, title, description, technologies, urlGithub, urlDeploy }: ProyectCardProps) => {
    return (
        <article className="h-540 w-full shadow-md rounded bg-white p-4 mt-10">
            <img src={img} alt={title} className="rounded w-full h-[190px]"></img>
            <h4 className="font-bold text-xl mt-4 mb-2">{title}</h4>
            <hr className="w-20 h-1 bg-primary mt-3 " />
            <div className="mb-8 mt-4 flex flex-row gap-2 flex-wrap">
                {technologies.map((techlogo, index) => {
                    return (
                        <div className="w-6" key={index}>
                            {techlogo}
                        </div>
                    )
                })}
            </div>
            <p className="mb-10 font-extralight text-sm">{description}</p>
            <div className="flex flex-row gap-2 text-sm ">
                {urlDeploy &&
                    <a href={urlDeploy} target="_blank" id='button' className="flex flex-row gap-1 items-center bg-primary text-disabled-light px-5 py-3 rounded-md cursor-pointer hover:text-white hover:animate-bounce">
                        <UrlIcon />
                        <span>Live</span>
                    </a>}
                <a href={urlGithub} target="_blank" id='button' className="flex flex-row gap-1 items-center bg-primary text-disabled-light px-5 py-3 rounded-md cursor-pointer hover:text-white hover:animate-bounce">
                    <GithubIcon />
                    <span>Source</span>
                </a>
            </div>

        </article>
    )
}
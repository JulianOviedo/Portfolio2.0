import { GithubIcon, UrlIcon } from "../assets/Icons/Icons";

interface ProyectCardProps {
  img: string;
  title: string;
  description: string;
  technologies: JSX.Element[];
  urlGithub?: string;
  urlDeploy?: string;
  isCurrent?: boolean;
  isPrivate?: boolean;
}

export const ProyectCard = ({
  img,
  title,
  description,
  technologies,
  urlGithub,
  urlDeploy,
  isCurrent = false,
  isPrivate = false,
}: ProyectCardProps) => {
  return (
    <article className="h-full w-full shadow-md rounded bg-white dark:bg-bg-dark-prycard p-4 mt-10 lg:mt-0 lg:max-w-[600px] flex flex-col">
      <div className="flex-1">
        <img
          src={img}
          alt={title}
          className="rounded w-full h-[190px] shadow-xl object-cover object-top"
        ></img>
        <div className="flex items-center gap-2 mt-4 mb-2">
          <h4 className="font-bold text-xl">{title}</h4>
          {isCurrent && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded">
              Current
            </span>
          )}
          {isPrivate && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Private
            </span>
          )}
        </div>
        <hr className="w-20 h-1 bg-primary mt-3 " />
        <div className="mb-8 mt-4 flex flex-row gap-2 flex-wrap">
          {technologies.map((techlogo, index) => (
            <div className="w-6" key={index}>
              {techlogo}
            </div>
          ))}
        </div>
        <p className="mb-10 font-extralight text-sm lg:mb-0 lg:h-auto dark:text-disabled">
          {description}
        </p>
      </div>
      <div className="flex flex-row gap-2 text-sm mt-auto pt-4">
        {urlDeploy && (
          <a
            href={urlDeploy}
            target="_blank"
            id="button"
            className="flex flex-row gap-1 items-center bg-primary text-disabled-light px-5 lg:px-10 py-3 rounded-md cursor-pointer hover:text-white"
          >
            <UrlIcon />
            <span>Live</span>
          </a>
        )}
        {urlGithub && !isPrivate && (
          <a
            href={urlGithub}
            target="_blank"
            className="flex flex-row gap-1 items-center bg-primary text-disabled-light px-5 lg:px-10 py-3 rounded-md cursor-pointer hover:text-white"
          >
            <GithubIcon />
            <span>Source</span>
          </a>
        )}
      </div>
    </article>
  );
};

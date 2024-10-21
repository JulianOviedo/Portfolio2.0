import { ExpressLogo, GraphQLIcon } from "../assets/Icons/Icons";
import { NodeLogo } from "../assets/Icons/Icons";
import { MaterialUILogo } from "../assets/Icons/Icons";
import { MySQLLogo } from "../assets/Icons/Icons";
import { MongoLogo } from "../assets/Icons/Icons";
import { NextLogo } from "../assets/Icons/Icons";
import {
  CSSIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactLogo,
  TailwindIcon,
  TypescriptIcon,
} from "../assets/Icons/Icons";

export const Logos = () => {
  const logos = [
    { logo: <HtmlIcon />, description: "HTML5" },
    { logo: <CSSIcon />, description: "CSS3" },
    { logo: <TailwindIcon />, description: "Tailwind CSS" },
    { logo: <JavascriptIcon />, description: "JavaScript" },
    { logo: <TypescriptIcon />, description: "TypeScript" },
    { logo: <ReactLogo />, description: "React.js" },
    { logo: <NextLogo />, description: "Next.js" },
    { logo: <NodeLogo />, description: "Node.js" },
    { logo: <ExpressLogo />, description: "Express.js" },
    { logo: <MongoLogo />, description: "MongoDB" },
    { logo: <MySQLLogo />, description: "MySQL" },
    { logo: <MaterialUILogo />, description: "Material-UI" },
    { logo: <GraphQLIcon />, description: "GraphQL" },
  ];

  return (
    <>
      {logos.map(({logo, description}, index) => (
        <div key={index} className="relative group w-16 lg:w-[84px] hover:scale-110 transition-all duration-300">
          {logo}
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-black dark:text-white text-xs rounded p-1 top-24 left-1/2 transform -translate-x-1/2 text-center">
            {description}
          </span>
        </div>
      ))}
    </>
  );
};

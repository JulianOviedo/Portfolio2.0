import { JobExperienceIcon } from "../assets/Icons/Icons"

interface ExperienceItemProps {
    title: string;
    latest?: boolean;
    time: string;

}

export const ExperienceItem = ({ title, latest, time }: ExperienceItemProps) => {
    return (
        <li className="mb-20 ml-14">
            <JobExperienceIcon />
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title} {latest && <span className="bg-primary text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">Latest</span>}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-disabled dark:text-gray-500">{time}</time>
        </li>
    )
}
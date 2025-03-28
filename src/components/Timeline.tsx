import { ExperienceItem } from "./ExperienceItem"

export const Timeline = () => {
    return (

        <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-40 md:ml-20">
            <ExperienceItem title="Frontend Software developer at Solvd inc." time="Since September 2023 - Present" latest={true} />
            <ExperienceItem title="Freelancer Software Developer at Upwork" time="November 2023 - Present" latest={true} />
            <ExperienceItem title="React Javascript Intern at Solvd inc." time="March 2021 - September 2023" />
            <ExperienceItem title="Accountant at Centro de Estudios Filosoficos y Teologicos" time="August 2020 - June 2021" />
        </ol>

    )
}
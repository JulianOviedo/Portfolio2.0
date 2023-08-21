import { ExperienceItem } from "./ExperienceItem"

export const Timeline = () => {
    return (

        <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-40">
            <ExperienceItem title="Frontend Software developer at Solvd inc." time="Since January 2022" latest={true} />
            <ExperienceItem title="React Javascript Intern at Solvd inc." time="June 2022 - December 2022" />
            <ExperienceItem title="Accountant at Centro de Estudios Filosoficos y Teologicos" time="August 2021 - January 2022" />
        </ol>

    )
}
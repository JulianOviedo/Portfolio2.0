import { GithubDarkIcon, InstragramIcon, LinkedinIcon } from "../assets/Icons/Icons"

export const SocialMedia = () => {

    const icons = [<LinkedinIcon />, <GithubDarkIcon />, <InstragramIcon />]
    const hrefs = ['https://www.linkedin.com/in/julian-oviedo-17b605136/', 'https://github.com/JulianOviedo', 'https://www.instagram.com/julian.oviedo.7/']

    return (
        <>
            {icons.map((icon, idx) => (
                <div className="w-8 hover:scale-110" id="button" key={idx}>
                    <a href={hrefs[idx]}>{icon}</a>
                </div>
            ))}
        </>
    )
}
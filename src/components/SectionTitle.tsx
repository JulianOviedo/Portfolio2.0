export const SectionTitle = ({children}: any) => {
    return (
        <>
            <h1 className="font-extrabold text-5xl">{children}</h1>
            <hr className="w-40 h-1 bg-primary mt-3 "/>
        </>
    )
}
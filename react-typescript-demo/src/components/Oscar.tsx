type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <h2>{props.children}</h2>
}
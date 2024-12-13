export default function Item(props: {name: string, description: string}) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </>
    )
}
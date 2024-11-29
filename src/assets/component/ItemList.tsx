export default function ItemList(props: {name: string, description: string}) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </>
    )
}
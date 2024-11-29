export default function ButtonComponent() {
    const handleClick = () => {
        alert('Click me!')
    }
    return (
        <>
            <button onClick={handleClick}></button>
        </>
    )
}
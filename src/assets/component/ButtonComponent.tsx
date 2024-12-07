export function ButtonComponent(props:any) {
    const handleClick = () => {
        let newValue = props.count;

        if (props.children === 'Add') {
            newValue = newValue + 1;
        } else {
            newValue = newValue - 1;
        }

        props.myClick(newValue);
    }

    return (
        <button onClick={handleClick}>{props.children}</button>
    )
}
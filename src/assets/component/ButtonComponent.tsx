import {ReactNode} from "react";

export default function ButtonComponent(props: {children: ReactNode, myClick: any}) {

    return (
        <>
            <button onClick={() => {props.myClick(props.children)}}>{props.children}</button>
        </>
    )

}
import React from "react";

function ListCom(props){
    const {items} = props;
    return(
        <ul>
            {items?.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListCom;
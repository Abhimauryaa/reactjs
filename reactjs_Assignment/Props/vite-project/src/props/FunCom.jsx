import React from "react";
import ListCom from "./ListCom";

function FunCom(){
    const items = ["Item1", "Item2", "Item3"];

    return (
        <div>
            <h2>List of Item</h2>
            <ListCom items = {items}/>
        </div>
    )
}


export default FunCom;
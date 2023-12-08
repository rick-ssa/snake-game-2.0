import React from "react";
import "./styles.css"
import { size } from "../../enums/Size";
import IFood from "../../models/IFood";

const Food = ({left, top, visible}:IFood) => {
    if(!visible) {
        return null
    }
    
    return (
        <div 
            className="game_food" 
            style={{
                width: size.SNAKE_BODY + 'px', 
                height: size.SNAKE_BODY + 'px',
                left: left + 'px',
                top: top + 'px',
            }}
        />
    )
}

export default Food
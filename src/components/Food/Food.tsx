import React from "react";
import "./styles.css"
import { size } from "../../enums/Size";

interface IFoodProps {
    left: number
    top: number
    visible?: boolean
}

const Food = ({left, top, visible}:IFoodProps) => {
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
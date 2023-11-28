import { keyboardArrows } from "../enums/KeyboardArrows"
import { TPath } from "../models/TPath"

const getPath = (key:string):TPath|undefined => {
    const arrayArrows = [
        keyboardArrows.ARROW_DOWN.toString(),
        keyboardArrows.ARROW_LEFT.toString(),
        keyboardArrows.ARROW_RIGHT.toString(),
        keyboardArrows.ARROW_UP.toString(),
    ]

    if(arrayArrows.includes(key)) {
        switch (key) {
            case keyboardArrows.ARROW_DOWN.toString():
                return {arrow: keyboardArrows.ARROW_DOWN, direction: 'vertical'}
            case keyboardArrows.ARROW_LEFT.toString():
                return {arrow: keyboardArrows.ARROW_LEFT, direction: 'horizontal'}
            case keyboardArrows.ARROW_RIGHT.toString():
                return {arrow: keyboardArrows.ARROW_RIGHT, direction: 'horizontal'}
            case keyboardArrows.ARROW_UP.toString():
                return {arrow: keyboardArrows.ARROW_UP, direction: 'vertical'}
        }
    }

    return undefined
}

export default getPath


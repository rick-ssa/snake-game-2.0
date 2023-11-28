import { keyboardArrows } from "../enums/KeyboardArrows"

type TVerticalDirection = {
    direction: 'vertical',
    arrow: keyboardArrows.ARROW_UP | keyboardArrows.ARROW_DOWN
}

type THorizontalDirection = {
    direction: 'horizontal',
    arrow: keyboardArrows.ARROW_RIGHT | keyboardArrows.ARROW_LEFT
}

export type TPath = TVerticalDirection | THorizontalDirection
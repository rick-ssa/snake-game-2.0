import { growSnake } from "../../store/gamePartsSlice"
import { useAppDispatch, useAppSelector } from "../redux"

export const useFoodCollision = () => {
    const food = useAppSelector(state => state.gameParts.food)
    const dispatch = useAppDispatch()

    return () => {
        if(food.visible) {
            dispatch(growSnake())
        }
    }
}
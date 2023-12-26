import { setGameStatus } from "../../store/gameControllerSlice"
import { growSnake, setFood } from "../../store/gamePartsSlice"
import { useAppDispatch, useAppSelector } from "../redux"

export const useFoodCollision = () => {
    const food = useAppSelector(state => state.gameParts.food)
    const dispatch = useAppDispatch()

    return () => {
        if(food.visible) {
            dispatch(growSnake())
            dispatch(setFood({...food, visible: false}))
        }
    }
}

export const useSelfCollision = () => {
    const dispatch = useAppDispatch()
    return ()=> {
        dispatch(setGameStatus('over'))
    }
}
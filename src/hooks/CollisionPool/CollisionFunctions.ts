import { addScore, setGameStatus } from "../../store/gameControllerSlice"
import { growSnake, setFace, setFood } from "../../store/gamePartsSlice"
import { useAppDispatch, useAppSelector } from "../redux"

export const useFoodCollision = () => {
    const food = useAppSelector(state => state.gameParts.food)
    const dispatch = useAppDispatch()

    return () => {
        if(food.visible) {
            dispatch(growSnake())
            dispatch(setFace(true))
            dispatch(setFood({...food, visible: false}))
            dispatch(addScore(10))
        }
    }
}

export const useSelfCollision = () => {
    const dispatch = useAppDispatch()
    return ()=> {
        dispatch(setGameStatus('over'))
    }
}
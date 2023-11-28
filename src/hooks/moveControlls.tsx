import { useAppDispatch } from "../hooks/redux"
import { TGameStatus } from "../models/TGameStatus"
import { setGameStatus } from "../store/gameControllerSlice"

const useMoveControls = () => {
    return (gameStatus:TGameStatus)=>{
        const dispatch = useAppDispatch()
        dispatch(setGameStatus(gameStatus))
    }
}

export default useMoveControls
import { useRestart } from "../../hooks/moveControlls"
import "./styles.css"

const GameOverDialog = () => {
    const restart = useRestart()
    return (
        <div 
            aria-modal = "true"
            role="dialog"
            aria-labelledby="gameover_modal_dialog"
            className="gameover_container"
        >
            <div className="gameover_dialog">
                <h2>Game Over</h2>
                <button onClick={restart}>Restart</button>
            </div>
        </div>
    )
}

export default GameOverDialog
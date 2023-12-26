import ControllButton, { IControlButton } from "./controllButton/ControlButton";
import "./styles.css"

const GameControll = ({buttons}:{buttons:React.ReactElement[]}) => {
    return (
        <div className="game_controlls_container">
            <div className="game_controlls">
                {buttons}
            </div>
        </div>
    )
}

export default GameControll
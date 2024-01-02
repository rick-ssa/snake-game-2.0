import ScoreField from "./ScoreField/ScoreField";
import "./styles.css"

const GameControll = ({buttons}:{buttons:React.ReactElement[]}) => {
    return (
        <div className="game_controlls_container">
            <div className="game_controlls">
                {buttons}
                <ScoreField />
            </div>
        </div>
    )
}

export default GameControll
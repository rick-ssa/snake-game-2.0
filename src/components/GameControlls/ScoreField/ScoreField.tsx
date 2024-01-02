import { useAppSelector } from '../../../hooks/redux'
import './styles.css'

const ScoreField = () => {
    const score = useAppSelector(state => state.gameController.score)
    return (
        <span className="score_field" >
            {score}
        </span>
    )
}

export default ScoreField
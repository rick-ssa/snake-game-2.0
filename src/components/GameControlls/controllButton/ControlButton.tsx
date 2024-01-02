import { IconType } from "react-icons"
import "./styles.css"

export interface IControlButton {
    icon: ()=>IconType
    disabled?: boolean
    onClick: () => void
}

const ControllButton = ({icon, disabled = false, onClick}: IControlButton) => {
    const Icon = icon()
    return (
        <button className="controll_button" disabled={disabled} onClick = {onClick}>
            <Icon />
        </button>
    )
}

export default ControllButton
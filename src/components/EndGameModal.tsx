import { GameContext } from "../context/gameContext"
import { useContext } from "react"
import ModalMultiPlayers from "./ModalMultiPlayer"
import ModalSinglePlayer from "./ModalSinglePlayer"

const EndGameModal = () => {
    const { isMultiPlayersGame } = useContext(GameContext)

    return (
        isMultiPlayersGame ? <ModalMultiPlayers /> : <ModalSinglePlayer />
    )
}

export default EndGameModal
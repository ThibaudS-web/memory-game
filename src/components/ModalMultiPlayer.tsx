import { createPortal } from "react-dom"
import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import PlayerLeaderBoard from "./PlayerLeaderBoard"

import ButtonGroup from "./ButtonGroup"
import calculateWinner from "../utils/LeaderScoreUtils"


const ModalMultiPlayers = () => {
    const { scoreMultiPlayers } = useContext(GameContext)

    const { isPlayerWinner, winnerTitle, clonedScores } = calculateWinner(scoreMultiPlayers!)

    const generatePlayersInLeaderBoard = () => {
        return clonedScores.map((player, index) => {
            const winner = `${player.name} (Winner!)`

            return <PlayerLeaderBoard isWinner={isPlayerWinner(player)} key={index} label={isPlayerWinner(player) ? winner : player.name} score={player.score} />
        })
    }

    return (
        createPortal(<div className="w-full h-full absolute flex justify-center items-center z-10 bg-black">
            <div className="w-modal md:w-modal-tablet rounded-3xl bg-white flex flex-col items-center px-14 py-14 gap-4 sm:px-8 sm:py-8">
                <h1 className="text-5xl sm:text-2xl	 text-bg-startmenu font-bold">{winnerTitle}</h1>
                <p className="text-lg sm:text-sm text-text-primary font-bold mb-5">Game over! Here are the results…</p>
                {generatePlayersInLeaderBoard()}
                <ButtonGroup />
            </div>
        </div>, document.body)
    )
}

export default ModalMultiPlayers
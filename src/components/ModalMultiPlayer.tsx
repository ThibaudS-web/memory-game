import { createPortal } from "react-dom"
import Button from "./Button"
import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import PlayerLeaderBoard from "./PlayerLeaderBoard"
import { Player } from "../types/MultiPlayers"


const ModalMultiPlayers = () => {
    const { newGame, restartGame, scoreMultiPlayers } = useContext(GameContext)

    const copyScoreMultiplayer = [...scoreMultiPlayers!]
    const scoreSortedByScore = copyScoreMultiplayer?.sort((a, b) => b.score - a.score)

    const highestScorePlayers = scoreSortedByScore.filter((player) => player.score === scoreSortedByScore[0].score)

    console.log(highestScorePlayers)

    const winnerTitle = highestScorePlayers.length > 1 ? "It's a tie!" : `${scoreSortedByScore[0].name} Wins!`

    const isPlayerWinner = (playerMatch: Player) => {
        const playerFound = highestScorePlayers.find((player) => player.name === playerMatch.name)
        return playerFound !== undefined
    }

    const generatePlayersInLeaderBoard = () => {
        return scoreSortedByScore.map((player, index) => {
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
                <div className="flex justify-center w-full mt-10 gap-3.5 sm:flex-col mb-5">
                    <Button className="btn-nav bg-btn-primary text-[#FCFCFC] hover:bg-btn-primary-hover sm:text-lg" handleClick={restartGame}>
                        Restart
                    </Button>
                    <Button className="btn-nav bg-btn-secondary text-[#304859] hover:bg-btn-secondary-hover sm:text-lg" handleClick={newGame}>
                        Setup New Game
                    </Button>
                </div>
            </div>
        </div>, document.body)
    )
}

export default ModalMultiPlayers
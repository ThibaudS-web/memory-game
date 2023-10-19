import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import PlayerScoreMulti from "./PlayerScoreMulti"

const PlayersScoreWrapper = () => {
    const { scoreMultiPlayers } = useContext(GameContext)

    return (
        <div className="flex justify-center gap-6 w-full mt-[6.4375rem] px-header&footer smartphone:px-0 xxsm:w-[95%] mb-3">
            {scoreMultiPlayers?.map((player, index) =>
                <PlayerScoreMulti label={`Player ${index + 1}`} isActive={player.currentTurn} score={player.score} key={index} />
            )}
        </div>
    )
}

export default PlayersScoreWrapper
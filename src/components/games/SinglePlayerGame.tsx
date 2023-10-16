import { GameContext } from "../../context/gameContext"
import { useContext } from 'react'
import Tiles from "./Tiles"
import Timer from "./Timer"

const SinglePlayerGame = () => {
  const { scoreSinglePlayer } = useContext(GameContext)

  const { move } = scoreSinglePlayer

  return (
    <>
      <Tiles />
      <div className="flex justify-center gap-6 w-full mt-16">
        <Timer />
        <div className="bg-btn-secondary font-bold text-text-primary w-wrapper-score&timer h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6">
          Moves
          <span className="text-tile-bg-notchecked text-3xl">
            {move}
          </span>
        </div>
      </div>

    </>
  )
}

export default SinglePlayerGame
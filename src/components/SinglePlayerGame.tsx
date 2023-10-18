import { GameContext } from "../context/gameContext"
import { useContext } from 'react'
import Tiles from "./Tiles"
import Timer from "./Timer"

const SinglePlayerGame = () => {
  const { scoreSinglePlayer } = useContext(GameContext)

  const { move } = scoreSinglePlayer

  return (
    <>
      <Tiles />
      <div className="flex justify-center gap-6 w-full mt-[6.4375rem] px-header&footer smartphone:px-0 xxsm:w-[95%]">
        <Timer />
        <div className="bg-btn-secondary font-bold text-text-primary w-wrapper-score&timer h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6 smartphone:flex-col smartphone:py-2 smartphone:px-0 smartphone:text-base smartphone:w-full" >
          Moves
          <span className="text-tile-bg-notchecked text-3xl smartphone:text-2xl">
            {move}
          </span>
        </div>
      </div>
    </>
  )
}

export default SinglePlayerGame
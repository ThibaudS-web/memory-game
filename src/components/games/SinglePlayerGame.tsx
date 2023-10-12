import { GameContext } from "../../context/gameContext"
import { useContext } from 'react'
import Tiles from "./Tiles"

const SinglePlayerGame = () => {
  const { scoreSinglePlayer } = useContext(GameContext)
  const { move } = scoreSinglePlayer

  return (
    <>
      <Tiles />
      <div>Move: {move}</div>
    </>
  )
}

export default SinglePlayerGame
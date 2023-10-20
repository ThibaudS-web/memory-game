import { useContext, useEffect } from "react"
import { GameContext } from "../context/gameContext"
import Header from "./Header"
import MainContent from "./MainContent"
import { setBodyBackgroundClass } from "../utils/dynamic-styles/body"
import EndGameModal from "./EndGameModal"

const LayoutGame = () => {
    const {
        generateTiles,
        scoreSinglePlayer,
        setIsTimerRunning,
        isGameOver,
        setIsGameOver,
        tiles,
        scoreMultiPlayers,
    } = useContext(GameContext)

    const { move } = scoreSinglePlayer

    setBodyBackgroundClass("game")

    useEffect(() => {
        generateTiles()
    }, [])

    useEffect(() => {
        const allTilesAreMatched = tiles.every(tile => tile.matched)
        if (allTilesAreMatched) {
            setIsTimerRunning(false)
            setIsGameOver(true)
        }
    }, [move, scoreMultiPlayers])

    return (
        <>
            {isGameOver ? <EndGameModal /> : null}
            <div className="page-wrapper xxsm:w-full">
                <Header />
                <MainContent />
            </div>
        </>
    )
}

export default LayoutGame
import { useContext, useEffect } from "react"
import { GameContext } from "../context/gameContext"
import ModalSinglePlayer from "./ModalSinglePlayer"
import Header from "./Header"
import MainContent from "./MainContent"
import { setBodyBackgroundClass } from "../utils/dynamic-styles/body"

const LayoutGame = () => {
    const {
        generateTiles,
        scoreSinglePlayer,
        setIsTimerRunning,
        isGameOver,
        setIsGameOver,
        tiles,
        scoreMultiPlayers
    } = useContext(GameContext)

    const { move } = scoreSinglePlayer

    setBodyBackgroundClass("game")

    useEffect(() => {
        generateTiles()
    }, [])

    useEffect(() => {
        const allTilesAreMatched = tiles.every(tile => tile.matched)
        console.log(scoreMultiPlayers)
        if (allTilesAreMatched) {
            setIsTimerRunning(false)
            setIsGameOver(true)
        }
    }, [move, scoreMultiPlayers])

    return (
        <>
            {isGameOver ? <ModalSinglePlayer /> : null}
            <div className="page-wrapper xxsm:w-full">
                <Header />
                <MainContent />
            </div>
        </>
    )
}

export default LayoutGame
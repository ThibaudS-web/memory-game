import { useContext, useEffect } from "react"
import { GameContext } from "../context/gameContext"
import ModalSinglePlayer from "./ModalSinglePlayer"
import Header from "./Header"
import MainContent from "./MainContent"

const LayoutGame = () => {
    const {
        generateTiles,
        scoreSinglePlayer,
        setIsTimerRunning,
        isGameOver,
        setIsGameOver,
        tiles
    } = useContext(GameContext)

    const { move } = scoreSinglePlayer

    useEffect(() => {
        generateTiles() 
    }, [])

    useEffect(() => {
        const allTilesAreMatched = tiles.every(tile => tile.matched)

        if (allTilesAreMatched) {
            setIsTimerRunning(false)
            setIsGameOver(true)
        }
    }, [move])

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
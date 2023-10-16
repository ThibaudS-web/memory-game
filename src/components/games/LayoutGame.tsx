import { useContext, useEffect } from "react"
import Button from "../Button"
import Logo from "../svg/Logo"
import { GameContext } from "../../context/gameContext"
import SinglePlayerGame from "./SinglePlayerGame"
import MultiplayersGame from "./MultiplayersGame"

const LayoutGame = () => {
    const {
        newGame,
        isMultiPlayersGame,
        restartGame,
        generateTiles,
        scoreSinglePlayer,
        setIsTimerRunning,
        numbersOfTiles
    } = useContext(GameContext)

    const { move } = scoreSinglePlayer

    useEffect(() => {
        generateTiles()
    }, [])

    useEffect(() => {
        if (move === numbersOfTiles) {
            setIsTimerRunning(false)
        }
    }, [move])


    return (
        <>
            <div className="page-wrapper">
                <header className="w-full flex justify-between items-center my-16">
                    <Logo fill="#152938" />
                    <nav className="flex gap-6">
                        <Button className="btn-nav bg-btn-primary text-[#FCFCFC] hover:bg-btn-primary-hover" handleClick={restartGame}>
                            Restart
                        </Button>
                        <Button className="btn-nav bg-btn-secondary text-[#304859] hover:bg-btn-secondary-hover" handleClick={newGame}>
                            New Game
                        </Button>
                    </nav>
                </header>
                <main className="w-full flex flex-col items-center">
                    {isMultiPlayersGame ?
                        <MultiplayersGame /> : <SinglePlayerGame />
                    }
                </main>
            </div>
        </>
    )
}

export default LayoutGame
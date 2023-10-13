import { useContext } from "react"
import Button from "../Button"
import Logo from "../svg/Logo"
import { GameContext } from "../../context/gameContext"
import SinglePlayerGame from "./SinglePlayerGame"
import MultiplayersGame from "./MultiplayersGame"

const LayoutGame = () => {
    const { newGame, isMultiPlayersGame, restartGame } = useContext(GameContext)
    
    return (
        <>
            <div className="page-wrapper">
                <header className="w-full flex justify-between my-16">
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
                <main>
                    {isMultiPlayersGame ?
                        <MultiplayersGame /> : <SinglePlayerGame />
                    }
                </main>
            </div>
        </>
    )
}

export default LayoutGame
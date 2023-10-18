import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import useWidthScreen from "../hooks/useWidthScreen"
import Button from "./Button"
import Logo from "./svg/Logo"


const Header = () => {
    const {
        newGame,
        restartGame
    } = useContext(GameContext)

    const windowWidth = useWidthScreen()
    const isMenuButtonDisplayed = windowWidth <= 600

    return (
        <header className="w-full flex justify-between items-center my-16 px-header&footer tablet:mb-0 tablet:mt-10 smartphone:px-0 smartphone:w-[90%] xxsm:w-[95%] ">
            <Logo className="smartphone:scale-75 origin-left" fill="#152938" />
            {isMenuButtonDisplayed ?
                (
                    <Button className="rounded-full font-bold p-0 bg-btn-primary text-[#FCFCFC]  hover:bg-btn-secondary-hover text-base smartphone:w-20 smartphone:h-10" handleClick={newGame}>
                        Menu
                    </Button>
                )
                :
                (
                    <nav className="flex gap-6">
                        <Button className="btn-nav bg-btn-primary text-[#FCFCFC] hover:bg-btn-primary-hover" handleClick={restartGame}>
                            Restart
                        </Button>
                        <Button className="btn-nav bg-btn-secondary text-[#304859] hover:bg-btn-secondary-hover" handleClick={newGame}>
                            New Game
                        </Button>
                    </nav>
                )
            }
        </header>
    )
}

export default Header
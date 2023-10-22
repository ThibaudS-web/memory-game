import { createPortal } from "react-dom"
import Button from "./Button"
import { useContext } from "react"
import { GameContext } from "../context/gameContext"

const MenuModal = ({ handleClick }: { handleClick: () => void }) => {
    const { restartGame, newGame } = useContext(GameContext)

    return (
        createPortal(<div className="w-full h-full absolute flex justify-center items-center z-10 bg-black">
            <div className="bg-white rounded-3xl flex flex-col items-center w-10/12 gap-3.5 p-6">
                <Button
                    className="btn-nav bg-btn-primary text-[#FCFCFC]"
                    handleClick={() => {
                    restartGame()
                    handleClick()
                }}>
                    Restart
                </Button>
                <Button
                    className="btn-nav bg-btn-secondary text-[#304859]"
                    handleClick={newGame}
                >
                    New Game
                </Button>
                <Button
                    className="btn-nav bg-btn-secondary text-[#304859]"
                    handleClick={handleClick}
                >
                    Resume Game
                </Button>
            </div>
        </div >, document.body)
    )
}

export default MenuModal
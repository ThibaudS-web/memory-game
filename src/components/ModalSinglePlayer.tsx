import { createPortal } from "react-dom"
import Button from "./Button"
import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import { convertSecondsToMinutes } from "../utils/convertSecondsToMinutes"

const ModalSinglePlayer = () => {
    const { newGame, restartGame, scoreSinglePlayer } = useContext(GameContext)

    const { move, timer } = scoreSinglePlayer

    return (
        createPortal(<div className="w-full h-full absolute flex justify-center items-center z-10 bg-black">
            <div className="w-[654px] h-[510px] rounded-3xl bg-white flex flex-col items-center px-14 py-14 gap-8">
                <h1 className="text-5xl text-bg-startmenu font-bold ">You did it!</h1>
                <p className="text-lg text-text-primary font-bold">Game over! Here’s how you got on…</p>
                <div className="w-full flex flex-col gap-5">
                    <div className="bg-btn-secondary font-bold text-text-primary  h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6">
                        Time Elapsed
                        <span className="text-tile-bg-notchecked text-3xl">
                            {convertSecondsToMinutes(timer)}
                        </span>
                    </div>
                    <div className="bg-btn-secondary font-bold text-text-primary  h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6">
                        Moves Taken
                        <span className="text-tile-bg-notchecked text-3xl">
                            {move} Moves
                        </span>
                    </div>
                </div>
                <div className="flex justify-center w-full gap-3.5">
                    <Button className="btn-nav bg-btn-primary text-[#FCFCFC] hover:bg-btn-primary-hover" handleClick={restartGame}>
                        Restart
                    </Button>
                    <Button className="btn-nav bg-btn-secondary text-[#304859] hover:bg-btn-secondary-hover" handleClick={newGame}>
                        Setup New Game
                    </Button>
                </div>
            </div>
        </div>, document.body)
    )
}

export default ModalSinglePlayer
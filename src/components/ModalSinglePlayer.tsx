import { createPortal } from "react-dom"
import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import { convertSecondsToMinutes } from "../utils/convertSecondsToMinutes"
import ButtonGroup from "./ButtonGroup"

const ModalSinglePlayer = () => {
    const { scoreSinglePlayer } = useContext(GameContext)

    const { move, timer } = scoreSinglePlayer

    return (
        createPortal(<div className="w-full h-full absolute flex justify-center items-center z-10 bg-black">
            <div className="w-modal md:w-modal-tablet rounded-3xl bg-white flex flex-col items-center px-14 py-14 gap-9 sm:px-8 sm:py-8 sm:gap-4">
                <h1 className="text-5xl sm:text-2xl	 text-bg-startmenu font-bold ">You did it!</h1>
                <p className="text-lg sm:text-sm text-text-primary font-bold">Game over! Here’s how you got on…</p>
                <div className="w-full flex flex-col gap-4 sm:gap-3">
                    <div className="bg-btn-secondary font-bold text-text-primary h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6 sm:text-sm sm:h-12 xsm:px-3">
                        Time Elapsed
                        <span className="text-tile-bg-notchecked text-3xl sm:text-xl xsm:text-lg">
                            {convertSecondsToMinutes(timer)}
                        </span>
                    </div>
                    <div className="bg-btn-secondary font-bold text-text-primary  h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6 sm:py-3 sm:text-sm sm:h-12 xsm:px-3">
                        Moves Taken
                        <span className="text-tile-bg-notchecked text-3xl sm:text-xl xsm:text-lg">
                            {move} Moves
                        </span>
                    </div>
                </div>
                <ButtonGroup />
            </div>
        </div>, document.body)
    )
}

export default ModalSinglePlayer
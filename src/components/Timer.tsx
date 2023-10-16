import { useContext, useEffect } from "react"
import { GameContext } from "../context/gameContext"
import { convertSecondsToMinutes } from "../utils/convertSecondsToMinutes"

const Timer = () => {
    const {
        scoreSinglePlayer,
        isTimerRunning,
        startTimer,
        stopTimer
    } = useContext(GameContext)

    const { timer } = scoreSinglePlayer

    useEffect(() => {
        isTimerRunning ? startTimer() : stopTimer()
    }, [isTimerRunning])



    return (
        <div className="bg-btn-secondary font-bold text-text-primary w-wrapper-score&timer h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6">
            Timer
            <span className="text-tile-bg-notchecked text-3xl">
                {convertSecondsToMinutes(timer)}
            </span>
        </div>
    )
}

export default Timer
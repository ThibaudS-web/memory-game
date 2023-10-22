import { winnerStyles } from "../utils/dynamic-styles/PlayerScoreLeaderBoard"

const PlayerLeaderBoard = ({ label, score, isWinner }: { label: string, score: number, isWinner: boolean }) => {

    return (
        <div className={`${winnerStyles(isWinner, true)} w-full font-bold h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6 sm:py-3 sm:text-sm sm:h-12 xsm:px-3`}>
            {label}
            <span className={`${winnerStyles(isWinner)} text-3xl sm:text-xl xsm:text-lg`}>
                {score} Pairs
            </span>
        </div>
    )
}

export default PlayerLeaderBoard
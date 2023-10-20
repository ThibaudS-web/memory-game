const PlayerLeaderBoard = ({ label, score, isWinner }: { label: string, score: number, isWinner: boolean }) => {

    const winnerStyles = (isWinner: boolean, isWrapper?: boolean) => {
        if (isWrapper) {
            if (isWinner) {
                return "bg-bg-startmenu text-btn-text-color"
            } else {
                return "bg-btn-secondary text-text-primary"
            }
        } else {
            if (isWinner) {
                return "text-btn-text-color"
            } else {
                return "text-tile-bg-notchecked"
            }
        }
    }

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
export const winnerStyles = (isWinner: boolean, isWrapper?: boolean) => {
    if (isWrapper) {
        return isWinner
            ? "bg-bg-startmenu text-btn-text-color"
            : "bg-btn-secondary text-text-primary"
    }
    
    return isWinner
        ? "text-btn-text-color"
        : "text-tile-bg-notchecked"
}
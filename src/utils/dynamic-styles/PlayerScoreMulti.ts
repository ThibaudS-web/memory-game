export const distributesStyleIfActive = (isActive: boolean | undefined, isWrapper?: boolean) => {
    if (isWrapper) {
        if (isActive) return (
            "text-btn-text-color bg-btn-primary after:triangle"
        )
        else return (
            "bg-btn-secondary text-text-primary "
        )
    }

    if (!isWrapper) {
        if (isActive) return (
            "text-btn-text-color"
        )
        else return (
            "text-tile-bg-notchecked"
        )
    }
}
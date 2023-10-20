export const distributesStyleIfActive = (isActive: boolean | undefined, isWrapper?: boolean) => {
    if (isWrapper) {
        return isActive
            ? "text-btn-text-color bg-btn-primary after:triangle"
            : "bg-btn-secondary text-text-primary"
    }

    return isActive
        ? "text-btn-text-color"
        : "text-tile-bg-notchecked"
}
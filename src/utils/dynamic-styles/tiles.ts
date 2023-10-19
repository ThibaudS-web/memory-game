export const selectWrapperSize = (gridSize: "small" | "large") => {
    if (gridSize === "small") return "w-wrapper-tile-small tiles-wrapper-small"
    if (gridSize === "large") return "w-wrapper-tile-large tiles-wrapper-large"
}
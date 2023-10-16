import { Tile } from "../../types/tile"

export const selectTileBackground = (checked: boolean, tile: Tile) => {
    if (checked && !tile.matched) return "bg-btn-primary"
    if (!checked && !tile.matched) return "bg-tile-bg-notchecked  hover:bg-title-hover"
    if (tile.matched) return "bg-tile-bg-matched"
}

export const selectTileSize = (gridSize: "small" | "large") => {
    if (gridSize === "small") return "w-tile-large h-tile-large text-tile-large"
    if (gridSize === "large") return "w-tile-small h-tile-small text-tile-small"
}
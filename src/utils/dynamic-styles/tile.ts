import { Tile } from "../../types/tile"

export const selectTileBackground = (checked: boolean, tile: Tile) => {
    if (checked && !tile.matched) return "bg-btn-primary"
    if (!checked && !tile.matched) return "bg-tile-bg-notchecked hover:tile-hover"
    if (tile.matched) return "bg-tile-bg-matched"
}

export const selectTileSize = (gridSize: "small" | "large") => {
    if (gridSize === "small") return "w-tile-large h-tile-large text-tile-large smartphone:text-tile-large-smartphone smartphone:w-tile-smartphone smartphone:h-tile-smartphone xsm:w-tile-xsm xsm:h-tile-xsm"
    if (gridSize === "large") return "w-tile-small h-tile-small text-tile-small smartphone:text-2xl smartphone:w-[2.93rem] smartphone:h-[2.93rem] xxsm:w-[2.5rem] xxsm:h-[2.5rem]"
}
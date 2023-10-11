import { ReactNode, useContext, useState } from "react"
import { GameContext } from "../../context/gameContext"

const Tile = ({ children }: { children: ReactNode }) => {
    const { gameOptions } = useContext(GameContext)
    const { gridSize } = gameOptions

    const [checked, setIsChecked] = useState(false)

    const selectTileBackground = (checked: boolean) => {
        if (checked) return
    }

    const selectTileSize = (gridSize: "small" | "large") => {
        if (gridSize === "small") return "w-tile-large h-tile-large text-tile-large"
        if (gridSize === "large") return "w-tile-small h-tile-small text-tile-small"
    }

    return (
        <div className={`bg-tile-bg-notchecked flex justify-center items-center font-bold hover:bg-title-hover rounded-full text-[#FCFCFC] cursor-pointer ${selectTileSize(gridSize)}`}>{children}</div>
    )
}

export default Tile
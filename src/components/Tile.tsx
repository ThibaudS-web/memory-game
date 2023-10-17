import { ReactNode, useContext, useState, useEffect } from "react"
import { GameContext } from "../context/gameContext"
import { Tile as TileType } from "../types/tile"
import { selectTileBackground, selectTileSize } from "../utils/dynamic-styles/tile"


const Tile = ({ children, tile }: { children: ReactNode, tile: TileType }) => {
    const {
        gameOptions,
        setCheckedTiles,
        checkedTiles,
        isTimerRunning,
        setIsTimerRunning,
    } = useContext(GameContext)

    const { gridSize } = gameOptions

    const [checked, setIsChecked] = useState(false)
    const [isSuspended, setisSuspended] = useState(false)

    useEffect(() => {
        if (checkedTiles.length === 2) {
            if (checkedTiles[0].id !== checkedTiles[1].id) {
                setisSuspended(true)
                setTimeout(() => {
                    setIsChecked(false)
                    setisSuspended(false)
                }, 1000)
            }
        }
    }, [checkedTiles])

    const handleClickTile = () => {
        if (tile.matched || checked || isSuspended) return
        if (!isTimerRunning) setIsTimerRunning(true)
        setIsChecked(true)
        setCheckedTiles((prevCheckedTiles) => [...prevCheckedTiles, tile])
    }

    return (
        <div
            onClick={handleClickTile}
            className={`${selectTileBackground(checked, tile)} ${selectTileSize(gridSize)} flex justify-center items-center font-bold rounded-full text-[#FCFCFC] cursor-pointer`}
        >
            {checked || tile.matched ? children : null}
        </div>
    )
}

export default Tile
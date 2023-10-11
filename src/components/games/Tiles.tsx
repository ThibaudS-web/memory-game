import { useContext, useEffect } from 'react'
import { GameContext } from "../../context/gameContext"
import Tile from './Tile'

const Tiles = () => {
    const { gameOptions, generateTiles, tiles } = useContext(GameContext)
    const { gridSize } = gameOptions

    const selectWrapperSize = (gridSize: "small" | "large") => {
        if (gridSize === "small") return "w-wrapper-tile-small"
        if (gridSize === "large") return "w-wrapper-tile-large"
    }

    console.log('gridSize: ', gridSize)

    useEffect(() => {
        generateTiles()
    }, [])


    return (
        <div className={`${selectWrapperSize(gridSize)} w-wrapper-tile-small flex flex-wrap gap-3.5`}>
            {tiles.map((tile, index) => (
                <Tile key={`${index}-${tile.id}`} >
                    {tile.content}
                </Tile>
            ))}
        </div >
    )
}

export default Tiles
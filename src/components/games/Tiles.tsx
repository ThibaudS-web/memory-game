import { useContext, useEffect } from 'react'
import { GameContext } from "../../context/gameContext"
import Tile from './Tile'
import { selectWrapperSize } from '../../utils/dynamic-styles/tiles'

const Tiles = () => {
    const {
        gameOptions,
        tiles,
        generateTiles,
        checkedTiles,
        compareTileValue,
    } = useContext(GameContext)

    const { gridSize } = gameOptions

    useEffect(() => {
        generateTiles()
    }, [])

    useEffect(() => {
        if (checkedTiles.length === 2) {
            compareTileValue(checkedTiles)
        }
    }, [checkedTiles, compareTileValue])

    return (
        <div className={`${selectWrapperSize(gridSize)} flex flex-wrap gap-3.5`}>
            {tiles.map((tile, index) => (
                <Tile tile={tile} key={`${index}-${tile.id}`} >
                    {tile.content}
                </Tile>
            ))}
        </div >
    )
}

export default Tiles
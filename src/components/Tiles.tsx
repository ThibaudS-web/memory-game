import { useContext, useEffect } from 'react'
import { GameContext } from "../context/gameContext"
import Tile from './Tile'
import { selectWrapperSize } from '../utils/dynamic-styles/tiles'

const Tiles = () => {
    const {
        gameOptions,
        tiles,
        checkedTiles,
        compareTileValue,
    } = useContext(GameContext)

    const { gridSize } = gameOptions

    useEffect(() => {
        if (checkedTiles.length === 2) {
            compareTileValue(checkedTiles)
        }
    }, [checkedTiles, compareTileValue])

    return (
        <div className={`${selectWrapperSize(gridSize)} smartphone:items-center smartphone:justify-items-center sm:gap-0 gap-2.5 smartphone:max-w-[327px] smartphone:h-80 mt-28 tablet:mt-40 smartphone:mt-20 smartphone:w-full xxsm:w-[95%] xxsm:mt-14`}>
            {tiles.map((tile) => (
                <Tile tile={tile} key={`${tile.doublonId}-${tile.id}`} >
                    {tile.content}
                </Tile>
            ))}
        </div >
    )
}

export default Tiles
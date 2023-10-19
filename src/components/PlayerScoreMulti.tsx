import { distributesStyleIfActive } from "../utils/dynamic-styles/PlayerScoreMulti"

const PlayerScoreMulti = ({ isActive, label, score }: { isActive?: boolean, label: string, score: number }) => {

    return (
        <div className="flex flex-col items-center gap-4">
            <div className={`${distributesStyleIfActive(isActive, true)} font-bold w-wrapper-score&timer h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6 smartphone:flex-col smartphone:py-2 smartphone:px-0 smartphone:text-base smartphone:w-full relative`} >
                {label}
                <span className={`${distributesStyleIfActive(isActive)} text-3xl smartphone:text-2xl`}>
                    {score}
                </span>
            </div>
            <span className="text-bg-startmenu font-bold text-sm tracking-widest">{isActive ? "CURRENT TURN" : null}</span>
        </div>
    )
}

export default PlayerScoreMulti
export default function ProgressBar ({ duration, minutesLeft, secondsLeft }) {
    return (
        <div className="">
            <div className="overflow-hidden h-4 text-xs flex bg-pink-200">
                <div style={{ width: `${(1 - (secondsLeft / (duration*60)))*100}%` }} className="transition-width transition-1000 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
        </div>
    )
}
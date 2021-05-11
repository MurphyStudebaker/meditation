export default function ProgressBar ({ duration, minutesLeft, secondsLeft }) {
    return (
        <div className="">
            <div className="overflow-hidden h-4 text-xs flex bg-gray-700">
                <div style={{ width: `${(1 - (secondsLeft / (duration*60)))*100}%` }} className="transition-width transition-1000 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-900"></div>
            </div>
        </div>
    )
}
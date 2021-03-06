import { useState } from "react"

export default function NumberSelect ({ selected, onChange }) {
    const [ showTimeOptions, setShowOptions ] = useState(false)
    const timeOptions = [1,3,5,10,15]

    return (
        <div className='flex justify-center items-center'>
            <ul className="flex items-center text-center fadeIn">
                {
                    timeOptions.map(o => (
                        <li className={`${!showTimeOptions && o !== selected ? "hidden fadeOut" : "fadeIn"} px-4 py-2 mx-2 text-center cursor-pointer animated ${selected === o ? "font-bold text-white" : "text-2xl fadeIn text-gray-300"}`} onClick={e => { setShowOptions(!showTimeOptions); onChange(o)} }>{o}</li>
                    ))
                }
            </ul>
        </div>
        
    )
}
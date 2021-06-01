import { useState } from "react"

export default function NumberSelect ({ selected, onChange }) {
    const [ showTimeOptions, setShowOptions ] = useState(false)
    const timeOptions = [1,3,5,10,15]

    return (
        <div className='flex justify-start items-center'>
            <ul className="flex items-center text-center">
                {
                    timeOptions.map((o, i) => (
                        <li key={i} className={`transition hover:text-white duration-300 px-4 py-2 mx-2 text-center cursor-pointer rounded-2xl ${selected === o ? "font-bold text-white bg-transparent" : "text-2xl text-gray-300 bg-gray-900"}`} onClick={e => { setShowOptions(!showTimeOptions); onChange(o)} }>{o}</li>
                    ))
                }
            </ul>
        </div>
        
    )
}
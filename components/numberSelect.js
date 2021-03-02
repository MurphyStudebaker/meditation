import { useState } from "react"

export default function NumberSelect ({ selected, onChange }) {
    const [ showTimeOptions, setShowOptions ] = useState(false)

    return (
        <div>
            <h1>{selected}</h1>
            <ul className={`text-white ${showTimeOptions ? '' : 'hidden'}`}>
                <li onClick={e => { setShowOptions(false); onChange(3)} }>3</li>
                <li onClick={e => { setShowOptions(false); onChange(5)} }>5</li>
                <li onClick={e => { setShowOptions(false); onChange(10)} }>10</li>
                <li onClick={e => { setShowOptions(false); onChange(15)} }>15</li>
            </ul>
        </div>
        
    )
}
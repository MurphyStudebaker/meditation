export default function Start ({ start }) {
    return (
        <button onClick={e => start()}
            className='transition bg-transparent duration-700 ease-in hover:text-white py-4 text-gray-200 text-2xl hover:border-b-4 animated fadeIn'>
            I'm ready to begin ➜
        </button>
    )
}


export default function Start ({ start }) {
    return (
        <button onClick={e => start()}
            className='transition duration-700 ease-in hover:text-white py-4 text-gray-200 text-2xl animated fadeIn'>
            I'm ready to begin ➜
        </button>
    )
}


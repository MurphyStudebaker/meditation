export default function Start ({ start }) {
    return (
        <button onClick={e => start()}
            className='transition duration-1000 ease-in hover:bg-white hover:text-blue-900 hover:opacity-90 mt-4 py-4  border rounded-2xl text-white animated fadeIn'>
            I'm ready to begin.
        </button>
    )
}


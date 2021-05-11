export default function Start ({ start }) {
    return (
        <button onClick={e => start()}
            className='bg-gray-900 rounded-2xl transition-colors duration-300 hover:text-white py-2 px-6 mt-12 text-gray-300 text-2xl hover:border-b-4'>
            I'm ready to begin ➜
        </button>
    )
}


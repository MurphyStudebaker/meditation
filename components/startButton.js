export default function Start ({ start }) {
    return (
        <button onClick={e => start()}
            className='text-source-sans bg-gray-900 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors duration-300 hover:text-white py-2 px-6 mt-12 text-gray-300 text-2xl hover:border-b-4'>
            I'm ready to begin ➜
        </button>
    )
}


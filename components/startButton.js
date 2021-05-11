export default function Start ({ start }) {
    return (
        <button onClick={e => start()}
            className='bg-blue-900 rounded py-2 mt-12 w-2/3 text-gray-200 text-2xl hover:border-b-4'>
            I'm ready to begin ➜
        </button>
    )
}


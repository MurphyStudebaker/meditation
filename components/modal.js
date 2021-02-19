export default function Modal () {
    return (
        <div className='bg-white rounded-lg fixed mx-4 my-4 p-16 p-16 text-left'>
            <h2 className='font-bold text-2xl pb-2'>How do I meditate?</h2>
            <p>
                {
`
"Breathe.

If you feel overwhelmed, breathe. It will calm you and release the tensions.

If you are worried about something coming up, or caught up in something that already happened, breathe. It will bring you back to the present.

If you are moving too fast, breathe. It will remind you to slow down, and enjoy life more.

Breathe, and enjoy each moment of this life. They’re too fleeting and few to waste."

- Leo Babauta, Zen Habits
`
                }
                
            </p>

            <h2 className='font-bold text-2xl pb-2 pt-6'>Who built this?</h2>
            <p><a className="font-bold" href="">@varungadh</a> and <a className="font-bold" href="https://www.murphystudebaker.com">@murphystudebaker</a></p>
            <a href='http://www.buildwithpride.org'> Built with 🏳️‍🌈 </a>

        </div>
    )
}
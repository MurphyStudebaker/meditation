export default function Header ({ triggerModal }) {
    return (
        <header className="animated fadeIn flex justify-between w-screen cursor-pointer p-4">
        <p onClick={triggerModal} 
            className='transition duration-500 ease-in text-gray-300 hover:text-white'>
              About Inhale
        </p>
        {/* <p
            className='transition duration-500 ease-in text-gray-300 hover:text-white'>
              Preferences
        </p> */}
      </header>
    )
}
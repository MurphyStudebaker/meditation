import { Popover, Transition, Switch } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function PreferencesModal({ bell, setBell, ambience, setAmbience }) {
  return (
    <div className="p-4">
      <Popover className="relative w-44 text-right">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-gray-300'}
                text-right hover:text-white focus:outline-none focus:border-b-2 focus:border-gray-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>preferences</span>
            </Popover.Button>
            <Popover.Overlay
            className={`${
              open ? 'opacity-40 fixed inset-0' : 'opacity-0'
            } bg-black`}
          />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 px-4 mt-3 sm:px-0">
                <div className="text-white flex flex-row justify-start gap-2 ">
                    {bell ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>}
                    <p onClick={() => setBell(!bell)}>Starting Bell</p>
                    {/* <p onClick={() => setAmbience(!ambience)}>Background Ambience {ambience ? '[ON]' : '[OFF]'}</p> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
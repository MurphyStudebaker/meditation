import { Popover, Transition, Switch } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function PreferencesModal({ bell, setBell }) {

  return (
    <div className="p-4">
      <Popover className="relative w-44 text-right">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-gray-300'}
                text-right hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
                <div className="overflow-hidden text-white">
                    <p onClick={() => setBell(!bell)}>Starting Bell {bell ? '[ON]' : '[OFF]'}</p>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
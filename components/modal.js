import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MeditateModal() {
  return (
    <div className="w-full max-w-sm p-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-gray-300'}
                hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>how we meditate</span>
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
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden">
                  <p className="text-white relative max-w-sm">
                  1. Sit or lie down in a comfortable position. <br />
                  2. Focus on the visualization and let your vision slowly blur, or close your eyes. <br />
                  3. Breathe. <br />
                  4. When your mind wanders, come back to the breath. You're doing great :)
                  </p>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
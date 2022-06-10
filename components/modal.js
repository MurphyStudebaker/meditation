import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({ label, children }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>{label}</Popover.Button>
          <Popover.Overlay />
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
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

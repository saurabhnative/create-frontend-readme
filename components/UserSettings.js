import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import classNames from "classnames";
export default function RenderUserSettings() {
  const { user, error } = useUser();
  const router = useRouter();

  function redirectToLogOut() {
    router.push("/api/auth/logout");
  }
  if (!error && !user) {
    return (
      <div className="ml-3">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white bg-opacity-90 text-indigo-800 hover:bg-gray-50 focus:outline-none"
              onClick={() => updateActive(!active)}
            >
              <FaUserCircle className="mr-1 text-xl" />
              <div className="md:block hidden">Profile</div>
              <FiChevronDown
                className="-mr-1 ml-1 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white bg-opacity-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => redirectToLogOut()}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-indigo-900"
                          : "text-indigo-700",
                        "block px-4 py-1 cursor-pointer font-bold text-md"
                      )}
                    >
                      Sign Out
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  } else {
    return null;
  }
}

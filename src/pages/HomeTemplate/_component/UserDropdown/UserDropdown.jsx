import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Avatar } from "antd";
import { NavLink } from "react-router-dom";

export default function UserDropdown({ setIsLogin }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="w-full justify-center rounded-full">
          <Avatar className="w-12 h-12" src="https://i.pravatar.cc/?u=1" />
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
        <Menu.Items className="absolute rounded-lg overflow-hidden right-0 z-50 mt-2 w-56 origin-top-right bg-#3d3d3d shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-right text-white">
          <div className="p-5">
            <Menu.Item>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-center py-2 block px-3 rounded-lg font-semibold leading-7 text-white hover:text-white hover:bg-#7f66de"
                    : "text-center py-2 block px-3 rounded-lg font-semibold leading-7 text-white hover:bg-#7f66de hover:text-white"
                }
              >
                Account
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                className="py-2 block px-3 rounded-lg font-semibold leading-7 text-white hover:bg-#7f66de hover:text-white"
                onClick={() => {
                  localStorage.removeItem("User");
                  setIsLogin(false);
                }}
              >
                Log out
              </NavLink>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

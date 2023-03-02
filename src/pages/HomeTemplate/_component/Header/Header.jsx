import React, { Fragment, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../button/Button";
import { SearchOutlined } from "@ant-design/icons";
import { Popover, Dialog, Transition } from "@headlessui/react";
import { Search } from "../Search/Search";
import Logo from "../../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LoginModal from "../LoginModal/LoginModal";
import UserDropdown from "../UserDropdown/UserDropdown";
import { Avatar } from "antd";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("User"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const setIsOpen = () => {
    setOpen(false);
  };

  return (
    <>
      <header ref={headerRef} className="bg-transparent z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {isLogin ? (
            <>
              <div className="md:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => {
                    setMobileMenuOpen(true);
                    headerRef.current.className = "bg-#1d1d1d";
                  }}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <NavLink href className="-m-1.5 p-1.5 text-white">
                <img width={50} src={Logo} alt="logo" />
              </NavLink>
              <div className="md:hidden">
                <Avatar
                  className="w-12 h-12"
                  src="https://i.pravatar.cc/?u=1"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-1 justify-center lg:justify-start lg:w-2/12 md:w-2/12 ">
                <NavLink href className="-m-1.5 p-1.5 text-white">
                  <img width={50} src={Logo} alt="logo" />
                </NavLink>
              </div>
              <div className="flex absolute md:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 order-first"
                  onClick={() => {
                    setMobileMenuOpen(true);
                    headerRef.current.className = "bg-#1d1d1d";
                  }}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </>
          )}
          <Popover.Group className="hidden lg:w-7/12 md:gap-x-4 md:w-6/12 md:flex">
            <div className="flex w-full lg:justify-evenly lg:w-1/2 md:justify-evenly">
              <a
                style={{ lineHeight: "40px" }}
                to={"movies"}
                href
                // className={({ isActive }) =>
                //   isActive
                //     ? "navlinkNavbar text-sm font-semibold leading-6 text-white relative navlinkNavbarActive"
                //     : "navlinkNavbar text-sm font-semibold leading-6 text-white relative"
                // }
                className="text-white relative hover:text-#7f66de duration-300 transition ease-in-out active link font-Viga"
              >
                Movies
              </a>
              <a
                style={{ lineHeight: "40px" }}
                to={"cinemas"}
                href
                // className={({ isActive }) =>
                //   isActive
                //     ? "navlinkNavbar text-sm font-semibold leading-6 text-white relative navlinkNavbarActive"
                //     : "navlinkNavbar text-sm font-semibold leading-6 text-white relative"
                // }
                className="text-white relative hover:text-#7f66de duration-300 transition ease-in-out link font-Viga"
              >
                Cinemas
              </a>
              <a
                style={{ lineHeight: "40px" }}
                to="offers"
                href
                // className={({ isActive }) =>
                //   isActive
                //     ? "navlinkNavbar text-sm font-semibold leading-6 text-white relative navlinkNavbarActive"
                //     : "navlinkNavbar text-sm font-semibold leading-6 text-white relative"
                // }
                className="text-white relative hover:text-#7f66de duration-300 transition ease-in-out link font-Viga"
              >
                Offers
              </a>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
              <Search
                tailwindClasses={["py-2"]}
                placeholder="Search movies"
                backgroundColor={"transparent"}
                prefix={<SearchOutlined style={{ color: "grey" }} />}
              />
            </div>
          </Popover.Group>
          {isLogin ? (
            <div className="-space-x-1 hidden lg:w-3/12 items-center md:flex md:justify-end md:w-4/12">
              <p className="text-white mr-5 text-lg">
                Hello, {isLogin && JSON.parse(isLogin).hoTen}
              </p>
              <UserDropdown setIsLogin={setIsLogin} />
            </div>
          ) : (
            <div className="hidden lg:w-3/12 md:flex md:justify-end md:w-4/12">
              <div className="mr-2 flex flex-col justify-center">
                <p className="text-right text-xs font-light text-primary">
                  Don't have account yet?
                </p>

                <a
                  href
                  className="signUpText text-right text-xs font-light text-primary hover:text-#7f66de hover:underline transition duration-150 ease-in-out"
                >
                  Please sign up here!
                </a>
              </div>
              <Button
                label={<p className="text-sm font-bold leading-6">LOG IN</p>}
                variant="secondary"
                size="large"
                onClick={() => {
                  setOpen(true);
                }}
              ></Button>
            </div>
          )}
        </nav>
        <Transition.Root
          show={mobileMenuOpen}
          onClose={() => {
            setMobileMenuOpen(false);
            headerRef.current.className = "bg-transparent";
          }}
          as={Fragment}
        >
          <Dialog as="div" className="relative z-50">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none w-1/2 fixed inset-y-0 left-0 flex ">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="rounded-md text-white hover:text-#7f66de focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => {
                              headerRef.current.className = "bg-transparent";
                              setMobileMenuOpen(false);
                            }}
                          >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-full flex-col overflow-y-scroll bg-#1d1d1d py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-white sm:text-base text-xs -m-1.5 p-1.5">
                            Movie Project
                          </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                              <NavLink
                                href
                                to={"movies"}
                                className={({ isActive }) =>
                                  isActive
                                    ? "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white bg-#7f66de "
                                    : "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white hover:bg-#7f66de duration-300 transition ease-in-out"
                                }
                              >
                                Movies
                              </NavLink>
                              <NavLink
                                href
                                to={"cinemas"}
                                className={({ isActive }) =>
                                  isActive
                                    ? "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white bg-#7f66de "
                                    : "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white hover:bg-#7f66de duration-300 transition ease-in-out"
                                }
                              >
                                Cinemas
                              </NavLink>
                              <NavLink
                                href
                                to={"offers"}
                                className={({ isActive }) =>
                                  isActive
                                    ? "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white bg-#7f66de "
                                    : "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white hover:bg-#7f66de duration-300 transition ease-in-out"
                                }
                              >
                                Offers
                              </NavLink>
                            </div>

                            {isLogin ? (
                              <>
                                <div className="py-6 space-y-2">
                                  <NavLink
                                    href
                                    to={"movies"}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white bg-#7f66de "
                                        : "-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 sm:text-base text-xs text-white hover:bg-#7f66de duration-300 transition ease-in-out"
                                    }
                                  >
                                    Account
                                  </NavLink>
                                  <NavLink
                                    className="-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 text-white sm:text-base text-xs hover:bg-#7f66de duration-300 transition ease-in-out"
                                    onClick={() => {
                                      localStorage.removeItem("User");
                                      setIsLogin(false);
                                      setMobileMenuOpen(false);
                                      headerRef.current.className =
                                        "bg-transparent";
                                    }}
                                  >
                                    Log out
                                  </NavLink>
                                </div>
                              </>
                            ) : (
                              <div className="py-6">
                                <NavLink
                                  className="-mx-3 block rounded-lg py-2 px-3 font-semibold font-Viga leading-7 text-white sm:text-base text-xs hover:bg-#7f66de duration-300 transition ease-in-out"
                                  onClick={() => {
                                    setOpen(true);
                                  }}
                                >
                                  Log in
                                </NavLink>
                                <div className="mt-2">
                                  <p className="sm:text-sm text-xs font-light text-primary">
                                    Don't have account yet?
                                  </p>

                                  <NavLink
                                    href
                                    className="signUpText text-right text-xs font-light text-primary hover:text-#7f66de hover:underline transition duration-150 ease-in-out"
                                  >
                                    Please sign up here!
                                  </NavLink>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </header>
      <LoginModal open={open} setIsOpen={setIsOpen} setIsLogin={setIsLogin} />
    </>
  );
};

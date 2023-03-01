import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./LoginModal.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function LoginModal({ open, setIsOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg shadow-xl transition-all">
                <section className="loginForm">
                  <div className="form-box">
                    <div className="form-value">
                      <form action>
                        <h2 className="text-white text-center text-2xl">
                          Login
                        </h2>
                        <div className="inputbox">
                          <FontAwesomeIcon icon={faEnvelope} />
                          <input type="email" required />
                          <label htmlFor>Email</label>
                        </div>
                        <div className="inputbox">
                          <FontAwesomeIcon icon={faLock} />

                          <input type="password" required />
                          <label htmlFor>Password</label>
                        </div>
                        <div className="forget">
                          <label htmlFor>
                            <input type="checkbox" />
                            Remember Me <a href="#">Forget Password</a>
                          </label>
                        </div>
                        <button className="loginBtn">Log in</button>
                        <div className="register">
                          <p>
                            Don't have a account <a href="#">Register</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

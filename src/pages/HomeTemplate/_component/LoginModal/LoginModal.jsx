import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./LoginModal.css";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import logo from "../../../../assets/logo.png";
import { useFormik } from "formik";
import api from "utils/apiUtils";
import { Alert, Space } from "antd";
import { NavLink } from "react-router-dom";

export default function LoginModal({ open, setIsOpen, setIsLogin }) {
  const cancelButtonRef = useRef(null);
  const [loginError, setLoginError] = useState(null);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (user) => {
      api
        .post("QuanLyNguoiDung/DangNhap", user)
        .then((result) => {
          // CLose login modal
          setIsOpen(false);
          // Lưu login
          localStorage.setItem("User", JSON.stringify(result.data.content));
          setIsLogin(localStorage.getItem("User"));
        })
        .catch((error) => {
          setLoginError(error.response.data.content);
        });
    },
  });

  const renderNoti = () => {
    return (
      loginError && (
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%" }}
          key="error"
          className="mt-2"
        >
          <Alert message={loginError} type="error" banner />
        </Space>
      )
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
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
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-#1d1d1d">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="logo"
                      />
                      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                        Sign in to your account
                      </h2>
                      {renderNoti()}
                    </div>
                    <form
                      className="mt-5 space-y-6"
                      action="#"
                      method="POST"
                      onSubmit={formik.handleSubmit}
                    >
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                      <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            Email address
                          </label>
                          <input
                            onChange={formik.handleChange}
                            id="email-address"
                            name="taiKhoan"
                            type="text"
                            required
                            className="block relative z-50 w-full appearance-none rounded-none rounded-t-md border border-#7f66de px-3 py-2 text-#7f66de placeholder-#7f66de focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Username"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            onChange={formik.handleChange}
                            id="password"
                            name="matKhau"
                            type="password"
                            required
                            className="block w-full relative z-50 appearance-none rounded-none rounded-b-md border border-#7f66de px-3 py-2 text-#7f66de placeholder-#7f66de focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-#7f66de focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-#7f66de"
                          >
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <NavLink className="font-medium text-#7f66de hover:opacity-75">
                            Forgot your password?
                          </NavLink>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="loginBtn group relative flex w-full justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                              className="h-5 w-5 text-white group-hover:text-#7f66de transition ease-in-out duration-300"
                              aria-hidden="true"
                            />
                          </span>
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

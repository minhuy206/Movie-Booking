import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./TrailerModal.css";

export default function TrailerModal({ trailer, open, setIsOpen }) {
  const cancelButtonRef = useRef(null);

  const convertTrailerLink = (trailer) => {
    const index = trailer.indexOf("=");
    if (index !== -1) {
      const id = trailer.slice(index + 1);
      return "https://www.youtube.com/embed/" + id;
    }
    return trailer.replace(
      "https://youtu.be/",
      "https://www.youtube.com/embed/"
    );
  };

  const handleResizeIframe = (trailer) => {
    const { innerWidth: width } = window;
    if (width > 1536) {
      return (
        <iframe
          className="rounded-lg"
          width="960"
          height="540"
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else if (width > 1024) {
      return (
        <iframe
          className="rounded-lg"
          width="800"
          height={450}
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else if (width > 768) {
      return (
        <iframe
          className="rounded-lg"
          width="640"
          height={360}
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else if (width > 576) {
      return (
        <iframe
          className="rounded-lg"
          width="480"
          height="270"
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    }
    return (
      <iframe
        className="rounded-lg"
        width="320"
        height="180"
        src={convertTrailerLink(trailer)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  };
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
                <div className="bg-gray-500 video-container">
                  {handleResizeIframe(trailer)}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

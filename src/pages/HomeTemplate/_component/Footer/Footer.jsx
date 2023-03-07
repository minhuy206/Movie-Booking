import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../../assets/logo.png";

export const Footer = ({ ...props }) => {
  return (
    <footer className="bg-#1d1d1d mt-10 lg:mt-28">
      <div className="mx-6 py-10">
        <div className="layout pb-10 lg:grid lg:gap-8 hidden justify-between">
          <div className="logo order-first">
            <img src={Logo} width={200} alt="logo" className="m-auto" />
          </div>
          <div className="title">
            <h6 className="text-2xl text-primary">ADDRESSES & CONTACTS</h6>
          </div>
          <div>
            <h6 className="mb-1 text-lg text-primary">Lorem, ipsum.</h6>
            <p className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <h6 className="mb-1 text-lg text-primary">Lorem, ipsum.</h6>
            <p className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <h6 className="mb-1 text-lg text-primary">Lorem, ipsum.</h6>
            <p className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="order-2">
            <h6 className="text-2xl text-primary">SOCIAL MEDIA</h6>
            <div className="mt-2">
              <FontAwesomeIcon
                className="mr-14 text-#7f66de hover:opacity-75 transition ease-in-out duration-300"
                icon={faFacebook}
                size={"2x"}
              />
              <FontAwesomeIcon
                className="mr-14 text-#c8235d hover:opacity-75 transition ease-in-out duration-300"
                icon={faInstagram}
                size={"2x"}
              />
              <FontAwesomeIcon
                className="text-#44edfe hover:opacity-75 transition ease-in-out duration-300"
                icon={faTwitter}
                size={"2x"}
              />
            </div>
          </div>
          <div className="order-2">
            <div>
              <h6 className="text-2xl text-primary">OTHERS</h6>
            </div>
            <div className="content flex items-start" style={{ marginTop: 10 }}>
              <span className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300 mr-16">
                Terms & Policies
              </span>
              <span className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300 mr-16">
                Guides
              </span>
              <span className="text-#707070 text-sm hover:text-#7f66de transition ease-in-out duration-300">
                Sitemap
              </span>
            </div>
          </div>
        </div>
        <div className="layout lg:hidden flex flex-col justify-between">
          <div className="logo w-1/5">
            <h6 className="text-center">
              <img src={Logo} alt="logo" />
            </h6>
          </div>
          <div className="title">
            <h6 className="sm:text-2xl text-xl text-primary">
              ADDRESSES & CONTACTS
            </h6>
          </div>
          <div className="flex justify-between my-2">
            <div className="w-1/3">
              <h6 className="mb-1 text-sm sm:text-lg text-primary">
                Lorem, ipsum.
              </h6>
              <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="w-1/3">
              <h6 className="mb-1 text-sm sm:text-lg text-primary">
                Lorem, ipsum.
              </h6>
              <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="w-1/3">
              <h6 className="mb-1 text-sm sm:text-lg text-primary">
                Lorem, ipsum.
              </h6>
              <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="my-2 w-1/3">
              <div>
                <h6 className="sm:text-2xl text-xl text-primary">OTHERS</h6>
              </div>
              <div className="content mt-2">
                <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300 mr-5 mb-2">
                  Terms & Policies
                </p>
                <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300 mr-5 mb-2">
                  Guides
                </p>
                <p className="text-#707070 sm:text-sm text-xs hover:text-#7f66de transition ease-in-out duration-300">
                  Sitemap
                </p>
              </div>
            </div>
            <div className="my-2">
              <h6 className="sm:text-2xl text-xl text-primary">SOCIAL MEDIA</h6>
              <div className="mt-2">
                <FontAwesomeIcon
                  className="md:mr-14 sm:mr-12 mr-8 text-#7f66de hover:opacity-75 transition ease-in-out duration-300"
                  icon={faFacebook}
                  size={"2x"}
                />
                <FontAwesomeIcon
                  className="md:mr-14 sm:mr-12 mr-8 text-#c8235d hover:opacity-75 transition ease-in-out duration-300"
                  icon={faInstagram}
                  size={"2x"}
                />
                <FontAwesomeIcon
                  className="text-#44edfe hover:opacity-75 transition ease-in-out duration-300"
                  icon={faTwitter}
                  size={"2x"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

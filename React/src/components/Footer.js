import React from "react";
import { SocialNetworksFooter } from "./SocialNetworks";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Encontranos en las redes sociales
            </h4>
            <SocialNetworksFooter />
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Otros recursos
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#recurso1" rel="nofollow noopener">link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#recurso2" rel="nofollow noopener">link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#recurso3" rel="nofollow noopener">link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#recurso4" rel="nofollow noopener">link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap justify-end">
          <div className="w-full md:w-6/12 px-4 text-right">
            <div className="text-sm text-gray-400 font-semibold py-1">
              Desarrollo {" "}
              <a
                href="https://twitter.com/bernardiego"
                className="text-gray-600 hover:text-gray-900"
              >
                @bernardiego
              </a>
              {" "}| Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-gray-600 hover:text-gray-900"
              >
                Creative Tim
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

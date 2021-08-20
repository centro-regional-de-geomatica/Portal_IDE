import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCard";

const HomeModel = {
  bannerImage: "./img/sedeoroverde.jpg"
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-300">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "30vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${HomeModel.bannerImage})`
              }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div id="banner" className="pr-12">
                    <h1 className="text-white text-opacity-80 font-semibold text-5xl">
                      IDE de la Facultad de Ciencia y Tecnología 
					                   UADER
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Este es el portal de la Infraestructura de datos espaciales de la
                      Facultad de Ciencia y Tecnología FCYT
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "100px" }}
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
        </div>
        <section className="pb-20 pt-12 bg-gray-300">
          <ServiceCards />
        </section>
      </main>      
      <Footer />
    </div>
  );
}

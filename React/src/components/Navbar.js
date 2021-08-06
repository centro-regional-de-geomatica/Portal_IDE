import React from "react";
import ListRecursos from "./ListRecursos";
import ListInstitucional from "./ListInstitucional";
import { SocialNetworks } from "./SocialNetworks";

export default function Navbar(props) {
  let [navbarOpen, setNavbarOpen] = React.useState(false);
  let [indexOpened, setIndexOpened] = React.useState(0);
  
  let transparent = props.transparent;

  let nav = React.createRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (nav.current && !nav.current.contains(event.target))
        setIndexOpened(0);
    });
  }, [nav]);

  return (
    <nav 
      className={(transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg") + " flex flex-wrap items-center justify-between px-2 py-4" }
    >
      <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img className="h-12 w-auto sm:h-12" src={"./img/hqdefault.png"} alt="" />
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none lg:pl-16" +
            (navbarOpen ? " block rounded pt-4 pl-0" : " pl-8 hidden")
          }
          id="example-navbar-warning"
        >
          <nav className="hidden md:flex space-x-10" ref={nav} >
            <div className="relative">
              <button type="button" className="flyout-button text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"
                onClick={() => setIndexOpened(indexOpened !== 1 ? 1 : 0)}
              >
                <span>Institucional</span>
                <i className={`fas fa-chevron-down text-xs leading-lg w-5 mt-1`} />
              </button>
              <ListInstitucional clases={indexOpened === 1 ? "opacity-100 ease-out duration-200 translate-y-0 z-20": "opacity-0 ease-in duration-150 translate-y-1 z-10" }/>
            </div>
            <div className="relative">                            
              <button type="button" className="flyout-button text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false"
                onClick={() => setIndexOpened(indexOpened !== 2 ? 2 : 0) }
              >
                  <span>Recursos</span>
                  <i className={`fas fa-chevron-down text-xs leading-lg w-5 mt-1`} />
              </button>
              <ListRecursos clases={indexOpened === 2 ? "opacity-100 ease-out duration-200 translate-y-0 z-20" : "opacity-0 ease-in duration-150 translate-y-1 z-10" }/> 
            </div>           
          </nav>
          <SocialNetworks transparent={transparent} />
        </div>
      </div>
    </nav>
  );
}

import React from "react";

const recursosModel = [
    {
        key: 1,
        icon: 'search',
        url: '#',
        texto: 'Visualizador'
    },
    {
        key: 2,
        icon: 'cogs',
        url: '#',
        texto: 'Servicios'
    },
    {
        key: 3,
        icon: 'info-circle',
        url: '#',
        texto: 'Metadatos'
    },
    {
        key: 4,
        icon: 'plus',
        url: '#',
        texto: 'Otras IDE'
    }
]

export default function ListRecursos(props) {
    return (
        <div className={"absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-48 max-w-md sm:px-0 transition ease-in duration-150 opacity-0 translate-y-1 " + props.clases }>
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">            
                <div className="relative grid gap-6 bg-white p-5">
                {
                    recursosModel.map((object) => (
                        <a key={object.key} href={object.url} className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-100" target="_blank" rel="noreferrer noopener">
                            <i className={`fas fa-${object.icon} text-sm leading-lg w-5 text-center text-blue-600`} />
                            <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                    {object.texto}
                                </p>
                            </div>
                        </a>
                    ))
                }
                </div>
            </div>
        </div>
    )
  }
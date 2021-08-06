import React from "react";

const institucionalModel = [
    {
        key: 1,
        imagePath: './img/hqdefault.png',
        url: 'https://www.frvt.utn.edu.ar/',
        alt: 'Sitio oficial la Facultad Regional Venado Tuerto',
        text: 'FRVT - UTN',
        subtext: 'Sitio oficial la Facultad Regional Venado Tuerto'
    },
    {
        key: 2,
        imagePath: './img/IDESF.png',
        url: 'hhttps://www.santafe.gob.ar/idesf/portal',
        alt: 'Infraestructura de Datos Espaciales de Santa Fe',
        text: 'IDESF',
        subtext: 'Infraestructura de Datos Espaciales de Santa Fe'
    },
    {
        key: 3,
        imagePath: './img/logo-idera.png',
        url: 'https://www.idera.gob.ar/',
        alt: 'Infraestructura de Datos Espaciales de la República Argentina',
        text: 'IDERA',
        subtext: 'Infraestructura de Datos Espaciales de la República Argentina'
    }
]

export default function ListInstitucional(props) {
    return (
        <div className={"absolute z-10 -ml-4 mt-3 transform px-2 w-96 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transition " + props.clases }>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:p-8">
                {
                    institucionalModel.map((object) => (
                        <a key={object.key} href={object.url} className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" target="_blank" rel="noreferrer noopener">
                            <img className="h-auto w-8" src={object.imagePath} alt={object.alt} />
                            <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                    {object.text}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    {object.subtext}
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
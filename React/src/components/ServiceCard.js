import React from "react";

const servicesModel = [
    [
        {
            key: 1,
            icon: 'desktop',
            bgColor: 'bg-blue-600',
            url: 'http://51.79.50.82:8081/geonetwork/srv/spa/catalog.search#/map',
            texto: 'Visualizador',
            subtexto: 'Visualizador de mapas web que permite ver y consultar las capas provenientes de Organismos adheridos a la IDE.'
        },
        {
            key: 2,
            icon: 'layer-group',
            bgColor: 'bg-green-600',
            url: 'https://www.idera.gob.ar/index.php?option=com_content&view=article&id=335:geoservicios&catid=33:services&Itemid=302',
            texto: 'Geoservicios',
            subtexto: 'Listado de geoservicios WMS y WFS de Organismos adheridos a la IDERA.'
        },
        {
            key: 3,
            icon: 'search',
            bgColor: 'bg-pink-600',
            url: 'http://51.79.50.82:8081/geonetwork/srv/spa/catalog.search#/home',
            texto: 'Catálogo de Metadatos',
            subtexto: 'Servicio de búsqueda de información geoespacial de acuerdo al catálogo de metadatos de la IDE.'
        },
        {
            key: 4,
            icon: 'desktop',
            bgColor: 'bg-yellow-500',
            url: 'https://www.idera.gob.ar/index.php?option=com_content&view=article&id=64&Itemid=458',
            texto: 'Otras IDE y visualizadores',
            subtexto: 'Otras IDE y visualizadores de mapas web de los organismos miembros de IDERA.'
        }
    ]
];

export default function ServiceCards(props) {
    return (
        <div className="container mx-auto px-4">
            <div className="w-full h-16 mb-32 px-6">
                <h1 className="text-black font-semibold text-3xl">
                      Servicios
                </h1>
            </div>
            <div className="flex flex-wrap gap-y-32">
            {
                servicesModel[0].map((object) => (
                    <a  key={object.key}
                        className="w-full 2xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-12/12 px-6 mr-auto ml-auto self-end"
                        href={object.url}
                        target="_blank" rel="noreferrer noopener"
                    >
                        <div className="relative flex flex-col min-w-0 break-words bg-white h-44 w-full mb-6 shadow-lg rounded-b-lg bg-white-600">
                            <div className={`flex justify-center w-full absolute rounded-t-lg h-32 -mt-32 ${object.bgColor}`}>                                
                                <i className={`fas fa-${object.icon} text-6xl text-center text-black self-center`} />
                            </div>
                            <blockquote className="relative pt-4 pb-8 px-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block"
                                    style={{
                                        height: "95px",
                                        top: "-94px"
                                    }}
                                    >
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-white fill-current"
                                    ></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-black">
                                    {object.texto}
                                </h4>
                                <p className="text-md font-light mt-2 text-black">
                                    {object.subtexto}
                                </p>
                            </blockquote>
                        </div>
                    </a>
                ))
            }
            </div>
        </div>
    )
  }
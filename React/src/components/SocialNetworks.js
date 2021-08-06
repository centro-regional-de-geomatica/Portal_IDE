import React from "react";

const social_networks = [
    {
      key: 1,
      url: '#',
      net: 'facebook',
      span: 'Share',
      textColor: "hover:text-blue-600",
      textColorFooter: "text-blue-600"
    },
    {
      key: 2,
      url: '#',
      net: 'twitter',
      span: 'Tweet',
      textColor: "hover:text-blue-400",
      textColorFooter: "text-blue-400"
    },
    {
      key: 3,
      url: '#',
      net: 'youtube',
      span: 'Join',
      textColor: "hover:text-red-600",
      textColorFooter: "text-red-600"
    },
    {
      key: 4,
      url: '#',
      net: 'linkedin',
      span: 'React',
      textColor: "hover:text-blue-600",
      textColorFooter: "text-blue-600"
    },
    {
      key: 5,
      url: '#',
      net: 'github',
      span: 'Star',
      textColor: "hover:text-black",
      textColorFooter: "text-black"
    }
]

export function SocialNetworks(props) {
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    {
      social_networks.map((object) => (
        <li key={object.key} className="flex items-center">
          <a
            className={
              (props.transparent
                ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                : "text-gray-800 hover:text-gray-600") +
              " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            }
            href={object.url}
            target="_blank" rel="noreferrer noopener"
          >
            <i
              className={
                (props.transparent
                  ? "lg:text-gray-300 text-gray-500"
                  : "text-gray-500") +
                ` fab fa-${object.net} text-lg leading-lg ${object.textColor}`
              }
            />
            <span className="lg:hidden inline-block ml-2">{object.span}</span>
          </a>
        </li>
      ))
    }
    </ul>
  )
}

export function SocialNetworksFooter() {
  return (
    <div className="mt-4 mb-4">
    {
      social_networks.map((object) => (        
        <a key={object.key} href={object.url} target="_blank" rel="noreferrer noopener">
          <button
            className={`bg-white ${object.textColorFooter} shadow-lg font-normal h-10 w-10 items-center leading-none justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`}
            type="button"
          >
            <i className={`flex fab fa-${object.net}`} />
          </button>
        </a>
      ))
    }
    </div>
  )
}
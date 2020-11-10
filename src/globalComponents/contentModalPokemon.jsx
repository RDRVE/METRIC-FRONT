import React from 'react'
import { GiSwitchblade, GiHearts } from "react-icons/gi";

const ContentModalPokemon = ({ className, nombre, ataque, vida, imagen }) => {
    return (
        <div className="rounded-lg border border-t-2 border-b-2 border-blue-600 bg-red-300">
            <div>
                <img src={imagen} alt={nombre} className="h-40 w-40 mx-auto block" />
            </div>
            <h2 className="text-center text-gray-800 font-bold text-2xl uppercase my-2"> {nombre} </h2>
            <ul className="w-11/12 mx-auto rounded-lg px-6 py-2 text-2xl">
                <li className="flex items-center">
                    <GiSwitchblade className="inline-block text-gray-800" /> <span className="font-medium text-blue-500 w-full text-center" >{ataque}</span>
                </li>
                <li className="flex items-center">
                    <GiHearts className="inline-block text-red-700" /> <span className="font-medium text-blue-500 w-full text-center" >{vida}</span>
                </li>
                <li></li>
            </ul>
        </div>
    )
}

export default ContentModalPokemon

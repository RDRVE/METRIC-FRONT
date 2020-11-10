import React from 'react'
import { GiSwitchblade, GiHearts } from "react-icons/gi";
import Boton from './boton';
import SimpleModal from './modal';

const CardPokemon = (props) => {
    const { className, nombre, ataque, vida, imagen } = props
    return (
        <div className="w-full md:w-1/4">
            <div className={`w-56 bg-indigo-500 rounded-lg px-4 py-3 my-2 mx-auto ${className}`}>
                <div>
                    <img src={imagen} alt={nombre} className="h-40 w-40 mx-auto block" />
                </div>
                <h2 className="text-center text-white font-bold text-2xl uppercase my-2"> {nombre} </h2>
                <ul className="w-11/12 mx-auto rounded-lg bg-white px-6 py-2 text-2xl">
                    <li className="flex items-center">
                        <GiSwitchblade className="inline-block text-gray-800" /> <span className="font-medium text-blue-500 w-full text-center" >{ataque}</span>
                    </li>
                    <li className="flex items-center">
                        <GiHearts className="inline-block text-red-700" /> <span className="font-medium text-blue-500 w-full text-center" >{vida}</span>
                    </li>
                    <li></li>
                </ul>
                <div className="flex flex-col items-center mt-1">
                    <SimpleModal text="Ver más" className="my-1" data={props}/>
                    <Boton text="Editar" className="my-1"/>
                </div>
            </div>
        </div>
    )
}

export default CardPokemon

import React from 'react'
import img from '../images/pokemon.jpg'
import Boton from './boton'
import { useHistory } from "react-router-dom"

const Banner = () => {

    //Hooks para redireccionar 
    const navigate = useHistory();

    return (
        <div className="relative">
            <img src={img} alt="pokemon-banner" className="w-full z-0" style={{ height: "300px" }} />
            <div className="absolute top-0 bottom-0 w-full h-full flex items-center z-10">
                <div className="flex flex-col sm:ml-12 ml-4">

                    <Boton text="Registro" className="mb-3" 
                    onClick={()=>navigate.push("/registro")}/>

                    <Boton text="Pokemones" className="mt-3"
                    onClick={()=>navigate.push("/pokemones")}/>

                </div>
            </div>
        </div>
    )
}

export default Banner

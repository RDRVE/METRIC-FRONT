import React from 'react'
import { GiPokecog } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full">
            <div className="w-full bg-red-700 h-24 flex items-center">
                <h1 className="text-white text-5xl px-4">
                    <Link to="/">Pokedex</Link> <GiPokecog className="inline-block text-black text-5xl" />
                </h1>
            </div>
        </header>
    )
}

export default Header

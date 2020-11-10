import React from 'react'

const Boton = ({text, className,onClick}) => {
    return (
        <button type="button" onClick={onClick}
        className={`px-3 py-2 text-white text-center w-32 bg-red-700 rounded-full hover:bg-red-800 focus:outline-none ${className}`}>
            {text}
        </button>
    )
}

export default Boton

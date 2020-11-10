import React from 'react'
import { useState } from 'react'
import Boton from '../../globalComponents/boton'
import Layout from '../../globalComponents/layout'

const Registro = () => {

    const [nombre, setnombre] = useState(null)
    const [categoria, setcategoria] = useState(null)

    return (
        <Layout>
            <div className="">
                <form className="bg-indigo-500 border rounded-lg mx-auto my-4" style={{ width: "30rem" }}>
                    <div>
                        <h2 className="font-bold flex justify-between mx-3 my-5 px-4 py-3 bg-white rounded-lg text-xl">Registro
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </h2>
                    </div>
                    <div className="mx-3 my-3 flex justify-between">
                        <label htmlFor="nombre" className="bg-white rounded-lg text-lg px-2 py-1 text-center"
                            style={{ width: "30%" }}>Nombre</label>
                        <input type="text" className="bg-white rounded-lg text-lg px-2 py-1" id="nombre" name="nombre"
                            style={{ width: "63%" }} 
                            onChange={(e)=>setnombre(e.target.value)} />
                    </div>
                    <div className="mx-3 my-3 flex justify-between">
                        <label htmlFor="categoria" className="bg-white rounded-lg text-lg px-2 py-1 text-center"
                            style={{ width: "30%" }}>Categoría</label>
                        <input type="text" className="bg-white rounded-lg text-lg px-2 py-1" id="categoria" name="categoria"
                            style={{ width: "63%" }} 
                            onChange={(e)=>setcategoria(e.target.value)}/>
                    </div>
                    <div className="mt-1 mb-4 flex justify-end pr-4">
                        <Boton text="Registrar" className="text-xl" />
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Registro

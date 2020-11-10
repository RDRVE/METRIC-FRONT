import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'

const Paginacion = ({ data, verDatos }) => {

    const [grupoInd, setgrupoInd] = useState(0)
    const [newData, setnewData] = useState([])

    useEffect(() => {
        let resultado = []
        let grupo = []
        data.forEach((dat, ind) => {
            const ind2 = ind + 1
            grupo = [...grupo, dat]
            if (ind2 % 4 === 0) {
                resultado = [...resultado, grupo]
                grupo = []
            }
            if (ind2 === data.length) {
                resultado = [...resultado, grupo]
            }
        })
        setnewData(resultado)
    }, [data])
    useEffect(() => {
        console.log(newData.length)
    }, [newData])
    useEffect(() => {
        
        console.log(grupoInd)
        if(grupoInd===30||grupoInd===29){
            console.log(newData[grupoInd])
        }
    }, [grupoInd])
    return (
        <div className="w-64 mx-auto flex justify-between">
            {
                newData.length > 0 && newData[grupoInd].map((e, ind) => {
                    if ((ind) === 0) {
                        return (
                            <Fragment key={ind}>
                                {
                                    newData[grupoInd - 1] && <button className="border-2 border-indigo-500 rounded-xl text-center font-bold px-4 py-1 mx-4 my-4 hover:bg-indigo-300 focus:outline-none"
                                        onClick={() => setgrupoInd(x => x - 1)}>
                                        ...
                                </button>
                                }
                                <button className="border-2 border-indigo-500 rounded-xl text-center font-bold px-4 py-1 mx-4 my-4 hover:bg-indigo-300 focus:outline-none"
                                    onClick={() => verDatos(ind + grupoInd * 4)}>
                                    {ind + 1 + grupoInd * 4}
                                </button>
                            </Fragment>
                        )
                    }
                    else if ((ind) !== 3) {
                        return (
                            <button key={ind} className="border-2 border-indigo-500 rounded-xl text-center font-bold px-4 py-1 mx-4 my-4 hover:bg-indigo-300 focus:outline-none"
                                onClick={() => verDatos(ind + grupoInd * 4)}>
                                {ind + 1 + grupoInd * 4}
                            </button>
                        )
                    } else {
                        return (
                            <Fragment key={ind}>
                                <button className="border-2 border-indigo-500 rounded-xl text-center font-bold px-4 py-1 mx-4 my-4 hover:bg-indigo-300 focus:outline-none"
                                    onClick={() => verDatos(ind + grupoInd * 4)}>
                                    {ind + 1 + grupoInd * 4}
                                </button>
                                {newData[grupoInd + 1] && <button className="border-2 border-indigo-500 rounded-xl text-center font-bold px-4 py-1 mx-4 my-4 hover:bg-indigo-300 focus:outline-none"
                                    onClick={() => setgrupoInd(x => x + 1)}>
                                    ...
                                </button>}
                            </Fragment>
                        )
                    }
                })
            }
        </div>
    )
}

export default Paginacion

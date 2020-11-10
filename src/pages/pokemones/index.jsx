import React, { useEffect } from 'react'
import { useState } from 'react'
import CardPokemon from '../../globalComponents/cardPokemon'
import Layout from '../../globalComponents/layout'
import Paginacion from './componets/paginacion'


const Pokemones = () => {

    const [newData, setnewData] = useState([])
    const [indice, selectIndice] = useState(0)

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
    }, [])

    return (
        <Layout>
            <div className="flex flex-wrap">
                {
                    newData.length > 0
                    &&
                    newData[indice].map((dat, ind) => <CardPokemon {...dat} key={ind} className="" />)
                }
            </div>
            <Paginacion data={newData} verDatos={(ind) => selectIndice(ind)} />
        </Layout>
    )
}

let data = []
for (let index = 0; index < 477; index++) {
    data = [...data,
    {
        id:index,
        nombre: `pikachu${index}`,
        imagen: "http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest",
        ataque: "300",
        vida: "400"
    }
    ];

}

export default Pokemones


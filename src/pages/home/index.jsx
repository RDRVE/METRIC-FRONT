import React from 'react'
import Layout from '../../globalComponents/layout'


const Home = () => {
    return (
        <Layout title="Home | Pokedex" home>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4">
                    <p className="px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit est distinctio qui nam officia nostrum, debitis ex quis repellendus?</p>
                </div>
                <div className="w-full md:w-1/4">
                    <p className="px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit est distinctio qui nam officia nostrum, debitis ex quis repellendus?</p>
                </div>
                <div className="w-full md:w-1/4">
                    <p className="px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit est distinctio qui nam officia nostrum, debitis ex quis repellendus?</p>
                </div>
                <div className="w-full md:w-1/4">
                    <p className="px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit est distinctio qui nam officia nostrum, debitis ex quis repellendus?</p>
                </div>
            </div>
        </Layout>
    )
}

export default Home

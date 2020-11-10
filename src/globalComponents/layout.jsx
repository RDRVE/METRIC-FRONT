import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import Banner from './banner'

const Layout = ({ children, textIrATabla, link, className, title, home }) => {
    return (
        <Fragment>
            <Header />
            <div className="bg-gray-300">
                <p className="px-8 text-2xl py-3 text-gray-600">Pokedex/Home</p>
            </div>
            {home && <Banner /> }
            <div className={` max-w-6xl mx-auto pt-4 ${className} pb-8`} >
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content="Inicio" />
                </Helmet>
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Layout

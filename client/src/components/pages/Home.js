import React from 'react'
import Navbar from '../UIC/Navbar'
import Card from '../UIC/Card'
import Footer from '../UIC/Footer'
import Carousel from '../UIC/Carousel'

function Home() {
    return (

        <>
            <div>
                <Navbar />
            </div>

            <div>
                <Carousel/>
            </div>

            <div>
               <Card/>
               <Card/>
            </div>

            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home
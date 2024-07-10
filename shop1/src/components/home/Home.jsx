import { Carousel } from "flowbite-react";
import React from 'react'

const Home = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src="https://picsum.photos/2000/1100" alt="..." />
                <img src="https://picsum.photos/2000/1200" alt="..." />
                <img src="https://picsum.photos/2000/1300" alt="..." />
                <img src="https://picsum.photos/2000/1400" alt="..." />
                <img src="https://picsum.photos/2000/1500" alt="..." />
            </Carousel>
        </div>
    )
}

export default Home




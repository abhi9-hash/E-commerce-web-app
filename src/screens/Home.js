import React from 'react';
import Productcard from '../components/Productcard'
import data from '../components/data.js';
import Header from '../components/Header'
import './Home.css'
function Home() {
    return (
        <div>
        <Header/>
        <div className='home'>
                {
                data.products.map((i)=>(
                <Productcard
                key={i.id}
                id={i.id}
                category={i.category}
                title={i.title}
                price={i.price} 
                image={i.image}
                rating={i.rating}
                />
                ))
                }
            
        </div>
        </div>
    )
}

export default Home

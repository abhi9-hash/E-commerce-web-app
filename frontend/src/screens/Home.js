import React from 'react';
import Productcard from '../Productcard'
import data from '../data.js';
import Header from '../Header'
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

import React,{ useState,useEffect} from 'react';
import Productcard from '../components/Productcard'
import axios from 'axios';
import Header from '../components/Header'
import './Home.css'
function Home() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
    const fetchData= async ()=>{
    const {data}= await axios.get('/products/api');
    setProducts(data);
    };
        fetchData();
    }, [])
    return (
        <div>
        <Header/>
        <div className='home'>
                {
                Products.map((i)=>(
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

import React,{ useState,useEffect} from 'react';
import Productcard from '../components/Productcard'
import LoadingBox from '../components/LoadingBox'
import MessagingBox from '../components/MessagingBox'
import axios from 'axios';
import Header from '../components/Header'
import './Home.css'
function Home() {
    const [Products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    useEffect(() => {
    const fetchData= async ()=>{
        try{
    const {data}= await axios.get('/products/api');
    setProducts(data);
    }catch(err){
        setError(err.message);
        setLoading(false);
    }
    };
        fetchData();
    }, [])
    return (
        <div>
            {Loading?(<LoadingBox></LoadingBox>
            ):
             Error?(<MessagingBox>{Error}</MessagingBox>)
             :(
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
            </div>)}
        </div>
             ) 
                    }

export default Home

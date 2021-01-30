import React,{ useEffect} from 'react';
import Productcard from '../components/Productcard'
import LoadingBox from '../components/LoadingBox'
import MessagingBox from '../components/MessagingBox'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from './actions/productActions'

export default function Home() {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { Loading, Error,  Products } = productList;

    
    useEffect(() => {
        dispatch(listProducts());
        },[dispatch]);

    return (
        <div>
            {Loading?(<LoadingBox></LoadingBox>
            ):
            Error?(<MessagingBox>{Error}</MessagingBox>)
             :(
                 <div>
                <div className='home'>
                        {
                        Products.map((i)=>(
                        <Productcard
                        id={i._id}
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

 

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import s from './ProductCardPage.module.css'

export default function ProductCartPage(){
    const [product, setProducts] = useState({})
   const {id} = useParams()
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
                .then(res => res.json())
                .then(data =>setProducts(()=>data))
              
    },[])
    console.log(product);
    return(
        // <div>
        //     <img src={product.image}/>
        //    {product.title}
        //    <Rating className={s.rating} ratingValue={product.rating?.rate}/>
        //        <button onClick={-1}>Back</button>
        // </div>
        <div className={s.productCard}>
      
        <div className={s.wrapper}>
            <p className={s.title} key={product.id}>{product.title}       </p>    
          <div className={s.img} style={{backgroundImage: `url(${product.image})`, 
                                      backgroundSize: 'contain',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundPosition: 'center' }}>
            

          </div>
          <div>
          <p>Price: {product.price}$</p>
          <p>Description: {product.description}</p>
          </div>
        <Rating className={s.rating} ratingValue={product.rating?.rate}/> 
          </div>  
            <Link to={-1}>
                 <button className={s.backBtn}> Назад </button>
            </Link>
        </div>
    )
}
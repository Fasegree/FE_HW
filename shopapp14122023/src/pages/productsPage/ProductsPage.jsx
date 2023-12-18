import s from './ProductsPage.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import ProductCartPage from '../productCardPage/ProductCardPage';
// import {} from ''


function ProductsPage() {
  const [products, setProducts] = useState([])
  const urlProducts = 'https://fakestoreapi.com/products'

  function getLS(key){
    return JSON.parse(localStorage.getItem('products'))
  }
  function setLS(key,array){
    localStorage.setItem(key, JSON.stringify(array))
  }

  useEffect(()=>{
    console.log(getLS('products'))
    if(getLS('products')===null){

      fetch(urlProducts)
        .then(res => res.json())
        .then(data =>setProducts(data))
    } else{
       setProducts(getLS('products'))
    }
  },[])

  useEffect(() => {
    setLS('products', products)
  }, [products])

  function delById(e,id){
    e.preventDefault()
    // e.stopPropagation()
    console.log(id);
    setProducts(products.filter(el => el.id !==id))
  }
  return (


    <div className={s.wrapper}>
      {products.map(el => 
      
        <Link key={el.id} className={s.link} to={''+el.id}  element={<ProductCartPage/>}> 
        <div className={s.close} onClick={(event) => delById(event,el.id)}>X</div>
        <div >
          <div className={s.img} style={{backgroundImage: `url(${el.image})`, 
                                      backgroundSize: 'contain',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundPosition: 'center' }}>
            

          </div>
          </div>  
        <p className={s.title} key={el.id}>{el.title}        
        </p>
        <Rating className={s.rating} ratingValue={el.rating.rate}/> 
        </Link>
        
        )}
    </div>

  );
}

export default ProductsPage;

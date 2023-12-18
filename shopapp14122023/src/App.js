
import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductsPage from './pages/productsPage/ProductsPage';
import ProductCartPage from './pages/productCardPage/ProductCardPage';


function App() {
  const [products, setProducts] = useState([])
  const urlProducts = 'https://fakestoreapi.com/products'

  function getLS(){
   return JSON.parse(localStorage.getItem('products'))
  }
  function setLS(key,array){
    localStorage.setItem(key, JSON.stringify(array))
  }

  useEffect(()=>{
    console.log(getLS('products'));
    if(getLS('products')===undefined){
      console.log('null--')
      fetch(urlProducts)
        .then(res => res.json())
        .then(data =>setProducts(data))
    } else{
     setProducts(() => getLS())
       
    }
  },[])

  useEffect(() => {
    // setLS('products', products)
  }, [setProducts])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<ProductCartPage />}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>    
    </BrowserRouter>


  );
}

export default App;

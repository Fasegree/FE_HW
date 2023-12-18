import { Link } from "react-router-dom";
import Products from "../productsPage/ProductsPage";
import s from './NotFoundPage.module.css'
export default function NotFoundPage(){
    setTimeout(()=>{
        
    },2000)
    return(
        <div className={s.wrapper}>
            
            <img src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg" alt="Error 404"/>
            <Link className={s.link} to={'/products'}>Products</Link>
        </div>
    )
}
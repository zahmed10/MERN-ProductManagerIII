import React, {useEffect, useState} from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import axios from "axios";
// export default () => {
//     return (
//         <div>
//             <ProductForm/>
//         </div>
//     )
// }

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;
import React from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";
    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log(removeFromDom);
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}><Link to={`/products/${product._id}`}>
                    {product.title}, {product.price}, {product.description}
                </Link>
                |
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
                
            )}
        </div>
    )
}
    
export default ProductList;
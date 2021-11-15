import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const { removeFromDom } = props;
    console.log("removeFromDom ˘˘˘˘˘˘", removeFromDom);
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
                history.push("/products");
                // history.goForward();
            })
            .catch(err => console.error(err));
    }

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);


    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/" + product._id + "/edit"}>
            Edit
            </Link>
            |
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>

        </div>
    )
}
    
export default Detail;
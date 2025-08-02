import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div className='product'>
            <img className='productImage' src={image} alt='image' />
            <div>
                <h3>{title}</h3>
                <p>{price} ₺</p>
            </div>
            <div>
                <button onClick={()=>navigate("/product-details/" + id)}>Go To Detail Page</button>
            </div>
        </div>
    )
}

export default Product
import React from 'react'
import '../css/Product.css'

const Product = ({ product }) => {
    const { id, price, image, title, description } = product

    return (
        <div className='product'>
            <img className='productImage' src={image} alt='image' />
            <div>
                <h3>{title}</h3>
                <p>{price} ₺</p>
            </div>
            <div>
                <button>Go To Detail Page</button>
            </div>
        </div>
    )
}

export default Product
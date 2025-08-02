import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import '../css/ProductDetails.css';
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (products && products.length > 0) {
            const found = products.find((product) => product.id == id);
            if (found) {
                dispatch(setSelectedProduct(found));
            }
        }
    }, []);

    const { price, image, title, description } = selectedProduct || {};

    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            quantity
        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }

    if (!selectedProduct) return <div>Loading...</div>;

    return (
        <div className="product-details-container">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h2>{title}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">{price} ₺</p>

                <div className="quantity-controller">
                    <button onClick={decrease}><CiCircleMinus size={28} /></button>
                    <span>{quantity}</span>
                    <button onClick={increase}><CiCirclePlus size={28} /></button>
                </div>

                <button className="add-to-cart" onClick={addBasket}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;

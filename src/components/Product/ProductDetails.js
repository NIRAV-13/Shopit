import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import ProductArray from './ProductArray';
import { useNavigate } from "react-router-dom";
import './ProductCss.css'
import axios from 'axios';

const ProductDetails = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const filtered = data.filter(prod => {
        return prod.id == id;
    });

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    const routeChange = () => {
        let path = `/wishlist`;
        navigate(path);
    }
    console.log(filtered);


    const [data, setData] = useState([])
    const fetchProduct = async () => {
        let res = await axios({
            method: "GET",
            url: "http://localhost:8080/fetchProductByProductID/" + id
        });

        console.log(res.data);
        setData(res.data)
    };

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div>
            {filtered.map((prod, idx) => {
                return (
                    <>
                        <NavBar></NavBar>
                        <div className='details' key={idx}>
                            <div className='big-img'>
                                {/* <img src={"http://localhost:3000/" + prod.img} className="img-fluid" alt="..." />  */}
                                <img src={prod.productImage} className="img-fluid" alt="..." />
                            </div>

                            <div className='box'>
                                <div className='row'>
                                    <h1>{prod.productBrand}</h1>
                                    <h5>{prod.productName}</h5>
                                    <span>${prod.productPrice}</span>
                                </div>
                                <p>{prod.desc}</p>
                                <div className='buttonRow'>
                                    <button className="cart" style={{
                                        backgroundColor: isHovering ? 'pink' : '',
                                        color: isHovering ? 'white' : '',
                                    }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}> <span class='bi bi-handbag-fill'></span> Add to cart</button>

                                    {/* <button className="wishlist"> <span class='bi bi-suit-heart'></span> Add to cart</button> */}
                                </div>
                            </div>

                        </div>
                    </>
                );
            })}
        </div>

    );
}

export default ProductDetails
import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import ProductArray from './ProductArray';
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
    let navigate = useNavigate(); 
    const { id } = useParams();

    const filtered = ProductArray.filter(prod => {
        return prod.id == id;
    });

    const routeChange = () =>{ 
        let path = `/wishlist`; 
        navigate(path);
      }
    console.log(filtered);

    return (
        <div>
            {filtered.map(prod => {
                return (
                    <>
                        <NavBar></NavBar>
                        <div className="card mb-3 mt-5" >
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body" key={id}>
                                        <h5 className="text-start fs-1 fw-bold">{prod.title}</h5>
                                        <p className="text-start mt-5">{prod.desc}</p>
                                        <p className="text-start fw-bold">${prod.price}</p>
                                        <p className="text-start"><small className="text-muted">In stock</small></p>
                                        <button className="btn btn-secondary mt-5">Buy now</button>
                                        <br/>
                                        <button className="btn btn-secondary mt-5" onClick={routeChange}>
                                        Add to Wishlist
                                        </button>
                                    </div>
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
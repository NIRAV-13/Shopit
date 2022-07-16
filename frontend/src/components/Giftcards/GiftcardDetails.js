import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import GiftcardArray from './GiftcardArray';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const GiftcardDetails = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const filtered = data.filter(gift => {
        return gift.id == id;
    });

    const routeChange = () =>{ 
        let path = `/wishlist`; 
        navigate(path);
      }
    console.log(filtered);

    const [data, setData] = useState([])
    const fetchGiftcard = async () => {
        let res = await axios({
            method: "GET",
            url: "http://localhost:8080/fetchGiftcardByGiftcardID/" + id
        });

        console.log(res.data);
        setData(res.data)
    };

    useEffect(() => {
        fetchGiftcard()
    }, [])

    return (
        <div>
            {filtered.map(gift => {
                return (
                    <>
                    <NavBar></NavBar>
                        <div className="card1 mb-3 mt-5" >
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={"http://localhost:3000/" + gift.img} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body" key={id}>
                                        <h5 className="text-start fs-1 fw-bold">{gift.title}</h5>
                                        <p className="text-start mt-5">{gift.desc}</p>
                                        <p className="text-start fw-bold">${gift.price}</p>
                                        <p className="text-start"><small className="text-muted">In stock</small></p>
                                        <button className="btn btn-secondary mt-5">Add to Cart</button>
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

export default GiftcardDetails
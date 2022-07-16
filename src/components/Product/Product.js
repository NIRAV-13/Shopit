import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductArray from './ProductArray'
import axios from 'axios';

const Product = () => {
    const [data, setData] = useState([])
    const filterResult = (cat) => {
        const result = data.filter((currentValue) => {
            return currentValue.category === cat;
        });
        setData(result)
    }

    const fetchAllProducts = async () => {
        let res = await axios({
            method: "GET",
            url: "http://localhost:8080/"
        });

        setData(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3'>
                        <h1 className='text-center secondary pb-4 pt-1'>Category</h1>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Men')}>Men</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Women')}>Women</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Kids')}>Kids</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Home & Kitchen')}>Home & Kitchen</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Electronics')}>Electronics</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Health & Personal Care')}>Health & Personal Care</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Beauty')}>Beauty</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setData(data)}>All</button>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {data.map((values) => {
                                const { id, title, price, img } = values
                                return (
                                    <>
                                        <div className='col-md-4 mb-4' key={id}>
                                            <div className="card">
                                                <img src={img} className="card-img-top1" alt="..." />
                                                <div className="card-body1">
                                                    <p className="card-title1 text-muted">{title}</p>
                                                    <p><strong>${price}</strong></p>
                                                    <Link as={Link} to={`product/${id}`}>Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
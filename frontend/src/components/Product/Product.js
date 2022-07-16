import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, Container, Nav } from 'react-bootstrap'
import ProductArray from './ProductArray'
import axios from 'axios';
// import './ProductCss.css'
// import SearchBox from './SearchBox'

const Product = () => {
    const [data, setData] = useState([])
    const [dbData, setDbData] = useState([])

    const filterResult = (cat) => {
        debugger;
        const result = dbData.filter((val) => {
            return val.productCategory === cat;
        });
        setData(result)
    }

    const fetchAllProducts = async () => {
        debugger;
        let res = await axios({
            method: "GET",
            url: "http://localhost:8080/"
        });

        setData(res.data);
        setDbData(res.data)
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
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setData(dbData)}>All</button>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {data.map((values) => {
                                const { id, title, price, img } = values
                                return (
                                    <>
                                        <div className='col-md-4 mb-4' key={values._id} style={{ margin: 0 }}>
                                            <div className="card" style={{ minHeight: '100%' }}>
                                                <Link className='link' as={Link} to={`product/${values._id}`}>
                                                    <img src={values.productImage} className="card-img-top1"
                                                        style={{ width: '100%', height: '30vw', objectFit: 'cover' }} alt="..." />
                                                </Link>
                                                {/* <img src={values.productImage} className="card-img-top1" alt="..." /> */}
                                                <div className="card-body1">
                                                    <p className="cardbrand1 mt-1"
                                                        style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '20px', marginTop: '-5px' }}
                                                    ><strong>{values.productBrand}</strong></p>
                                                    <p className="card-title1 text-muted">{values.productName}</p>
                                                    {/* <p><strong>${values.productPrice}</strong></p> */}
                                                    <p className="price1"><strong>${values.productPrice}</strong></p>
                                                    {/* <Link as={Link} to={`product/${values._id}`}>Details</Link> */}
                                                    <div className="cardlink1" >
                                                        <Link className='link' as={Link} to={`product/${values._id}`}>Details</Link>
                                                    </div>
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
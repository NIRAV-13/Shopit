import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductArray from './ProductArray'

const Product = () => {
    const [data, setData] = useState(ProductArray)
    const filterResult = (cat) => {
        const result = ProductArray.filter((currentValue) => {
            return currentValue.category === cat;
        });
        setData(result)
    }
    
    return (
        <div>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3'>
                        <h1 className='text-center secondary pb-4 pt-1'>Category</h1>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Men')}>Men</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Women')}>Women</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Children')}>Children</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Footwear')}>Shoes</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setData(ProductArray)}>All</button>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {data.map((values) => {
                                const { id, title, price, img } = values
                                return (
                                    <> 
                                        <div className='col-md-4 mb-4' key={id}>
                                            <div className="card">
                                                <img src={img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-title text-muted">{title}</p>
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
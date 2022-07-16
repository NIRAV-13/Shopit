import React, { Component, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import GiftcardArray from '../Giftcards/GiftcardArray'
import AddGiftcard from './AddGiftcard'

const Table = () => {
    const [giftcards, setGiftcards] = useState(GiftcardArray)
    const [search, setSearch] = useState('')
    const [filteredGiftcards, setFilteredGiftcards] = useState([])

    useEffect(() => {
        
        setFilteredGiftcards(GiftcardArray)
    }, []);

    useEffect(() => {
        const result = giftcards.filter(giftcard => {
            return giftcard.title.toLowerCase().match(search.toLowerCase())
        })
        setFilteredGiftcards(result)
    }, [search]);

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.id,
        },
        {
            name: 'Brand',
            selector: (row) => row.brand,
            sortable: true,
        },
        {
            name: 'Title',
            selector: (row) => row.title,
        },
        {
            name: 'Category',
            selector: (row) => row.category,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
        },
        {
            name: 'Action',
            cell: (row) => <button className='btn btn-primary' onClick={() => alert(row.id)}>Edit</button>
        },
    ]

    return (

        <div>
            

            <DataTable
            title="Product List"
            columns={columns}
            data={filteredProducts}
            pagination
            // fixedHeader
            // fixedHeaderScrollHeight='400px'
            selectableRows
            // selectableRowsHighlight
            highlightOnHover
                // actions={<button className='btn btn-sm btn-info' onClick={() => alert("Add product")}>Add Product</button>}
            subHeader

            subHeaderComponent={
                <><div className='addbutton ' style={{ marginRight: 'auto' }}>
                    <button className='btn btn-primary' onClick={() => alert("Add product")}>Add Product</button>
                    {/* <AddProduct></AddProduct> */}
                </div>
                    <input
                        type='search'
                        placeholder='search'
                        className='w-25 form-control'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </>

            }
            />
        </div>

    )
}

export default Table;
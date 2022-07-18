
import React, { Component, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import GiftcardArray from '../Giftcards/GiftcardArray'
import './AddGiftcard.css'
import { Link, useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import constants from "../../constants/constants"

const baseURL = constants.API_BASE_URL;

const AddGiftcard = () => {

    const [giftcardName, setGiftcardName] = useState('')
    const [giftcardBrand, setGiftcardBrand] = useState('')
    const [giftcardPrice, setGiftcardPrice] = useState('')
    const [giftcardDesc, setGiftcardDesc] = useState('')
    const [giftcardImg, setGiftcardImg] = useState('')
    const [giftcardCategory, setGiftcardCategory] = useState('')
    const [error, setError] = useState('')
    const [url, setUrl] = useState('')
    const [image, setImage] = useState('')

    const types = ['image/png', 'image/jpeg']

    const giftcardImgHandler = (e) => {
        console.log(e.target.files[0])
        let selectedFile = e.target.files[0];
        setGiftcardImg(selectedFile)
        if (selectedFile && types.includes(selectedFile.type)) {
            setGiftcardImg(selectedFile);
            setError('');
        }
        else {
            setGiftcardImg(null);
            setError('Please select a png or jpeg image!');
        }

        setFileToBase(selectedFile)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setGiftcardImg(reader.result)
        }
    }

    const handleFile = (e) => {
        setImage(e.target.files[0])
    }

    // const postDetails = () => {
    //     const data = new FormData()
    //     data.append("file", image)
    //     data.append("upload_preset", "shopit")
    //     // data.append("cloud_name", "dlgnkj2h8")
    //     fetch('https://api.cloudinary.com/v1_1/dlgnkj2h8/image/upload',
    //         {
    //             method: 'POST',
    //             body: data
    //         }
    //     ).then(res => res.json())
    //         .then(data => { setUrl(data.url.secure_url); console.log(data);  })
    //         .catch(err => { console.log(err) })
    // }

    const add_Giftcard = (e) => {
        e.preventDefault()
        console.log("first:",url)
        postDetails()
        console.log("second:", url)
        const newGiftcard = {
            giftcardName: giftcardName,
            giftcardBrand: giftcardBrand,
            giftcardCategory: giftcardCategory,
            giftcardPrice: giftcardPrice,
            giftcardDescription: giftcardDesc,
            giftcardImage: url,
        }

        console.log(newGiftcard)

        axios.post(baseURL + '/addgiftcard', newGiftcard)
        setGiftcardName('')
        setGiftcardBrand('')
        setGiftcardDesc('')
        setGiftcardPrice('')
        setGiftcardCategory('')
        setGiftcardImg('')
        setUrl('')

    }


    return (

        <div className='container'>
            <h2>Add Giftcards</h2>
           
            <Form autoComplete='off' onSubmit={add_Giftcard}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        // className='w-50'
                        type="text"
                        placeholder='Title'
                        required
                        value={giftcardName}
                        onChange={(e) => setGiftcardName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        className='col-lg-4 col-md-4 col-sm-4 container justify-content-center'
                        type="text"
                        placeholder='Brand'
                        required
                        value={giftcardBrand}
                        onChange={(e) => setGiftcardBrand(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Category</Form.Label>
                    <Form.Select required value={giftcardCategory} onChange={(e) => setGiftcardCategory(e.target.value)}>
                        <option value="" hidden></option>
                        <option value="Shopping">Shopping</option>
                        <option value="Movie">Movie</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Medicines">Medicines</option>
                        <option value="Food">Food</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder='Price'
                        required
                        value={giftcardPrice}
                        onChange={(e) => setGiftcardPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder='Description'
                        rows={2}
                        onChange={(e) => setGiftcardDesc(e.target.value)}
                        value={giftcardDesc}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder='Image'
                        name='image'
                        required
                        onChange={giftcardImgHandler}
                    
                    />
                   
                </Form.Group>
              
                <Button type='submit' className='btn btn-primary btn-md mybtn'>Add Gift Card</Button>
            </Form>
            {error && <span>{error}</span>}


        </div>




    )
}

export default AddGiftcard;
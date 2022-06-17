import React, { useContext, useEffect, useState } from "react";
import { AppBar, Button, Card, CardActions, CardContent, Divider, Grid, TextField, Toolbar } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Input from '@mui/material/Input';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavBar from "../NavBar/NavBar";




const Cart = () => {
    const [item, setItem] = useState([])
    const products = [
        {
            id: 1,
            title: "Girl's pink dress",
            size: "M",
            price: "70",
            img: "https://cdn1.bambinifashion.com/img/p/6/3/0/2/6/1/630261--product-gallery@2x.jpg",
            quantity: 1,
        },
        {
            id: 2,
            title: "Black solid  Tshirt",
            size: "M",
            price: "50",
            img: "https://litb-cgis.rightinthebox.com/images/640x640/202104/bps/product/inc/eqkbos1619506375027.jpg",
            quantity: 1,
        },
        {
            id: 3,
            title: "Woman black dress",
            size: "M",
            price: "50",
            img: "https://m.media-amazon.com/images/I/61r9H4nG8xL._AC_UX679_.jpg",
            quantity: 1,
        },
        {
            id: 4,
            title: "Levis jeans slimfit",
            size: "40",
            price: "50",
            img: "https://image.s5a.com/is/image/TheBay/0057064729156_main?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
            quantity: 1,
        }

    ]
    useEffect(() => {
        setItem(products);
    }, [])

    return (<>
        <NavBar></NavBar>
        <Grid  direction={"row"} xs={8} spacing={2}>
            <TableContainer component={Paper} sx={{ width: "95%", mt: 3, ml: 2 }}>
                <Table sx={{ mt: 4 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"><b>Product</b></TableCell>
                            <TableCell align="left"><b>Title</b></TableCell>
                            <TableCell align="left"><b>Size</b></TableCell>
                            <TableCell align="left"><b>Quantity</b></TableCell>
                            <TableCell align="left"><b>Price</b></TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {item.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left" sx={{ width: "20vw" }}>
                                    <img alt="new" src={row.img} style={{ width: "20%", height: "20%" }}></img>
                                </TableCell>
                                <TableCell align="left" sx={{ width: "20vw" }}>{row.title}</TableCell>
                                <TableCell align="left">{row.size}</TableCell>
                                <TableCell align="left" ><RemoveSharpIcon sx={{ fontSize: "small" }} /><Input type="quantity" defaultValue={row.quantity} size="small" inputProps={{ style: { textAlign: 'center' } }}


                                    sx={{ width: 40 }}>{row.quantity}</Input><AddSharpIcon sx={{ fontSize: "small" }} /></TableCell>
                                <TableCell align="left" >${row.price}</TableCell>
                                <TableCell align="left"> <ClearSharpIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Grid container direction="row" sx={{ flexGrow: 1 }} spacing={2}>
                <Grid item xs={4} ml={2}>

                    <Card sx={{ position: "sticky", mt: 3, mb: 3 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" align="left" gutterBottom>
                                <b> Apply Coupon </b>
                            </Typography>
                            <TextField id="outlined-basic" variant="outlined" sx={{ height: 2, minWidth: "9%" }} fullWidth />
                            <Typography variant="body2">
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" color="error" sx={{ ml: 1, mb: 1 }}> Apply</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} ml={2}>
                    <Card sx={{ position: "sticky", mt: 3, mb: 3 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h5" align="left" gutterBottom>
                                <b> Order Summary </b>
                            </Typography>
                            <Divider />
                            <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: 12 }}>
                                <b>Sub-total(3 items)</b> &emsp; $980
                            </Typography>
                            <Typography variant="body2" align="left" sx={{ fontSize: 12 }}>
                                <b>Shipping Charges</b> &emsp; $10
                            </Typography>
                            <Typography variant="body2" align="left" sx={{ fontSize: 12 }}>
                                <b>Total</b> &emsp; $1000
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button sx={{ ml: 1, mb: 1 }} size="small" variant="outlined" >Checkout </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    </>
    )
}
export default Cart;
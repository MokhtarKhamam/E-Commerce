import React from 'react'
import { Grid, Typography, Container, Button } from '@mui/material'
import CartItem from "./CartItem/CartItem";
import "./cart.css"
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUodateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no utem in your shopping cart,
            <Link to="/">Start adding some</Link>
         !</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3} sx={{mb : 9}}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <CartItem item = {item} handleUodateCartQty = {handleUodateCartQty} handleRemoveFromCart = {handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className='cart-div'>
                <Typography variant='h4'>Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button variant='contained' type='button' color='secondary' size='large' onClick={handleEmptyCart} sx={{mr : 4, ["@media (max-width:768px)"] : {marginBottom : "10px"}}}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" variant='contained' type='button' color='primary' size='large' >Checkout</Button>
                </div>
            </div>
        </>
    )
    if(!cart.line_items){return "Loading ..."}

  return (
    <Container sx={{mt : 9}}>
      <Typography variant='h3' gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.total_items ? <EmptyCart /> : <FilledCart />}  
    </Container>
  )
}

export default Cart

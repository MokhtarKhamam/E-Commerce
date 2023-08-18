import React from 'react';
import { Button, Card, CardActions, CardMedia, CardContent, Typography } from "@mui/material";
import "./CartItem.css"
import { Transform } from '@mui/icons-material';


const CartItem = ({ item, handleUodateCartQty, handleRemoveFromCart }) => {
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} sx={{height : "240px",transform : "scale(0.7)",  "&:hover" : {transform : "scale(1)", transition : "0.5s"}}} />
        <CardContent sx={{display : "flex", justifyContent : "space-between"}}>
            <Typography variant='h5'>{item.name}</Typography>
            <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions sx={{display : "flex", justifyContent : "space-between"}}>
            <div className='card-item-div'>
                <Button size='small' type='button' onClick={() => handleUodateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button size='small' type='button' onClick={() => handleUodateCartQty(item.id, item.quantity + 1)}>+</Button>
            </div>
            <Button variant='contained' type='button' size='large' color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem

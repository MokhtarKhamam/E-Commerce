import React from 'react'
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material'

const PaymentForm = ({checkoutToken, backStep}) => {
  return (
    <>
        <Typography variant='h6' gutterBottom>Order Summary</Typography> 
        <List disablePadding>
          {checkoutToken.line_items.map((product) => (
            <ListItem style={{padding : "10px 0px"}} key={product.name}>
              <ListItemText primary={product.name} secondary={`Quantity : ${product.quantity}`} />
              <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
            </ListItem>
          ))}
          <ListItem>
            <ListItemText primary="Total" />
            <Typography variant='subtitle1' style={{fontWeight : 700}}>{checkoutToken.subtotal.formatted_with_symbol}</Typography>
          </ListItem>
        </List>
        <br />
        <div style={{display : "flex", justifyContent : "space-between"}}>
          <Button variant='outlined' onClick={backStep}>Back</Button>
          <Button variant='contained' color='secondary'>Pay</Button>
        </div>
    </>
  )
}

export default PaymentForm
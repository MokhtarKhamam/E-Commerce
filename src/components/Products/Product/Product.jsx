import React from 'react'
import { Card, CardActions, CardMedia, CardContent, IconButton, Typography } from '@mui/material' 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./product.css";

function Product({ product, onAddToCart }) {
  return (
    <div>
      <Card sx={{height : "400px"}}>
        <CardMedia image={product.image.url} title={product.name} component="img" sx={{height : "200px"}}/>
        <CardContent>
            <div className='product-content'>
                <Typography variant='h5' gutterBottom >{product.name}</Typography>
                <Typography variant='h5'> {product.price.formatted_with_symbol}</Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html:product.description }} variant='body2' color="textSecondary" />
        </CardContent>
        <CardActions>
            <IconButton aria-label='Add To Card' onClick={() => {onAddToCart(product.id, 1)}}>
                <AddShoppingCartIcon />
            </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product

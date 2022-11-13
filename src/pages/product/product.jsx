import { products } from '../catalog/products'
import './product.css'

import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Grid, Typography, Button, TextField, IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { productsCart } from '../cart/products-cart'

const Product = () => {
  const params = useParams()
  const productId = params.id
  const product = products[productId]
  const [currentImage, setCurrentImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)

  const setImageToView = position => {
    setCurrentImage(product.images[position])
  }

  const changeQuantityButton = value => {
    if (quantity >= 0) {
      let result = quantity + value
      if (result === -1) {
        result = 0
      }
      setQuantity(result)
    }
  }

  return (
    <Grid
      container
      spacing={2}
      style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        className="imageSide"
        style={{ padding: '15px' }}
      >
        <Stack className="imageSide_main">
          <img src={currentImage} alt="" />
        </Stack>
        <Stack direction="row" className="imageSide_secondaries">
          {product.images.map((image, idx) => (
            <img onClick={() => setImageToView(idx)} src={image} alt="" />
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={7}
        className="productInfos"
        style={{ paddingRight: '15px' }}
      >
        <Typography variant="h4" component="h1" className="productInfosTitle">
          {product.name}
        </Typography>
        <Stack
          direction="row"
          style={{ margin: '20px 5px', justifyContent: 'center' }}
        >
          <Typography
            variant="p"
            component="p"
            className="productInfosPrice"
            style={{
              color: product.promoPrice ? '#D67BA8' : '#5F093D',
              textDecoration: product.promoPrice ? 'line-through' : 'none'
            }}
          >
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </Typography>
          {product.promoPrice ? (
            <Typography variant="p" component="p" className="productInfosPromo">
              {product.promoPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}
            </Typography>
          ) : (
            ''
          )}
        </Stack>
        <Typography
          variant="p"
          component="p"
          className="productInfosDescription"
        >
          {product.description}
        </Typography>
        <Typography
          variant="small"
          component="small"
          className="productInfosInfos"
        >
          {product.infos}
        </Typography>
        <Stack
          direction="column"
          style={{ margin: '20px 5px', justifyContent: 'center' }}
        >
          <div className="productInfosQuantity">
            <IconButton onClick={() => changeQuantityButton(-1)}>
              <RemoveIcon color="secondary" />
            </IconButton>
            <TextField
              size="small"
              className="productInfosQuantityInput"
              type="number"
              color="primary"
              value={quantity}
              onchange={event => {
                setQuantity(event.target.value)
              }}
            ></TextField>
            <IconButton onClick={() => changeQuantityButton(+1)}>
              <AddIcon color="secondary" />
            </IconButton>
          </div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ShoppingCart />}
            className="productInfosBuy"
            onClick={() => {
              if (productsCart[productId]) {
                productsCart[productId].quantity += quantity
              } else {
                productsCart[productId] = {
                  ...product,
                  quantity: quantity
                }
              }
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Product

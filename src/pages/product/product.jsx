import { products } from '../catalog/products'
import './product.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  Grid,
  Typography,
  Link,
  Button,
  TextField,
  IconButton
} from '@mui/material'
import { Stack } from '@mui/system'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Product = () => {
  const params = useParams()
  const product = products[params.id]
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
      <Grid item xs={12} sm={5} className="imageSide">
        <Stack className="imageSide_main">
          <img src={currentImage} />
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
              color: product.promoPrice ? '#FA63B5' : '#121F4E',
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
              <RemoveIcon />
            </IconButton>
            <TextField
              size="small"
              className="productInfosQuantityInput"
              type="number"
              color="secondary"
              value={quantity}
              onchange={event => {
                setQuantity(event.target.value)
              }}
            ></TextField>
            <IconButton onClick={() => changeQuantityButton(+1)}>
              <AddIcon />
            </IconButton>
          </div>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ShoppingCart />}
            className="productInfosBuy"
          >
            Adicionar ao Carrinho
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Product

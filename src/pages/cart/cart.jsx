import { productsCart } from './products-cart'
import './cart.css'
import { calculatePromo, calculateTotal } from '../utils/calculate'

import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Stack,
  Typography,
  TextField,
  Button
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [change, setChange] = useState(0)
  const values = Object.keys(productsCart).map(id => {
    let qtd = productsCart[id].quantity
    return [productsCart[id].price * qtd, productsCart[id].promoPrice * qtd]
  })

  const totalValue = calculateTotal(values)
  const promoValue = calculatePromo(values)

  return (
    <Grid
      className="cartProductsGrid"
      container
      spacing={2}
      sx={{ boxSizing: 'borderBox', padding: '10px', maxWidth: '100%' }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" component="h5" sx={{ color: '#5F093D' }}>
          Carrinho de Compras
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          padding: '10px'
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '4px 4px 12px 2px rgba(0,0,0,0.4)'
          }}
        >
          <List sx={{ width: '100%', boxSizing: 'borderBox' }}>
            {Object.keys(productsCart).map(id => {
              return (
                <ListItem className="productField" style={{ maxWidth: '100%' }}>
                  <ListItemAvatar>
                    <img
                      className="productImage"
                      src={productsCart[id].images[0]}
                      alt=""
                    />
                  </ListItemAvatar>
                  <Stack
                    className="descriptionField"
                    direction="row"
                    style={{ width: '100%' }}
                  >
                    <Stack direction="column" sx={{ flexGrow: 5 }}>
                      <Typography
                        className="productTitleCart"
                        sx={{ display: 'inline' }}
                        component="h6"
                        variant="h6"
                      >
                        {productsCart[id].name}
                      </Typography>
                      <Typography
                        className="productDescriptionCart"
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                      >
                        {productsCart[id].description.substring(0, 70)} ...
                      </Typography>
                    </Stack>
                    <Stack
                      className="cartPrice"
                      direction="row"
                      sx={{
                        margin: '10px 20px',
                        fontWeight: 'bold',
                        alignItems: 'center'
                      }}
                    >
                      <Typography
                        className="productInfosPriceCart"
                        sx={{ display: 'inline' }}
                        component="p"
                        variant="p"
                        style={{
                          color: productsCart[id].promoPrice
                            ? '#D67BA8'
                            : '#5F093D',
                          textDecoration: productsCart[id].promoPrice
                            ? 'line-through'
                            : 'none'
                        }}
                      >
                        {productsCart[id].price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </Typography>
                      {productsCart[id].promoPrice ? (
                        <Typography
                          sx={{ display: 'inline', color: '#5F093D' }}
                          variant="p"
                          component="p"
                          className="productInfosPromoCart"
                        >
                          {productsCart[id].promoPrice.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                          })}
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </Stack>
                    <Stack
                      className="quantityField"
                      direction="row"
                      sx={{ alignItems: 'center' }}
                    >
                      <TextField
                        size="small"
                        className="productInfosQuantityInputCart"
                        type="number"
                        color="primary"
                        value={productsCart[id].quantity}
                        onChange={event => {
                          const quantity = Number(event.target.value)
                          if (quantity < 1) {
                            return
                          }
                          productsCart[id].quantity = quantity
                          setChange(change + 1)
                        }}
                      ></TextField>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        sx={{
                          alignItems: 'center',
                          justifyContent: 'space-evenly'
                        }}
                        onClick={() => {
                          delete productsCart[id]
                          setChange(change + 1)
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                </ListItem>
              )
            })}
          </List>
        </div>
      </Grid>
      <Grid item xs={12} md={4} sx={{}}>
        <div
          style={{
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '4px 4px 12px 2px rgba(0,0,0,0.4)',
            padding: '10px'
          }}
        >
          <ul className="paymentList">
            <li className="paymentListItem">
              <span>Subtotal:</span>
              <span className="paymentListItemValue">
                {totalValue.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </li>
            <li className="paymentListItem">
              <span>Desconto:</span>
              <span className="paymentListItemValue">
                {(totalValue - promoValue).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </li>
            <li className="paymentListItem">
              <span>Total a pagar:</span>
              <span className="paymentListItemValue">
                {promoValue.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </li>
          </ul>
          <Link to="/checkout">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="productInfosBuy"
            >
              Finalizar Pedido
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  )
}

export default Cart

import './checkout.css'
import { productsCart } from '../cart/products-cart'
import { calculatePromo, calculateTotal } from '../utils/calculate'

import { userIsLoggedIn } from '../../services/auth/auth'

import { useEffect } from 'react'

import {
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
  Divider
} from '@mui/material'

const Checkout = () => {
  const values = Object.keys(productsCart).map(id => {
    let qtd = productsCart[id].quantity
    return [productsCart[id].price * qtd, productsCart[id].promoPrice * qtd]
  })

  const totalValue = calculateTotal(values)
  const promoValue = calculatePromo(values)

  useEffect(() => {
    userIsLoggedIn()
  })
  return (
    <Grid container spacing={2} sx={{ padding: '15px' }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5" sx={{ color: '#5F093D' }}>
          Checkout
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <div
          style={{
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '4px 4px 12px 2px rgba(0,0,0,0.4)',
            padding: '15px'
          }}
        >
          <Stack>
            <Grid item xs={12}>
              <span className="checkoutTitle">Informações Pessoais</span>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    label="Nome"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    label="Sobrenome"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    label="CPF"
                    size="small"
                    type="tel"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    label="Telefone"
                    size="small"
                    type="tel"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label=" E-mail"
                    size="small"
                    type="email"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    variant="standard"
                    label="Endereço"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    variant="standard"
                    label="Nº"
                    size="small"
                    type="tel"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    variant="standard"
                    label="Complemento"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    variant="standard"
                    label="CEP"
                    size="small"
                    type="tel"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    variant="standard"
                    label="Bairro"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    variant="standard"
                    label="Cidade"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    variant="standard"
                    label="Estado"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '20px' }}>
              <span className="checkoutTitle">Detalhes do Pagamento</span>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Nome impresso no cartão"
                    size="small"
                    type="text"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Número do Cartão"
                    size="small"
                    type="tel"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard"
                    label="CVV"
                    size="small"
                    type="password"
                    className="checkoutTextField"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    variant="standard"
                    label="Vencimento"
                    size="small"
                    type="date"
                    className="checkoutTextField"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </div>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <div
          style={{
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '4px 4px 12px 2px rgba(0,0,0,0.4)',
            padding: '10px'
          }}
        >
          <Typography className="checkoutTitle">Detalhes da Compra</Typography>
          <ul className="checkoutList">
            {Object.keys(productsCart).map((id, idx) => {
              const product = productsCart[id]
              const price = product.promoprice
                ? product.promoprice
                : product.price
              return (
                <li key={idx} className="checkoutListItem">
                  <span>{`${product.quantity}x ${product.name}`}</span>
                  <span>
                    {(product.quantity * price).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </li>
              )
            })}
          </ul>
          <Divider variant="middle" />
          <ul className="checkoutList">
            <li className="checkoutListItemValues">
              <span>Subtotal</span>
              <span>
                {totalValue.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </li>
            <li className="checkoutListItemValues">
              <span>Descontos</span>
              <span>
                {(totalValue - promoValue).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </li>
            <li className="checkoutListItemValues">
              <span>Total a pagar</span>
              <span>
                {promoValue.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </li>
          </ul>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="productInfosBuy"
          >
            Realizar Pagamento
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default Checkout

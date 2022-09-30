import { products } from './products'
import './catalog.css'

import { Grid, Typography, Button, Badge, Stack } from '@mui/material'

import { Link } from 'react-router-dom'

const Catalog = () => {
  return (
    <Grid container spacing={3} style={{ padding: '15px' }}>
      {Object.keys(products).map(id => {
        return (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column'
            }}
          >
            <span
              className="promoTag"
              style={{
                visibility: products[id].promoPrice ? 'visible' : 'hidden'
              }}
            >
              {' '}
              OFERTA{' '}
            </span>
            <img style={{ width: '100%' }} src={products[id].images[0]} />
            <Typography variant="h5" component="h5" className="productTitle">
              {products[id].name}
            </Typography>
            <Typography
              variant="p"
              component="p"
              className="productDescription"
            >
              {products[id].description.substring(0, 100)}...
            </Typography>
            <Stack
              direction="row"
              style={{ marginBottom: '5px', justifyContent: 'center' }}
            >
              <Typography
                variant="small"
                component="small"
                className="productPrice"
                style={{
                  color: products[id].promoPrice ? '#FA63B5' : '#121F4E',
                  textDecoration: products[id].promoPrice
                    ? 'line-through'
                    : 'none'
                }}
              >
                {products[id].price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </Typography>
              {products[id].promoPrice ? (
                <Typography
                  variant="small"
                  component="small"
                  className="productPromoPrice"
                >
                  {products[id].promoPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Typography>
              ) : (
                ''
              )}
            </Stack>
            <Link to={'../product/' + id}>
              <Button fullWidth variant="contained" color="secondary">
                Ver produto
              </Button>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Catalog

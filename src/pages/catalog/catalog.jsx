import { products } from './products'
import './catalog.css'

import { Grid, Typography, Button, Badge, Stack } from '@mui/material'

import { Link } from 'react-router-dom'

const Catalog = () => {
  return (
    <Grid container spacing={3} style={{ padding: '10px' }}>
      {Object.keys(products).map(id => {
        return (
          <Grid item xs={12} sm={4} md={4} lg={3} sx={{ position: 'relative' }}>
            <span className="promoTag"> OFERTA </span>
            <img style={{ width: '100%' }} src={products[id].image} />
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
              >
                {products[id].price}
              </Typography>
              <Typography
                variant="small"
                component="small"
                className="productPromoPrice"
              >
                {products[id].promoPrice}
              </Typography>
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

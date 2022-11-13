import { Grid, Typography, Stack } from '@mui/material'
import './not-found.css'

const NotFound = () => {
  return (
    <Grid sx={{ backgroundColor: '#D67BA8', height: '100vh' }}>
      <Stack spacing={4} sx={{ alignItems: 'center', paddingTop: '100px' }}>
        <Typography className="notFoundOps" variant="h3" component="h3">
          Oops...
        </Typography>
        <Typography className="notFoundTitle" variant="h1" component="h1">
          404
        </Typography>
        <Typography className="notFoundPhrase" variant="h3" component="h3">
          Sorry, the page not found.
        </Typography>
        <Typography className="notFoundFace" variant="h3" component="h3">
          :(
        </Typography>
      </Stack>
    </Grid>
  )
}

export default NotFound

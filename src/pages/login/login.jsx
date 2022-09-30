import './login.css'

import cover from '../../assets/img/cover-login.png'
import logo from '../../assets/img/logo.png'

import {
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material'

import LoginIcon from '@mui/icons-material/Login'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
  const [visibilityToggle, setVisibilityToggle] = useState(false)

  const toggleVisibility = () => {
    setVisibilityToggle(!visibilityToggle)
  }

  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      <Grid
        className="leftSide"
        item
        sx={{
          boxSizing: 'border-box'
        }}
        xs={12}
        sm={7}
      >
        <Stack
          spacing={2}
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '20px',
            paddingRight: '20px'
          }}
        >
          <img src={cover} alt="Logo" style={{ width: '100%' }} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Stack
          spacing={2}
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '20px',
            paddingRight: '20px'
          }}
        >
          <img className="logoPrincipal" src={logo} alt="Logo" />
          <h2 className="loginTitle">Entre com seu usuário</h2>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%', marginBottom: '10px' }}>
                <InputLabel color="secondary">Senha</InputLabel>
                <OutlinedInput
                  color="secondary"
                  fullWidth
                  label="Senha"
                  type={visibilityToggle ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Clique para exibir"
                        onClick={toggleVisibility}
                      >
                        {visibilityToggle ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Link to="/catalog">
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  endIcon={<LoginIcon />}
                >
                  Entrar
                </Button>
              </Link>
            </Grid>
            <Link
              style={{
                textAlign: 'center',
                display: 'block',
                width: '100%',
                marginTop: '5px',
                marginBottom: '10px',
                color: '#121F4E'
              }}
              to="/register"
            >
              Criar conta
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Login

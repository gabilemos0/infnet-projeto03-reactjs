import './login.css'

import imgLogin from '../../assets/img/imgLogin.png'

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
    <Grid container sx={{ justifyContent: 'center', marginTop: '50px' }}>
      <Stack
        spacing={2}
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '50px',
          paddingRight: '50px'
        }}
      >
        <img src={imgLogin} alt="imgLogin" style={{ width: '30%' }} />
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
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ width: '100%', marginBottom: '10px' }}>
              <InputLabel color="primary">Senha</InputLabel>
              <OutlinedInput
                color="primary"
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
                color="primary"
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
              color: '#5F093D'
            }}
            to="/register"
          >
            Criar conta
          </Link>
        </Grid>
      </Stack>
    </Grid>
  )
}

export default Login

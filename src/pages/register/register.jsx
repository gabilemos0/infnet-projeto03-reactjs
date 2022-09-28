import '../../assets/css/auth.css'

import cover from '../../assets/img/cover-register.png'
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

const Register = () => {
  const [visibilityToggle, setVisibilityToggle] = useState(true)

  const toggleVisibility = () => {
    setVisibilityToggle(!visibilityToggle)
  }

  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      <Grid
        className="leftSide"
        item
        sx={{
          padding: '10px',
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
          <img src={cover} style={{ width: '100%' }} alt="Logo" />
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
          <img src={logo} style={{ width: '30%' }} alt="Logo" />
          <h2 className="loginTitle">Crie sua conta</h2>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Usuário"
                type="text"
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ margin: '10px 0px' }}
                fullWidth
                label="E-mail"
                type="email"
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
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
              <TextField
                sx={{ margin: '10px 0px' }}
                fullWidth
                label="Repetir Senha"
                type={visibilityToggle ? 'text' : 'password'}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                endIcon={<LoginIcon />}
              >
                Registrar
              </Button>
            </Grid>
            <Link
              style={{
                textAlign: 'center',
                display: 'block',
                width: '100%',
                marginTop: '5px',
                color: '#121F4E'
              }}
              to="/login"
            >
              Entrar
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Register

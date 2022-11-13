import './register.css'

import cover from '../../assets/img/cover-register.png'
import registerIcon from '../../assets/img/register-icon.png'

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
    <Grid
      container
      spacing={2}
      style={{ height: '100vh' }}
      className="registerPage"
    >
      <Grid
        className="leftSide"
        item
        sx={{
          padding: '10px',
          boxSizing: 'border-box'
        }}
        xs={12}
        sm={6}
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
          <img className="coverRegister" src={cover} alt="Logo" />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack
          spacing={2}
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 90px'
          }}
        >
          <img className="registerIcon" src={registerIcon} alt="Logo" />
          <h2 className="RegisterTitle">Crie sua conta</h2>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Usuário"
                type="text"
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ margin: '10px 0px' }}
                fullWidth
                label="E-mail"
                type="email"
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
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
              <TextField
                sx={{ margin: '10px 0px' }}
                fullWidth
                label="Repetir Senha"
                type={visibilityToggle ? 'text' : 'password'}
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <Link to="/catalog">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  endIcon={<LoginIcon />}
                >
                  Registrar
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

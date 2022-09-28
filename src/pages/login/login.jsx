import cover from '../../assets/img/cover-login.png';
import { Grid, Box, TextField, Button, Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  return  <Grid container spacing={2} style={{height: '100vh'}}>
            <Grid item sx={{
              padding: '10px',
              boxSizing: 'border-box',
            }} xs={12} md={7} lg={8}>
              <Stack spacing={2} style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}>
              <img src={cover} style={{width: '100%'}} alt='Logo'/>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Stack spacing={2} style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}>
                <h1>Entre com seu usuário</h1>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField fullWidth id="outlined-basic" label="E-mail" type='email' variant="outlined" margin="normal" color="secondary"/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth id="outlined-basic" label="Senha" type='password' variant="outlined" margin="normal"  color="secondary"/>   
                  </Grid>
                  <Grid item xs={12}>
                  <Button fullWidth variant="contained" color="secondary" endIcon={<LoginIcon />}>
  Entrar
</Button>
                  </Grid>
                </Grid>                              
              </Stack>
            </Grid>
          </Grid> 
}

export default Login;
import './App.css'
import logoLight from './assets/img/logo-light.png'

import { lazy, Suspense, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Avatar, IconButton } from '@mui/material/'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Logout from '@mui/icons-material/Logout'

const Login = lazy(() => import('./pages/login/login'))
const Register = lazy(() => import('./pages/register/register'))
const Catalog = lazy(() => import('./pages/catalog/catalog'))
const Cart = lazy(() => import('./pages/cart/cart'))
const Checkout = lazy(() => import('./pages/checkout/checkout'))
const Product = lazy(() => import('./pages/product/product'))
const NotFound = lazy(() => import('./pages/not-found/not-found'))

function App() {
  useEffect(() => {}, [])
  const location = useLocation()
  const hasIcons =
    location.pathname !== '/login' && location.pathname !== '/register'
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <IconButton>
            <Link to="/catalog">
              <Avatar alt="logo" src={logoLight} />
            </Link>
          </IconButton>
          {hasIcons ? (
            <div>
              <IconButton>
                <Link to="/cart">
                  <ShoppingCart style={{ color: '#fff' }} />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="/login">
                  <Logout style={{ color: '#fff' }} />
                </Link>
              </IconButton>
            </div>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
      <Suspense fallback={'Carregando...'}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

const RouteApp = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default RouteApp

import { useParams } from 'react-router-dom'
import { products } from '../catalog/products'

const Product = () => {
  const params = useParams()
  return <h1>{products[params.id].name}</h1>
}

export default Product

import { Link } from 'react-router-dom'
import AppRoutes from '../routes/AppRoutes'

function App () {
  return (
    <div className='App'>
      <p>Soy Navbar junto con los links ggg</p>
      <Link to='/WADMarket/products/'>Productos</Link>
      <Link to='/WADMarket/products/ffff'>Producto</Link>
      <Link to='/WADMarket/user/signin'>SignIn</Link>
      <Link to='/WADMarket/user/signup'>SignUp</Link>
      <AppRoutes />
    </div>
  )
}

export default App

import { Outlet, Link } from 'react-router-dom'
function App () {
  return (
    <div className='App'>
      <p>Me tengo que mantener sere Navbar</p>
      <Link to='/WADMarket/market/products/'>Productos</Link>
      <Link to='/WADMarket/market/products/ffff'>Producto</Link>
      <Link to='/WADMarket/user/signin'>SignIn</Link>
      <Link to='/WADMarket/user/signup'>SignUp</Link>
      <Outlet />
    </div>
  )
}

export default App

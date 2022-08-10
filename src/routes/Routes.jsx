import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import App from '../pages/App'
import Product from '../components/Product'
import Products from '../components/Products'
import User from '../pages/User'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Paths = () => {
  return (
    <section className='container-fluid'>
      <Routes>
        <Route path='WADMarket' element={<Outlet />}>
          <Route path='market' element={<App />}>
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<Product />} />
          </Route>
          <Route path='user' element={<User />}>
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='' element={<Navigate to='/WADMarket/market/products/' />} />
            <Route path='*' element={<Navigate to='/WADMarket/market/products/' />} />
          </Route>
          <Route path='' element={<Navigate to='/WADMarket/market/products/' />} />
          <Route path='*' element={<Navigate to='/WADMarket/market/products/' />} />
        </Route>
      </Routes>
    </section>
  )
}

export default Paths

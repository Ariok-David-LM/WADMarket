import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import App from '../pages/App'
import User from '../pages/User'

const Paths = () => {
  return (
    <section>
      <Routes>
        <Route path='/WADMarket' element={<Outlet />}>
          <Route path='' element={<Navigate to='/WADMarket/products' />} />
          <Route path='products/*' element={<App />} />
          <Route path='user/*' element={<User />} />
          <Route path='*' element={<p>No existe este 1</p>} />
        </Route>
      </Routes>
    </section>
  )
}

export default Paths

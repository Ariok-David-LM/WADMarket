import { Routes, Route } from 'react-router-dom'
import Products from '../pages/Products'
import Product from '../pages/Product'

const AppRoutes = ({ items, loading }) => {
  return (
    <>
      <Routes>
        <Route index element={<Products items={items} loading={loading} />} />
        <Route path=':idProduct' element={<Product />} />
        <Route path='*' element={<h1>No existen mas paginas sobre este producto</h1>} />
      </Routes>
    </>
  )
}

export default AppRoutes

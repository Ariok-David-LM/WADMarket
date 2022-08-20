import Navbar from '../components/Navbar/Navbar'
import AppRoutes from '../routes/AppRoutes'
import { ProductProvider } from '../contexts/ProductContext'

function App () {
  return (
    <div className='App'>
      <ProductProvider>
        <Navbar />
        <AppRoutes />
      </ProductProvider>
    </div>
  )
}

export default App

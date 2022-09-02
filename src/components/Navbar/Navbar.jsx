import { usaProductContext } from '../../contexts/ProductContext'
import { useRef, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth'
import { usaSesionCartContext } from '../../contexts/SesionCartContext'
import ButonsNoStarted from './NavbarComponents/ButonsNoStarted'
import ButonsStarted from './NavbarComponents/ButonsStarted'

const Navbar = () => {
  // Constantes necesarias
  const { isAuth } = useContext(AuthContext)
  const context = usaProductContext()
  const carritoItems = usaSesionCartContext()
  const searchRef = useRef(null)
  const navigate = useNavigate()

  // Envia los datos de busqueda al contexto
  const handleSubmit = async (e) => {
    context.setSearch(searchRef.current.value)
    navigate('/WADMarket/products/')
  }

  const [botonCarro, setBotonCarro] = useState(false)

  const click = () => {
    if (botonCarro === false) {
      setBotonCarro(true)
    } else {
      setBotonCarro(false)
    }
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
      <div className='container-fluid d-flex'>
        <div className='container-fluid col-sm-3 col-6 order-1' href='#'>
          <Link to='/WADMarket/products' className='navbar-brand'>
            <img src='/WADMarket/assets/img/online-shopping.png' width={30} height={24} />
            WADMarket
          </Link>
        </div>
        <div className='d-flex container-fluid order-sm-2 order-3 col-sm-6 col-12 pt-sm-0 pt-2'>
          <input ref={searchRef} type='text' className='form-control' placeholder='Buscar WADMarket....' aria-label="Recipient's username" aria-describedby='button-addon2' />
          <button onClick={handleSubmit} className='btn btn-secondary' type='button' id='button-addon2'>Buscar</button>
        </div>
        <div className='d-flex justify-content-end container-fluid order-sm-3 order-2 col-sm-3 col-6'>
          <div>
            <button className='btn p-0 m-0 pe-2' type='button' id='dropdownMenuButton1' aria-expanded='false' onClick={click} style={{ border: 'none' }}>
              <img src='/WADMarket/assets/img/shopping-basket.png' width={39} />
            </button>
            <ul className={`dropdown-menu dropdown-menu-end me-4 ${botonCarro ? 'show' : ''}`} style={{ right: '40px', top: '55px', maxHeight: '300px', overflow: 'auto' }}>
              {carritoItems.cart.map((product) => (
                <li key={product._id}>
                  <div className='container-fluid d-flex flex-row justify-content-end bg-dark'>
                    <div className='container-fluid'>
                      {product.product_name}
                    </div>
                    <div className='ps-1'>
                      {`$${product.price}`}
                    </div>
                    <div
                      className='ps-1' onClick={() => {
                        const totales = carritoItems.cart.filter((producto) => {
                          return producto._id !== product._id
                        })
                        carritoItems.setCart(totales)
                      }}
                    >
                      <img src='/WADMarket/assets/img/cross.png' alt='eliminar' width='20px' />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {isAuth ? <ButonsStarted /> : <ButonsNoStarted />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ handleSubmit, searchRef }) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
      <div className='container-fluid d-flex'>
        <div className='container-fluid col-sm-3 col-6 order-1' href='#'>
          <Link to='/WADMarket/products' className='navbar-brand'>
            <img src='/assets/img/online-shopping.png' width={30} height={24} />
            WADMarket
          </Link>
        </div>
        <div className='d-flex container-fluid order-sm-2 order-3 col-sm-6 col-12 pt-sm-0 pt-2'>
          <input ref={searchRef} type='text' className='form-control' placeholder='Buscar WADMarket....' aria-label="Recipient's username" aria-describedby='button-addon2' />
          <button onClick={handleSubmit} className='btn btn-secondary' type='button' id='button-addon2'>Buscar</button>
        </div>
        <div className='d-flex justify-content-end container-fluid order-sm-3 order-2 col-sm-3 col-6'>
          <div>
            <Link to='/WADMarket/user/signin'>
              <div className='btn btn-dark fs-6 p-1 me-1'>Sign In</div>
            </Link>
            <Link to='/WADMarket/user/signup'>
              <div className='btn btn-dark fs-6 p-1'>Sign Up</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

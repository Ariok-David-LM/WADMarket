import React from 'react'
import { Link } from 'react-router-dom'

const ButonsNoStarted = () => {
  return (
    <>
      <button className='btn p-0 m-0 pe-2' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false' style={{ border: 'none' }}>
        <img src='/WADMarket/assets/img/enter.png' width={39} />
      </button>
      <ul className='dropdown-menu dropdown-menu-end me-4' aria-labelledby='dropdownMenuButton1'>
        <li>
          <Link to='/WADMarket/user/signin'>
            <div className='btn btn-dark fs-6 p-0 me-1 container-fluid'>Sign In</div>
          </Link>
        </li>
        <li>
          <Link to='/WADMarket/user/signup'>
            <div className='btn btn-dark fs-6 p-0 container-fluid'>Sign Up</div>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default ButonsNoStarted

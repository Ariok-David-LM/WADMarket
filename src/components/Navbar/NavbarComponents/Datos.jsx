import { useContext } from 'react'
import { AuthContext } from '../../../contexts/Auth'

const Datos = () => {
  const { dataState, logout } = useContext(AuthContext)

  return (
    <>
      <li>
        <div className='d-flex align-items-center flex-column bg-info rounded pt-2'>
          <img src='/WADMarket/assets/img/user.png' width={60} />
          <p className='p-0 m-1'>{dataState?.data?.first_name + ' ' + dataState?.data?.last_name}</p>
          <p className='p-0 m-1'>{dataState?.data?.gender === 'F' ? 'Gender: Female' : 'Gender: Male'}</p>
          <p className='p-0 m-1'>{`Email: ${dataState?.data?.email}`}</p>
        </div>
      </li>
      {dataState?.data?.role === 'ADMIN'
        ? <li><div className='btn btn-dark fs-6 p-0 container-fluid mt-2'>Create Item</div></li>
        : ''}
      <li>
        <div className='btn btn-dark fs-6 p-0 container-fluid mt-2' onClick={logout}>Log Out</div>
      </li>
    </>
  )
}

export default Datos

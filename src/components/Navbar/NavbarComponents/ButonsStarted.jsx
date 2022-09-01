import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/Auth'
import { getSingleUser } from '../../../services/UserServices'

const ButonsStarted = ({ admin }) => {
  const [boton, setBoton] = useState(false)
  const { logout, user } = useContext(AuthContext)
  const [usuario, setUsuario] = useState({})
  const click = () => {
    if (boton === false) {
      setBoton(true)
    } else {
      setBoton(false)
    }
  }

  const RecibeData = async () => {
    const data = await getSingleUser(user.id)
    setUsuario(data)
  }

  useEffect(() => {
    RecibeData()
  }, [])

  return (
    <>
      <button className='btn p-0 m-0 pe-3' type='button' id='dropdownMenuButton1' aria-expanded='false' style={{ border: 'none' }} onClick={click}>
        <img src='/assets/img/user.png' width={39} />
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${boton ? 'show' : ''}`} style={{ right: '40px', top: '55px' }}>
        <li>
          <div className='d-flex align-items-center flex-column bg-info rounded pt-2'>
            <img src='/assets/img/user.png' width={60} />
            <p className='p-0 m-1'>{usuario?.data?.first_name + ' ' + usuario?.data?.last_name}</p>
            <p className='p-0 m-1'>{usuario?.data?.gender === 'F' ? 'Gender: Female' : 'Gender: Male'}</p>
            <p className='p-0 m-1'>{`Email: ${usuario?.data?.email}`}</p>
          </div>
        </li>
        {usuario?.data?.role === 'ADMIN'
          ? <li><div className='btn btn-dark fs-6 p-0 container-fluid mt-2'>Create Item</div></li>
          : ''}
        <li>
          <div className='btn btn-dark fs-6 p-0 container-fluid mt-2' onClick={logout}>Log Out</div>
        </li>
      </ul>
    </>
  )
}

export default ButonsStarted

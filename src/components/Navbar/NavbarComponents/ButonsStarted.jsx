import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/Auth'
import { getSingleUser } from '../../../services/UserServices'
import Datos from './Datos'

const ButonsStarted = () => {
  const [boton, setBoton] = useState(false)
  const { setDataState, user } = useContext(AuthContext)

  const click = () => {
    if (boton === false) {
      setBoton(true)
    } else {
      setBoton(false)
    }
  }

  useEffect(() => {
    const traerUsuario = async (user) => {
      const token = window.sessionStorage.getItem('token')
      if (token) {
        const config = {
          headers: { Authorization: `JWT ${token}` }
        }
        const usuario = await getSingleUser(user.id, config)
        if (usuario) {
          setDataState(usuario)
        }
      }
    }
    traerUsuario(user)
  }, [])

  return (
    <>
      <button className='btn p-0 m-0 pe-3' type='button' id='dropdownMenuButton1' aria-expanded='false' style={{ border: 'none' }} onClick={click}>
        <img src='/WADMarket/assets/img/user.png' width={39} />
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${boton ? 'show' : ''}`} style={{ right: '40px', top: '55px' }}>
        <Datos />
      </ul>
    </>
  )
}

export default ButonsStarted

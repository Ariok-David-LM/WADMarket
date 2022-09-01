import { useContext } from 'react'
import SigninForm from '../components/SigninForm/SigninForm'
import { AuthContext } from '../contexts/Auth'
import { Navigate } from 'react-router-dom'

const SignIn = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <div className='conatiner-fluid d-flex justify-content-center p-4'>
      <div className='rounded text-white p-4' style={{ backgroundColor: '#7C8083' }}>
        {isAuth ? <Navigate to='/WADMarket/products/' /> : <SigninForm />}
      </div>
    </div>
  )
}

export default SignIn

import { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { LoginUser } from '../../services/UserServices'
import { AuthContext } from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom'

const SigninForm = () => {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await LoginUser(data)
      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/WADMarket/products/')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <>
      <div className='container-fluid text-center fs-4'>Sign in to WADMarket</div>
      <form className='form-group'>
        <div className='form-floating mb-3 text-dark mt-4'>
          <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' name='email' onChange={handleInputChange} value={input.email} />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating text-dark'>
          <input type='password' className='form-control' id='floatingPassword' placeholder='Password' name='password' onChange={handleInputChange} value={input.password} />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <div className='container-fluid mt-4 p-0'>
          <button type='button' className='container-fluid btn btn-success' onClick={handleSubmit}>
            LogIn
          </button>
        </div>
      </form>
    </>
  )
}

export default SigninForm

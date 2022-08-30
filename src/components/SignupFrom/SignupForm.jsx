import useForm from '../../hooks/useForm'
import { RegisterUser } from '../../services/UserServices'
import { useNavigate, Link } from 'react-router-dom'

const SignupForm = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await RegisterUser(data)
      if (result.status === 200) {
        navigate('/WADMarket/products/')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'Select a gender',
    email: '',
    password: ''
  })

  return (
    <>
      <div className='container-fluid text-center fs-4'>Sign up to WADMarket</div>
      <form className='form-group'>
        <div className='mt-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='first_name'
            onChange={handleInputChange}
            value={input.first_name}
            className='form-control'
            id='name'
            placeholder='Name'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='last-name' className='form-label'>
            Last name
          </label>
          <input
            type='text'
            name='last_name'
            onChange={handleInputChange}
            value={input.last_name}
            className='form-control'
            id='last-name'
            placeholder='Last Name'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='birth' className='form-label'>
            Birthday
          </label>
          <input
            type='date'
            className='form-control'
            id='birth'
            name='birth_date'
            onChange={handleInputChange}
            value={input.birth_date}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='last-name' className='form-label'>
            Gender
          </label>
          <select
            className='form-select'
            name='gender'
            onChange={handleInputChange}
            value={input.gender}
          >
            <option value='Select a gender' disabled>
              Select a gender
            </option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </div>
        <div className='mt-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            name='email'
            onChange={handleInputChange}
            value={input.email}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='inputPassword' className='col-sm-2 col-form-label'>
            Password
          </label>
          <div>
            <input
              type='password'
              className='form-control'
              id='inputPassword'
              name='password'
              onChange={handleInputChange}
              value={input.password}
            />
          </div>
        </div>
        <div className='container-fluid mt-4 p-0'>
          <button type='button' className='container-fluid btn btn-success' onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
      <Link to='/WADMarket/user/signin'>Ya tengo una cuenta</Link>
    </>
  )
}

export default SignupForm

const SignupForm = () => {
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
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='last-name' className='form-label'>
            Gender
          </label>
          <select
            className='form-select'
            name='gender'
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
            />
          </div>
        </div>
        <div className='container-fluid mt-4 p-0'>
          <button type='button' className='container-fluid btn btn-success'>
            Sign Up
          </button>
        </div>
      </form>
    </>
  )
}

export default SignupForm

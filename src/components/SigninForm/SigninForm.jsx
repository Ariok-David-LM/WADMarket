const SigninForm = () => {
  return (
    <>
      <div className='container-fluid text-center fs-4'>Sign in to WADMarket</div>
      <form className='form-group'>
        <div className='form-floating mb-3 text-dark mt-4'>
          <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating text-dark'>
          <input type='password' className='form-control' id='floatingPassword' placeholder='Password' />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <div className='container-fluid mt-4 p-0'>
          <button type='button' className='container-fluid btn btn-success'>
            LogIn
          </button>
        </div>
      </form>
    </>
  )
}

export default SigninForm

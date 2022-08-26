import SigninForm from '../components/SigninForm/SigninForm'

const SignIn = () => {
  return (
    <div className='conatiner-fluid d-flex justify-content-center p-4'>
      <div className='rounded text-white p-4' style={{ backgroundColor: '#7C8083' }}>
        <SigninForm />
      </div>
    </div>
  )
}

export default SignIn

import SignupForm from '../components/SignupFrom/SignupForm'

const SignUp = () => {
  return (
    <div className='conatiner-fluid d-flex justify-content-center p-4'>
      <div className='rounded text-white p-4' style={{ backgroundColor: '#7C8083' }}>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignUp

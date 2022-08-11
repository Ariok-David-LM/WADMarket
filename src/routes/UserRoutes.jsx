import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to='/WADMarket/user/signin' />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<p>No existe esa pagina de usuario</p>} />
      </Routes>
    </>
  )
}

export default UserRoutes

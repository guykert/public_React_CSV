import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import { RegistrationGoogle } from './components/RegistrationGoogle'
import { CambiarClave } from './components/CambiarClave'


const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='registration-google' element={<RegistrationGoogle />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='recuperar-clave/:token' element={<CambiarClave />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}

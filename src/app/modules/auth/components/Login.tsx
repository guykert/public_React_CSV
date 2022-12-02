/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login, startGoogleLogin, loginGoogleExist} from '../core/_requests'
import {useAuth} from '../core/Auth'
import { EmailInput } from '../../forms/EmailInput'
import { PasswordInput } from '../../forms/PasswordInput'
import { SubmitButton } from '../../buttons/SubmitButton'
import { GoogleButton } from '../../buttons/GoogleButton'


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'claudio.santibanez@gmail.com',
  password: 'Gf1234',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/



export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()



  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)

        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token,auth.name,auth.uid,auth.ok)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  const handleGoogleLogin = (e:any) => {
    e.preventDefault();
    startGoogleLogin().then( async ({user}) =>{

      try {
        const {data: auth} = await loginGoogleExist(user.uid)

        saveAuth(auth)

        const {data: user2} = await getUserByToken(auth.api_token,auth.name,auth.uid,auth.ok)

        setCurrentUser(user2)



      } catch (error: any) {
        saveAuth(undefined)
        formik.setStatus('El usuario no se encuentra registrado')
        formik.setSubmitting(false)
        setLoading(false)
      }

      

      // const {uid ,displayName, email, photoURL } = user;

      // const auth:AuthModel = {
      //   api_token: 'null',
      //   name: displayName || 'null',
      //   uid: user.uid,
      //   ok: true
      // }

      // saveAuth(auth);

    });
    
  }

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >

      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In</h1>

      </div>
      {/* begin::Heading */}


      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info'>

        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
       <EmailInput LabelClassName='form-label fw-bolder text-dark fs-6 mb-0' LabelText='Email' formik={formik} getFieldProps={formik.getFieldProps('email')} touched={formik.touched.email} errors={formik.errors.email}/>


      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <PasswordInput  LabelClassName='form-label fw-bolder text-dark fs-6 mb-0' forgotPassword={false} divClassName='d-flex flex-stack mb-2' LabelText='Password' formik={formik} getFieldProps={formik.getFieldProps('password')} touched={formik.touched.password} errors={formik.errors.password}/>

      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        {/* begin::Link */}
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='text-center'>

        <SubmitButton className='btn btn-lg btn-primary w-100 mb-5' disabled={formik.isSubmitting || !formik.isValid} loading={loading} textoBoton='Continue'/>

        {/* begin::Separator */}

          <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div>
          
        {/* end::Separator */}

        {/* begin::Google link */}

        <GoogleButton  className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100 mb-5'  textoBoton='Continue with Google' onClick={handleGoogleLogin}/>

        {/* end::Google link */}

      </div>
      {/* end::Action */}


      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <div className='text-gray-400 fw-bold fs-4'>
          New Here?{' '}
          <Link to='/auth/registration' className='link-primary fw-bolder'>
            Create an Account
          </Link>
        </div>
      </div>
      {/* begin::Heading */}

    </form>
  )
}

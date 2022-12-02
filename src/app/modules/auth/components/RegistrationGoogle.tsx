/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

import {getUserByToken, registerGoogle} from '../core/_requests'
import {Link, useNavigate} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'
import { FirstNameInput } from '../../forms/FirstNameInput'
import { LastNameInput } from '../../forms/LastNameInput'
import { EmailInput } from '../../forms/EmailInput'
import { AcceptTerms } from '../../forms/AcceptTerms'
import { SubmitButton } from '../../buttons/SubmitButton'
import { CancelButton } from '../../buttons/CancelButton'
import * as authHelper from '../core/AuthHelpers'
import { useAppSelector } from '../../../hooks/hooks'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function RegistrationGoogle() {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const { uid, displayName ,firstname,lastname,photoURL,email } = useAppSelector( state => state.auth);

  useEffect(() => {

    if(!uid || uid === ''){

      navigate('/auth/registration');
    }
  }, [])


  

  initialValues.firstname = firstname;
  initialValues.lastname = lastname;
  initialValues.email = email;

  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await registerGoogle(
          values.email,
          values.firstname,
          values.lastname,
          uid,
          displayName,
          firstname,
          lastname,
          photoURL,
          email
        )

        console.log(auth);
        saveAuth(auth)


        const {data: user} = await getUserByToken(auth.token,auth.name,auth.uid,auth.ok)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The registration details is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  const authg = authHelper.getAuth();
  console.log(authg);

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='mb-10 text-center'>
        {/* begin::Title */}
        <h1 className='text-dark mb-3'>Create an Account</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-400 fw-bold fs-4'>
          Already have an account?
          <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
            Forgot Password ?
          </Link>
        </div>
        {/* end::Link */}
      </div>
      {/* end::Heading */}



      <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
      </div>

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group Firstname */}
      <div className='fv-row mb-8'>

        <FirstNameInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='First name' formik={formik} getFieldProps={formik.getFieldProps('lastname')} touched={formik.touched.lastname} errors={formik.errors.lastname} disabled={false}/>

      </div>
      {/* end::Form group */}
      <div className='fv-row mb-8'>
        {/* begin::Form group Lastname */}

        <LastNameInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='Last name' formik={formik} getFieldProps={formik.getFieldProps('firstname')} touched={formik.touched.firstname} errors={formik.errors.firstname} disabled={false}/>

        {/* end::Form group */}
      </div>

      {/* begin::Form group Email */}
      <div className='fv-row mb-8'>

        <EmailInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='Email' formik={formik} getFieldProps={formik.getFieldProps('email')} touched={formik.touched.email} errors={formik.errors.email} disabled={false}/>

      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>

        <AcceptTerms LabelClassName='form-check form-check-inline' LabelText='Accept Terms' formik={formik} getFieldProps={formik.getFieldProps('acceptTerms')} touched={formik.touched.acceptTerms} errors={formik.errors.acceptTerms}/>

      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <SubmitButton className='btn btn-lg btn-primary w-100 mb-5' disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms} loading={loading} textoBoton='Submit'/>

        <Link to='/auth/registration'>

          <CancelButton className='btn btn-lg btn-light-primary w-100 mb-5' textoBoton='Cancel'/>

        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}

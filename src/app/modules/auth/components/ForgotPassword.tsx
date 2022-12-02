import {useState} from 'react'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import { EmailInput } from '../../forms/EmailInput'
import { SubmitButton } from '../../buttons/SubmitButton'
import { CancelButton } from '../../buttons/CancelButton'

const initialValues = {
  email: 'claudio.santibanez@gmail.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_password_reset_form'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-center mb-10'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Forgot Password ?</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-500 fw-semibold fs-6'>
          Enter your email to reset your password.
        </div>
        {/* end::Link */}
      </div>

      {/* begin::Title */}
      {hasErrors === true && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>
            Sorry, looks like there are some errors detected, please try again.
          </div>
        </div>
      )}

      {hasErrors === false && (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>Sent password reset. Please check your email</div>
        </div>
      )}
      {/* end::Title */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>

        <EmailInput LabelClassName='form-label fw-bolder text-gray-900 fs-6' LabelText='Email' formik={formik} getFieldProps={formik.getFieldProps('email')} touched={formik.touched.email} errors={formik.errors.email}/>

      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='d-flex flex-wrap justify-content-center pb-lg-0'>

        <SubmitButton className='btn btn-lg btn-primary fw-bolder me-4' disabled={formik.isSubmitting || !formik.isValid} loading={loading} textoBoton='Submit'/>

        <Link to='/auth/login'>
            <CancelButton className='btn btn-lg btn-light-primary fw-bolder' disabled={formik.isSubmitting || !formik.isValid} textoBoton='Cancel'/>
        </Link>
      </div>
      {/* end::Form group */}



    </form>
    
  )
}

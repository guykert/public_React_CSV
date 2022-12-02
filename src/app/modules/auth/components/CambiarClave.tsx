/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {changePassword, getUserByToken} from '../core/_requests'
import {Link, useParams} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'
import { PasswordInput } from '../../forms/PasswordInput'
import { PasswordProgressInput } from '../../forms/PasswordProgressInput'
import { ConfirmPasswordInput } from '../../forms/ConfirmPasswordInput'
import { SubmitButton } from '../../buttons/SubmitButton'
import { CancelButton } from '../../buttons/CancelButton'

const initialValues = {
  firstname: 'Claudio',
  lastname: 'Santibañez',
  email: 'claudio.santibanez@gmail.com',
  password: 'Gf1234',
  changepassword: 'Gf1234',
  acceptTerms: true,
}





const registrationSchema = Yup.object().shape({

})



export function CambiarClave() {

  const { token } = useParams();

  const [loading, setLoading] = useState(false)

  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {


        const {data: auth} = await changePassword(
          token || "undefined",
          values.password
        )
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token,auth.name,auth.uid,auth.ok)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The change password details is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

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
        <h1 className='text-dark mb-3'>Change Password</h1>
        {/* end::Title */}

      </div>
      {/* end::Heading */}

      {/* begin::Form group Password */}
      <div className='fv-row mb-8' data-kt-password-meter='true'>
        <div className='mb-1'>

          <PasswordInput  LabelClassName='d-flex justify-content-between mt-n5'  divClassName='position-relative mb-3' LabelText='Password' formik={formik} getFieldProps={formik.getFieldProps('password')} touched={formik.touched.password} errors={formik.errors.password}/>

          <br />
          {/* begin::Meter */}
          <PasswordProgressInput />

          {/* end::Meter */}
        </div>
        <div className='text-muted'>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className='fv-row mb-5'>

        <ConfirmPasswordInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='Confirm Password' formik={formik} getFieldProps={formik.getFieldProps('changepassword')} touched={formik.touched.changepassword} errors={formik.errors.changepassword}/>

      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <SubmitButton className='btn btn-lg btn-primary w-100 mb-5' disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms} loading={loading} textoBoton='Submit'/>

        <Link to='/auth/login'>

          <CancelButton className='btn btn-lg btn-light-primary w-100 mb-5' textoBoton='Cancel'/>

        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}

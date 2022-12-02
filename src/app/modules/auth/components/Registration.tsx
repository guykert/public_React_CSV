/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {getUserByToken, register} from '../core/_requests'
import {Link, useNavigate} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'
import { GoogleButton } from '../../buttons/GoogleButton'
import { FirstNameInput } from '../../forms/FirstNameInput'
import { LastNameInput } from '../../forms/LastNameInput'
import { EmailInput } from '../../forms/EmailInput'
import { PasswordInput } from '../../forms/PasswordInput'
import { PasswordProgressInput } from '../../forms/PasswordProgressInput'
import { ConfirmPasswordInput } from '../../forms/ConfirmPasswordInput'
import { AcceptTerms } from '../../forms/AcceptTerms'
import { SubmitButton } from '../../buttons/SubmitButton'
import { CancelButton } from '../../buttons/CancelButton'
import { startGoogleLogin, loginGoogleExist} from '../core/_requests'
import { authRegisterGoogle } from '../core/authSlice'
import { useAppDispatch } from '../../../hooks/hooks'

const initialValues = {
  firstname: 'Claudio',
  lastname: 'Santibañez',
  email: 'claudio.santibanez@gmail.com',
  password: 'Gf1234',
  changepassword: 'Gf1234',
  acceptTerms: true,
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



export function Registration() {
  const [loading, setLoading] = useState(false)


  const dispatch = useAppDispatch();




  const navigate = useNavigate();

  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password
        )
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token,auth.name,auth.uid,auth.ok)
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


  const handleGoogleLogin = async(e:any) => {
    e.preventDefault();

    // const value = useAppSelector((state) => state.auth.displayName)


    startGoogleLogin().then( async ({user}) =>{

      const {data: auth} = await loginGoogleExist(user.uid);

      auth.name = user.displayName ? user.displayName : '';
      auth.uid = user.uid;
      auth.email = user.email ? user.email : '';
      auth.photoURL = user.photoURL ? user.photoURL : '';

      if(!auth.ok){
        
        var names=user.displayName?.split(' ') || '';

        let output = {firstname: '', lastname: ''};

        if (names.length > 2) {
            output.firstname = names[0];
            output.lastname = names[-1] + ' '  +names[names.length - 1];
        }
        else if (names.length < 2) {
            output.firstname = names[0];
            output.lastname = '';
        }
        else {
            output.firstname = names[0];
            output.lastname = names[names.length - 1];
        }

        await dispatch(authRegisterGoogle({
          uid: user.uid,
          displayName: user.displayName,
          firstname: output.firstname,
          lastname: output.lastname,
          photoURL: auth.photoURL,
          email: auth.email,
          errorMesage:''
        }))

        navigate('/auth/registration-google');



        

      }else{
        saveAuth(auth)

        const {data: user2} = await getUserByToken(auth.api_token,auth.name,auth.uid,auth.ok)

        setCurrentUser(user2)
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


    // await dispatch( registerGoogleLogin() ).then(({user}) =>{

    //     var names=user.displayName.split(' ');

    //     let output = {firstname: '', lastname: ''};

    //     if (names.length > 2) {
    //         output.firstname = names[0];
    //         output.lastname = names.slice(1, -1).join(' ') + ' '  +names[names.length - 1];
    //     }
    //     else if (names.length < 2) {
    //         output.firstname = names[0];
    //         output.lastname = '';
    //     }
    //     else {
    //         output.firstname = names[0];
    //         output.lastname = names[names.length - 1];
    //     }

    //     dispatch( confirmExistGoogle( user.uid ) ).then((disp) =>{

    //         if(disp.ok){
    //             dispatch( setCurrentUser( disp ) );
    //         }else{
    //             dispatch(loginGoogle({
    //                 uidg: user.uid,
    //                 nameg: user.displayName,
    //                 fnameg: output.firstname,
    //                 lnameg: output.lastname,
    //                 photoURL: user.photoURL,
    //                 emailg: user.email,
    //             }))
    //             navigate('/auth/registration-google');
    //         }

    //     });
  


    // });
    
  }

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

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
          <GoogleButton  className='btn btn-light-primary fw-bolder w-100 mb-10'  textoBoton='Sign in with Google' onClick={handleGoogleLogin}/>
        {/* end::Col */}
      </div>
      {/* end::Login options */}

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

        <FirstNameInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='First name' formik={formik} getFieldProps={formik.getFieldProps('lastname')} touched={formik.touched.lastname} errors={formik.errors.lastname}/>

      </div>
      {/* end::Form group */}
      <div className='fv-row mb-8'>
        {/* begin::Form group Lastname */}

        <LastNameInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='Last name' formik={formik} getFieldProps={formik.getFieldProps('firstname')} touched={formik.touched.firstname} errors={formik.errors.firstname}/>

        {/* end::Form group */}
      </div>

      {/* begin::Form group Email */}
      <div className='fv-row mb-8'>

        <EmailInput LabelClassName='form-label fw-bolder text-dark fs-6' LabelText='Email' formik={formik} getFieldProps={formik.getFieldProps('email')} touched={formik.touched.email} errors={formik.errors.email}/>

      </div>
      {/* end::Form group */}

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
      <div className='fv-row mb-8'>

        <AcceptTerms LabelClassName='form-check form-check-inline' LabelText='Accept Terms' formik={formik} getFieldProps={formik.getFieldProps('acceptTerms')} touched={formik.touched.acceptTerms} errors={formik.errors.acceptTerms}/>

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

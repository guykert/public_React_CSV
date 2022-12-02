import {FC} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import { TInputText } from './TInputText';

export const PasswordInput: FC<TInputText> = ( { LabelClassName = 'form-label fs-6 fw-bolder text-dark', InputClassName = 'form-control bg-transparent', divClassName, forgotPassword=false, LabelText, getFieldProps=[] , touched='', errors='' }) => {

    const forgot = (forgotPassword) && <Link
    to='/auth/forgot-password'
    className='link-primary fs-6 fw-bolder'
    style={{marginLeft: '5px'}}
    >
    Forgot Password ?
    </Link>;




  return (
    <>
    
        <div className={LabelClassName}>
            <div className={divClassName}>
                {/* begin::Label */}
                <label className='form-label fw-bolder text-dark fs-6 mb-0'>{LabelText}</label>
                {/* end::Label */}
                {/* begin::Link */}

                { forgot }

                {/* end::Link */}
            </div>
        </div>
        <input
        type='password'
        autoComplete='off'
        {...getFieldProps}
        className={clsx(
            InputClassName,
            {
            'is-invalid': touched && errors,
            },
            {
            'is-valid': touched && !errors,
            }
        )}
        />
        {touched && errors && (
        <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
            <span role='alert'>{errors}</span>
            </div>
        </div>
        )}
    
    </>
  )
}

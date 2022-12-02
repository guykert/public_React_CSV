import {FC} from 'react'
import clsx from 'clsx'
import { TInputText } from './TInputText'


export const EmailInput: FC<TInputText> = ( { LabelClassName = 'form-label fs-6 fw-bolder text-dark', InputClassName = 'form-control bg-transparent', LabelText, getFieldProps , touched='', errors='', disabled=false }) => {


  return (
    <>
    
    <label className={LabelClassName}>{LabelText}</label>

    <input
    placeholder='Email'
    {...getFieldProps}
    disabled={disabled}
    className={clsx(
        InputClassName,
        {'is-invalid': touched && errors},
        {
        'is-valid': touched && !errors,
        }
    )}
    type='email'
    name='email'
    autoComplete='off'
    />
    {touched && errors && (
    <div className='fv-plugins-message-container'>
        <span role='alert'>{errors}</span>
    </div>
    )}
    
    </>
  )
}

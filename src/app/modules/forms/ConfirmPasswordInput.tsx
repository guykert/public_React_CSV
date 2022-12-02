import {FC} from 'react'
import clsx from 'clsx'
import { TInputText } from './TInputText'

export const ConfirmPasswordInput: FC<TInputText> = ( { 
  
  LabelClassName, 
  InputClassName = 'form-control bg-transparent', 
  LabelText, 
  getFieldProps=[] , 
  touched='', 
  errors='' 

}) => {





  return (
    <>
    
        <label className={LabelClassName}>{LabelText}</label>
        <input
          type='password'
          placeholder='Password confirmation'
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

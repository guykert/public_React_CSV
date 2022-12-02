import {FC} from 'react'
import clsx from 'clsx'
import { TInputText } from './TInputText'


export const LastNameInput: FC<TInputText> = ( { LabelClassName, InputClassName = 'form-control bg-transparent', LabelText, getFieldProps=[] , touched='', errors='', disabled=false }) => {


  return (
    <>
    
    <label className={LabelClassName}>{LabelText}</label>
          <input
            placeholder={LabelText}
            type='text'
            autoComplete='off'
            disabled={disabled}
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

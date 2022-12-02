import {FC} from 'react'
import { TInputText } from './TInputText'

export const AcceptTerms: FC<TInputText> = ( { LabelClassName, LabelText, getFieldProps=[] , touched='', errors='' }) => {





  return (
    <>

        <label className={LabelClassName} htmlFor='kt_login_toc_agree'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...getFieldProps}
          />
          <span>
            I Accept the{' '}
            <a
              href='https://keenthemes.com/metronic/?page=faq'
              className='ms-1 link-primary'
            >
              Terms
            </a>
            .
          </span>
        </label>
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

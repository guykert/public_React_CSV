import {FC} from 'react'
import { TButtons } from './TButtons'

export const CancelButton: FC<TButtons> = ({className , disabled=false , textoBoton}) => {
  return (
    
        <button
        type='button'
        id='kt_login_signup_form_cancel_button'
        className={className}
        disabled={disabled}
        >
        {textoBoton}
        </button>
    
  )
}

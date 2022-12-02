import {FC} from 'react'
import { TButtons } from './TButtons'

export const SubmitButton: FC<TButtons> = ({className , disabled, loading, textoBoton}) => {

  return (
    <button
    type='submit'
    id='kt_sign_in_submit'
    className={className}
    disabled={disabled}
  >
    {!loading && <span className='indicator-label'>{textoBoton}</span>}
    {loading && (
      <span className='indicator-progress' style={{display: 'block'}}>
        Please wait...
        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
      </span>
    )}
  </button>
  )
}
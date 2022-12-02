import {FC} from 'react'
import { TButtons } from './TButtons'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

export const GoogleButton: FC<TButtons> = ({className, textoBoton, onClick}) => {

  return (
    <a href='#top' className={className} onClick={ onClick }>
    <img
      alt='Logo'
      src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
      className='h-20px me-3'
    />
    {textoBoton}
  </a>
  )
}

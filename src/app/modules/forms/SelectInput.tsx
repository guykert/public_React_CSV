import {FC} from 'react'
import clsx from 'clsx'
import { TInputSelect } from './TInputSelect';
import { MenuType, MenuTypeQueryResponse } from '../apps/menu-management/management-list-type/core/_models';


export const SelectInput: FC<TInputSelect> = ( { LabelClassName = 'form-label fs-6 fw-bolder text-dark', keySelect, InputClassName = 'form-control bg-transparent', LabelText, getFieldProps , touched='', errors='', disabled=false , data}) => {


  return (
    <>
    
    <label className={LabelClassName}>{LabelText}</label>

    <select
        className={clsx(
            InputClassName,
            {'is-invalid': touched && errors},
            {
            'is-valid': touched && !errors,
            }
        )}
        {...getFieldProps}
        disabled={disabled}
        name='email'
        autoComplete='off'
        onChange={(e) => setProgress(e.target.value)}
        >
        <option key="0" value="0">select type menu</option>

        {data.data.map((type: MenuType) => (

            <option key={type.id} value={type.name}>{type.name}   -    {type.description}</option>

        ))}

    </select>


    {touched && errors && (
    <div className='fv-plugins-message-container'>
        <span role='alert'>{errors}</span>
    </div>
    )}
    
    </>
  )
}


import {FC} from 'react'
export type TProgressText = {

    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean
}

export const PasswordProgressInput: FC<TProgressText> = () => {

    return (
        <div className='d-flex align-items-center mb-3' data-kt-password-meter-control='highlight'>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
        </div>
    )
}

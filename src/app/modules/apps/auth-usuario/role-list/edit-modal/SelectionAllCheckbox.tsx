import {FC} from 'react'
import { Permission } from '../../permission-list/core/_models'
import { useListView } from '../core/ListViewProvider'


type Props = {
    permissions?: Permission[]
  }

const SelectionAllCheckbox: FC<Props> = () => {
  const {isAllSelected, onSelectAll} = useListView()
  return (
    <th  key={`table-id-permission-all`} className='w-10px pe-2'>
      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
        <input
          className='form-check-input'
          type='checkbox'
          data-kt-check={isAllSelected}
          data-kt-check-target='#kt_table_users .form-check-input'
          checked={isAllSelected}
          onChange={onSelectAll}
        />
      </div>
    </th>
  )
}

export {SelectionAllCheckbox}

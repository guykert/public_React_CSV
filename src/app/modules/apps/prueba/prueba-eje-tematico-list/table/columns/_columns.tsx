// @ts-nocheck
import {Column} from 'react-table'
import {TwoStepsCell} from './TwoStepsCell'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {SelectionHeader} from './SelectionHeader'
import {QueryAxisTematic} from '../../core/_models'

const managementsColumns: ReadonlyArray<Column<QueryAxisTematic>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  // {

  //   Header: (props) => (
  //     <CustomHeader tableProps={props} title='Id' className='min-w-125px' />
  //   ),
  //   accessor: 'id',
  // },
  {
    Header: (props) => <CustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='Description' className='min-w-125px' />,
    accessor: 'description',
  },
  {
    Header: (props) => (
      <CustomHeader tableProps={props} title='Activo' className='min-w-125px' />
    ),
    id: 'activo',
    Cell: ({...props}) => <TwoStepsCell two_steps={props.data[props.row.index].activo} />,
  },
  {
    Header: (props) => (
      <CustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell id={props.data[props.row.index].id} />,
  },
]

export {managementsColumns}

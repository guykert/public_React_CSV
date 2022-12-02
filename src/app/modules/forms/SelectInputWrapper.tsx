import {FC} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../_metronic/helpers'
import { SelectInput } from './SelectInput'


export type TInputSelect = {
    getUsers: any
    query:string
    formik?: any
    dataGeneral:any
  }

const SelectInputWrapper: FC<TInputSelect> = ({dataGeneral,getUsers,formik,query}) => {
  const {
    isLoading,
    data,
    error,
  } = useQuery(
    `${QUERIES.MENU_TYPE_LIST}-${query}`,
    () => {
        return getUsers(query)
    },
    {
      cacheTime: 0,
      onError: (err) => {
        console.error(err)
      },
    }
  )

  if (!isLoading && !error && data) {

    const idKey = dataGeneral.id== undefined ? 0 : dataGeneral.id

    return <SelectInput keySelect={`select_${idKey}`} LabelClassName="required fw-bold fs-6 mb-2" LabelText="Type Menú"  formik={formik} getFieldProps={formik.getFieldProps('type')} touched={formik.touched.type} errors={formik.errors.type} data={data}/>
  }

  return null
}

export {SelectInputWrapper}

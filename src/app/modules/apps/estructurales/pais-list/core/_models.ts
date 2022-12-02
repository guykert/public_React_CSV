import {ID, Response} from '../../../../../../_metronic/helpers'
export type Country = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type CountryQueryResponse = Response<Array<Country>>

export const initialModel: Country = {
  name: '',
  description: '',
}

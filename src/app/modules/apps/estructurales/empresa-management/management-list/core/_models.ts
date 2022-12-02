import {ID, Response} from '../../../../../../../_metronic/helpers'
export type Company = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type CompanyQueryResponse = Response<Array<Company>>

export const initialModel: Company = {
  name: '',
  description: '',
}

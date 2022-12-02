import {ID, Response} from '../../../../../../../_metronic/helpers'
export type CompanyType = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type CompanyTypeQueryResponse = Response<Array<CompanyType>>

export const initialModel: CompanyType = {
  name: '',
  description: '',
}

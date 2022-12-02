import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryType = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryTypeQueryResponse = Response<Array<QueryType>>

export const initialModel: QueryType = {
  name: '',
  description: '',
}

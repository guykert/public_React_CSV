import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryPattern = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryPatternQueryResponse = Response<Array<QueryPattern>>

export const initialModel: QueryPattern = {
  name: '',
  description: '',
}

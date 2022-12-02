import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryTableComversionDetail = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryTableComversionDetailQueryResponse = Response<Array<QueryTableComversionDetail>>

export const initialModel: QueryTableComversionDetail = {
  name: '',
  description: '',
}

import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryTableComversion = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryTableComversionQueryResponse = Response<Array<QueryTableComversion>>

export const initialModel: QueryTableComversion = {
  name: '',
  description: '',
}

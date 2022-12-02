import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryAxisTematic = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryAxisTematicQueryResponse = Response<Array<QueryAxisTematic>>

export const initialModel: QueryAxisTematic = {
  name: '',
  description: '',
}

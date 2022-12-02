import {ID, Response} from '../../../../../../_metronic/helpers'
export type QuerySubAxisTematic = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QuerySubAxisTematicQueryResponse = Response<Array<QuerySubAxisTematic>>

export const initialModel: QuerySubAxisTematic = {
  name: '',
  description: '',
}

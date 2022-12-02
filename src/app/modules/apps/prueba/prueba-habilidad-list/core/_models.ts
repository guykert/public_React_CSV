import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryHability = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryHabilityQueryResponse = Response<Array<QueryHability>>

export const initialModel: QueryHability = {
  name: '',
  description: '',
}

import {ID, Response} from '../../../../../../_metronic/helpers'
export type Leter = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type LeterQueryResponse = Response<Array<Leter>>

export const initialModel: Leter = {
  name: '',
  description: '',
}

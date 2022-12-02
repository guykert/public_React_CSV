import {ID, Response} from '../../../../../../_metronic/helpers'
export type English = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type EnglishQueryResponse = Response<Array<English>>

export const initialModel: English = {
  name: '',
  description: '',
}

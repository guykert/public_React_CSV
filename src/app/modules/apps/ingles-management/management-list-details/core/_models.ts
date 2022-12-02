import {ID, Response} from '../../../../../../_metronic/helpers'
export type EnglishDetails = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type EnglishDetailsQueryResponse = Response<Array<EnglishDetails>>

export const initialModel: EnglishDetails = {
  name: '',
  description: '',
}

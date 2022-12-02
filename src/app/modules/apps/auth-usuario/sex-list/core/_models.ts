import {ID, Response} from '../../../../../../_metronic/helpers'
export type Sex = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type SexQueryResponse = Response<Array<Sex>>

export const initialModel: Sex = {
  name: '',
  description: '',
}

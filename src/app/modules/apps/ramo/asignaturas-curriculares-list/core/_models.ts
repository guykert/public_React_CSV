import {ID, Response} from '../../../../../../_metronic/helpers'
export type CurricularAsignature = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type CurricularAsignatureQueryResponse = Response<Array<CurricularAsignature>>

export const initialModel: CurricularAsignature = {
  name: '',
  description: '',
}

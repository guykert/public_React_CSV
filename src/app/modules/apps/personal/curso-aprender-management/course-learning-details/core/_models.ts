import {ID, Response} from '../../../../../../../_metronic/helpers'
export type CourseLerningDetails = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type CourseLerningDetailsQueryResponse = Response<Array<CourseLerningDetails>>

export const initialModel: CourseLerningDetails = {
  name: '',
  description: '',
}

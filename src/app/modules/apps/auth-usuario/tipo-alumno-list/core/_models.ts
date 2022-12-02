import {ID, Response} from '../../../../../../_metronic/helpers'
export type StudentType = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type StudentTypeQueryResponse = Response<Array<StudentType>>

export const initialModel: StudentType = {
  name: '',
  description: '',
}

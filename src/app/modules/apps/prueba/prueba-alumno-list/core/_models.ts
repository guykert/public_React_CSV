import {ID, Response} from '../../../../../../_metronic/helpers'
export type QueryStudents = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type QueryStudentsQueryResponse = Response<Array<QueryStudents>>

export const initialModel: QueryStudents = {
  name: '',
  description: '',
}

import {ID, Response} from '../../../../../../_metronic/helpers'
export type Project = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type ProjectQueryResponse = Response<Array<Project>>

export const initialModel: Project = {
  name: '',
  description: '',
}

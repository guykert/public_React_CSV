import {ID, Response} from '../../../../../../_metronic/helpers'
export type Permission = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  read?: boolean
  write?: boolean
  create?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type PermissionQueryResponse = Response<Array<Permission>>

export const initialModel: Permission = {
  name: '',
  description: '',
  read: false,
  write: false,
  create: false,
}

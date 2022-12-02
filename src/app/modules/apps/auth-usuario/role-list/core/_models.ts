import {ID, Response} from '../../../../../../_metronic/helpers'
import { Permission } from '../../permission-list/core/_models'
export type Role = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
  permissions?: Permission[]
}

export type RoleQueryResponse = Response<Array<Role>>

export const initialModel: Role = {
  name: '',
  description: '',
}

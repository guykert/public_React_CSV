import {ID, Response} from '../../../../../../_metronic/helpers'
export type Branch = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type BranchQueryResponse = Response<Array<Branch>>

export const initialModel: Branch = {
  name: '',
  description: '',
}

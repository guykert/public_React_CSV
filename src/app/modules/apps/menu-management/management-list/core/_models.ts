import {ID, Response} from '../../../../../../_metronic/helpers'
export type Menu = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
  type?: string
}

export type MenuQueryResponse = Response<Array<Menu>>

export const initialModel: Menu = {
  name: '',
  description: '',
  type:"0",
}

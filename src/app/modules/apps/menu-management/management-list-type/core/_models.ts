import {ID, Response} from '../../../../../../_metronic/helpers'
export type MenuType = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type MenuTypeQueryResponse = Response<Array<MenuType>>

export const initialModel: MenuType = {
  name: '',
  description: '',
}

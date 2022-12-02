import {ID, Response} from '../../../../../../_metronic/helpers'
export type Level = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type LevelQueryResponse = Response<Array<Level>>

export const initialModel: Level = {
  name: '',
  description: '',
}

import {ID, Response} from '../../../../../../_metronic/helpers'
export type Day = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type DayQueryResponse = Response<Array<Day>>

export const initialModel: Day = {
  name: '',
  description: '',
}

import {ID, Response} from '../../../../../../_metronic/helpers'
export type ConfigurationYears = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type ConfigurationYearsQueryResponse = Response<Array<ConfigurationYears>>

export const initialModel: ConfigurationYears = {
  name: '',
  description: '',
}

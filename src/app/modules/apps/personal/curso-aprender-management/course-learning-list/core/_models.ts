import {ID, Response} from '../../../../../../../_metronic/helpers'
export type CourseLearning = {
  id?: ID
  name?: string
  description?: string
  activo?: boolean
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

export type CourseLearningQueryResponse = Response<Array<CourseLearning>>

export const initialModel: CourseLearning = {
  name: '',
  description: '',
}

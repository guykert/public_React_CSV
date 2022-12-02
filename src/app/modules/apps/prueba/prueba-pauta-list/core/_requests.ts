import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {QueryPattern, QueryPatternQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;
const CRUD_URL = `${API_URL}/prueba-pauta`
const GET_CRUD_URL = `${API_URL}/prueba-pauta/find-all/query`

const getUsers = (query: string): Promise<QueryPatternQueryResponse> => {
  return axios
    .get(`${GET_CRUD_URL}/?${query}`)
    .then((d: AxiosResponse<QueryPatternQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<QueryPattern | undefined> => {
  return axios
    .get(`${CRUD_URL}/find-one/${id}`)
    .then((response: AxiosResponse<Response<QueryPattern>>) => response.data)
    .then((response: Response<QueryPattern>) => response.data)
}

const createUser = (dataModel: QueryPattern): Promise<QueryPattern | undefined> => {
  return axios
    .post(`${CRUD_URL}/create`, dataModel)
    .then((response: AxiosResponse<Response<QueryPattern>>) => response.data)
    .then((response: Response<QueryPattern>) => response.data)
}

const updateUser = (dataModel: QueryPattern): Promise<QueryPattern | undefined> => {
  const {id, ...dataModeldb} = dataModel
  return axios
    .patch(`${CRUD_URL}/update/${id}`, dataModeldb)
    .then((response: AxiosResponse<Response<QueryPattern>>) => response.data)
    .then((response: Response<QueryPattern>) => response.data)
}

const deleteUser = (dataId: ID): Promise<void> => {
  return axios.delete(`${CRUD_URL}/remove/${dataId}`).then(() => {})
}

const deleteSelectedUsers = (dataIds: Array<ID>): Promise<void> => {
  const requests = dataIds.map((id) => axios.delete(`${CRUD_URL}/remove/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}

import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {QueryTableComversion, QueryTableComversionQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;
const CRUD_URL = `${API_URL}/prueba-tabla-comversion`
const GET_CRUD_URL = `${API_URL}/prueba-tabla-comversion/find-all/query`

const getUsers = (query: string): Promise<QueryTableComversionQueryResponse> => {
  return axios
    .get(`${GET_CRUD_URL}/?${query}`)
    .then((d: AxiosResponse<QueryTableComversionQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<QueryTableComversion | undefined> => {
  return axios
    .get(`${CRUD_URL}/find-one/${id}`)
    .then((response: AxiosResponse<Response<QueryTableComversion>>) => response.data)
    .then((response: Response<QueryTableComversion>) => response.data)
}

const createUser = (dataModel: QueryTableComversion): Promise<QueryTableComversion | undefined> => {
  return axios
    .post(`${CRUD_URL}/create`, dataModel)
    .then((response: AxiosResponse<Response<QueryTableComversion>>) => response.data)
    .then((response: Response<QueryTableComversion>) => response.data)
}

const updateUser = (dataModel: QueryTableComversion): Promise<QueryTableComversion | undefined> => {
  const {id, ...dataModeldb} = dataModel
  return axios
    .patch(`${CRUD_URL}/update/${id}`, dataModeldb)
    .then((response: AxiosResponse<Response<QueryTableComversion>>) => response.data)
    .then((response: Response<QueryTableComversion>) => response.data)
}

const deleteUser = (dataId: ID): Promise<void> => {
  return axios.delete(`${CRUD_URL}/remove/${dataId}`).then(() => {})
}

const deleteSelectedUsers = (dataIds: Array<ID>): Promise<void> => {
  const requests = dataIds.map((id) => axios.delete(`${CRUD_URL}/remove/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}

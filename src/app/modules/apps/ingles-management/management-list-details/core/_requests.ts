import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {EnglishDetails, EnglishDetailsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;
const CRUD_URL = `${API_URL}/ingles-detalle`
const GET_CRUD_URL = `${API_URL}/ingles-detalle/find-all/query`

const getUsers = (query: string): Promise<EnglishDetailsQueryResponse> => {
  return axios
    .get(`${GET_CRUD_URL}/?${query}`)
    .then((d: AxiosResponse<EnglishDetailsQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<EnglishDetails | undefined> => {
  return axios
    .get(`${CRUD_URL}/find-one/${id}`)
    .then((response: AxiosResponse<Response<EnglishDetails>>) => response.data)
    .then((response: Response<EnglishDetails>) => response.data)
}

const createUser = (dataModel: EnglishDetails): Promise<EnglishDetails | undefined> => {
  return axios
    .post(`${CRUD_URL}/create`, dataModel)
    .then((response: AxiosResponse<Response<EnglishDetails>>) => response.data)
    .then((response: Response<EnglishDetails>) => response.data)
}

const updateUser = (dataModel: EnglishDetails): Promise<EnglishDetails | undefined> => {
  const {id, ...dataModeldb} = dataModel
  return axios
    .patch(`${CRUD_URL}/update/${id}`, dataModeldb)
    .then((response: AxiosResponse<Response<EnglishDetails>>) => response.data)
    .then((response: Response<EnglishDetails>) => response.data)
}

const deleteUser = (dataId: ID): Promise<void> => {
  return axios.delete(`${CRUD_URL}/remove/${dataId}`).then(() => {})
}

const deleteSelectedUsers = (dataIds: Array<ID>): Promise<void> => {
  const requests = dataIds.map((id) => axios.delete(`${CRUD_URL}/remove/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}

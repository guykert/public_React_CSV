import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {StudentType, StudentTypeQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;
const CRUD_URL = `${API_URL}/tipo-alumno`
const GET_CRUD_URL = `${API_URL}/tipo-alumno/find-all/query`

const getUsers = (query: string): Promise<StudentTypeQueryResponse> => {
  return axios
    .get(`${GET_CRUD_URL}/?${query}`)
    .then((d: AxiosResponse<StudentTypeQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<StudentType | undefined> => {
  return axios
    .get(`${CRUD_URL}/find-one/${id}`)
    .then((response: AxiosResponse<Response<StudentType>>) => response.data)
    .then((response: Response<StudentType>) => response.data)
}

const createUser = (dataModel: StudentType): Promise<StudentType | undefined> => {
  return axios
    .post(`${CRUD_URL}/create`, dataModel)
    .then((response: AxiosResponse<Response<StudentType>>) => response.data)
    .then((response: Response<StudentType>) => response.data)
}

const updateUser = (dataModel: StudentType): Promise<StudentType | undefined> => {
  const {id, ...dataModeldb} = dataModel
  return axios
    .patch(`${CRUD_URL}/update/${id}`, dataModeldb)
    .then((response: AxiosResponse<Response<StudentType>>) => response.data)
    .then((response: Response<StudentType>) => response.data)
}

const deleteUser = (dataId: ID): Promise<void> => {
  return axios.delete(`${CRUD_URL}/remove/${dataId}`).then(() => {})
}

const deleteSelectedUsers = (dataIds: Array<ID>): Promise<void> => {
  const requests = dataIds.map((id) => axios.delete(`${CRUD_URL}/remove/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}

import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {CourseLerningDetails, CourseLerningDetailsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;
const CRUD_URL = `${API_URL}/curso-aprender-detalle`
const GET_CRUD_URL = `${API_URL}/curso-aprender-detalle/find-all/query`

const getUsers = (query: string): Promise<CourseLerningDetailsQueryResponse> => {
  return axios
    .get(`${GET_CRUD_URL}/?${query}`)
    .then((d: AxiosResponse<CourseLerningDetailsQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<CourseLerningDetails | undefined> => {
  return axios
    .get(`${CRUD_URL}/find-one/${id}`)
    .then((response: AxiosResponse<Response<CourseLerningDetails>>) => response.data)
    .then((response: Response<CourseLerningDetails>) => response.data)
}

const createUser = (dataModel: CourseLerningDetails): Promise<CourseLerningDetails | undefined> => {
  return axios
    .post(`${CRUD_URL}/create`, dataModel)
    .then((response: AxiosResponse<Response<CourseLerningDetails>>) => response.data)
    .then((response: Response<CourseLerningDetails>) => response.data)
}

const updateUser = (dataModel: CourseLerningDetails): Promise<CourseLerningDetails | undefined> => {
  const {id, ...dataModeldb} = dataModel
  return axios
    .patch(`${CRUD_URL}/update/${id}`, dataModeldb)
    .then((response: AxiosResponse<Response<CourseLerningDetails>>) => response.data)
    .then((response: Response<CourseLerningDetails>) => response.data)
}

const deleteUser = (dataId: ID): Promise<void> => {
  return axios.delete(`${CRUD_URL}/remove/${dataId}`).then(() => {})
}

const deleteSelectedUsers = (dataIds: Array<ID>): Promise<void> => {
  const requests = dataIds.map((id) => axios.delete(`${CRUD_URL}/remove/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}

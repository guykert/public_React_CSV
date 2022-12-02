import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {Country, CountryQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;
const CRUD_URL = `${API_URL}/pais`
const GET_CRUD_URL = `${API_URL}/pais/find-all/query`

const getUsers = (query: string): Promise<CountryQueryResponse> => {
  return axios
    .get(`${GET_CRUD_URL}/?${query}`)
    .then((d: AxiosResponse<CountryQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<Country | undefined> => {
  return axios
    .get(`${CRUD_URL}/find-one/${id}`)
    .then((response: AxiosResponse<Response<Country>>) => response.data)
    .then((response: Response<Country>) => response.data)
}

const createUser = (dataModel: Country): Promise<Country | undefined> => {
  return axios
    .post(`${CRUD_URL}/create`, dataModel)
    .then((response: AxiosResponse<Response<Country>>) => response.data)
    .then((response: Response<Country>) => response.data)
}

const updateUser = (dataModel: Country): Promise<Country | undefined> => {
  const {id, ...dataModeldb} = dataModel
  return axios
    .patch(`${CRUD_URL}/update/${id}`, dataModeldb)
    .then((response: AxiosResponse<Response<Country>>) => response.data)
    .then((response: Response<Country>) => response.data)
}

const deleteUser = (dataId: ID): Promise<void> => {
  return axios.delete(`${CRUD_URL}/remove/${dataId}`).then(() => {})
}

const deleteSelectedUsers = (dataIds: Array<ID>): Promise<void> => {
  const requests = dataIds.map((id) => axios.delete(`${CRUD_URL}/remove/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}

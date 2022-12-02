import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleAuthProvider } from '../../../firebase/firebase-config';


const API_URL = process.env.REACT_APP_API_URL_CSV ? process.env.REACT_APP_API_URL_CSV : process.env.REACT_APP_API_URL;

// const API_URL = process.env.REACT_APP_API_URL;



export const GET_USER_BY_ACCESSTOKEN_URL = process.env.REACT_APP_API_URL_CSV ? `${API_URL}/auth/renew` : `${API_URL}/verify_token`;

// export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`

export const LOGIN_URL = process.env.REACT_APP_API_URL_CSV ? `${API_URL}/auth/login` : `${API_URL}/login`;

export const LOGIN_EXIST_GOOGLE_URL = `${API_URL}/auth/confirmg`;

// export const LOGIN_URL = `${API_URL}/login`

export const REGISTER_URL = process.env.REACT_APP_API_URL_CSV ? `${API_URL}/auth/register` : `${API_URL}/register`;

// export const REGISTER_URL = `${API_URL}/auth/register`

export const REGISTER_GOOGLE_URL = `${API_URL}/auth/register-google`

export const CHANGE_PASSWORD = `${API_URL}/auth/change_password`


export const REQUEST_PASSWORD_URL = process.env.REACT_APP_API_URL_CSV ? `${API_URL}/auth/forgotpass` : `${API_URL}/forgot_password`;

// export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

export function loginGoogleExist(uid: string) {
  return axios.post<AuthModel>(LOGIN_EXIST_GOOGLE_URL, {
    uidg : uid
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password
  })
}

// Server should return AuthModel
export function changePassword(
  token: string,
  password: string
) {

  return axios.post(CHANGE_PASSWORD, {
    password
  },{
    headers: {
      'Authorization': 'Bearer ' + token

    }
  })

}



// Server should return AuthModel
export function registerGoogle(
  email: string,
  firstname: string,
  lastname: string,
  uidg: string,
  displayName: string,
  first_nameg: string,
  last_nameg: string,
  photoURL: string,
  emailg: string,
) {
  return axios.post(REGISTER_GOOGLE_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    uidg,
    displayName,
    first_nameg,
    last_nameg,
    photoURL,
    emailg
  })
}

export const startGoogleLogin = () =>{
      const auth = getAuth();
      return signInWithPopup(auth, googleAuthProvider);
}


// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string,name: string,uid: string,ok: boolean) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    token,
    name,
    uid,
    ok,
  },{
    headers: {
      'x-token': token
    }
  })
}

import { createSlice } from '@reduxjs/toolkit';

interface IAuth {
    uid: string
    displayName: string
    firstname: string
    lastname: string
    photoURL: string
    email: string
    errorMesage: string
    status: string
}


const initialState: IAuth = {
    status : 'no-autorizado' ,
    uid: '',
    displayName: '',
    firstname: '',
    lastname: '',
    photoURL: '',
    email: '',
    errorMesage:'',
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        authRegisterGoogle: (state, action ) => {
            return {
                ...state,
                uid : action.payload.uid,
                displayName : action.payload.displayName,
                firstname : action.payload.firstname,
                lastname : action.payload.lastname,
                photoURL : action.payload.photoURL,
                email : action.payload.email,
                errorMesage : action.payload.errorMesage,

            }
        }
    }
})

export const { authRegisterGoogle } = authSlice.actions;
export default authSlice.reducer;

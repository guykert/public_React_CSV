import { Dispatch } from "redux";
// import { authRegisterGoogle} from "./authSlice";
import { AnyAction } from 'redux';
import { State } from "@popperjs/core";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

// Types to cut down on boilerplate across dozens of thunks.
type Dispatcher = ThunkDispatch<State, undefined, AnyAction>;
type GetState = () => State;

export const startRegisterGoogle = (  ):ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        // dispatch(authRegisterGoogle);
    }
}
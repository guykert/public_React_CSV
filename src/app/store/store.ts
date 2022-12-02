
import { configureStore } from '@reduxjs/toolkit';
import authSliceReduser from '../modules/auth/core/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSliceReduser,
    }
});

// export const store: Store<ArticleState, ArticleAction> & {
//     dispatch: DispatchType
//   } = createStore(reducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
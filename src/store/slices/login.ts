import { createSlice } from '@reduxjs/toolkit';
import { LOGIN } from '../actionTypes';
interface userInitialState {
    token: string;
    loading: boolean;
    error: string;
}
const initialState: userInitialState = {
    token: '',
    loading: false,
    error: '',
}
const loginSlice = createSlice({
    name: LOGIN + '/data',
    initialState,
    reducers: {

        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        }
    },
});

export const { setLoading, setToken, setError } = loginSlice.actions;
export default loginSlice.reducer;

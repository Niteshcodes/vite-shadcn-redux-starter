import { ERROR_MESSAGE } from '@/lib/enums';
import apiCaller, { ApiResponse } from '@/lib/helpers/apiHelper';
import { LoginApiResponse } from '@/lib/interfaces/apisResponse';
import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN } from '../actionTypes';
import { setError, setLoading, setToken } from '../slices/login';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* loginSaga(action: any) {
    const { email, password } = action.payload;
    yield put(setLoading(true));
    try {
        const response: ApiResponse<LoginApiResponse> = yield call(apiCaller, '/login', 'POST', {
            email,
            password,
            loggedFrom: "platform:" + navigator.platform + " " + "hostname:" + navigator.userAgent,
            lastLogin: new Date().toISOString()
        });
        if (response instanceof AxiosError) {
            throw response;
        }
        if (response.data) {
            const token = response.data.token;
            yield localStorage.setItem('token', token);
            yield localStorage.setItem('data', JSON.stringify(response.data));
            yield put(setToken(token));
        } else if (response.error) {
            yield put(setError(response.error));
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            // Vibration pattern for incorrect login
            yield navigator.vibrate([200, 100, 200]);
            yield put(setError(error?.response?.data.result?.message || error?.response?.data.errorMessage || ERROR_MESSAGE.UNEXPECTED));
        } else {
            // Handle unexpected errors
            yield put(setError(error?.toString() || ERROR_MESSAGE.UNEXPECTED));
        }
    } finally {
        yield put(setLoading(false));
    }
}


export function* watchLoginSaga() {
    yield takeEvery(LOGIN, loginSaga);
}

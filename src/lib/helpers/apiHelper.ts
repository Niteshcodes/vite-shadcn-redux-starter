import store from '@/store';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

const apiCaller = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET',
  body?: unknown,
  toaster?: boolean,
  toasterMessages?: {
    pending: string;
    success: string;
    error: string;
  },
  headers?: Record<string, string>,
  customURL?: string,
): Promise<ApiResponse<T> | AxiosError<unknown>> => {
  const response: ApiResponse<T> = {
    data: null,
    error: null,
  };

  try {
    const axiosInstance = axios.create({
      baseURL: customURL || import.meta.env.VITE_SERVER_BASE_URI,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    const res = axiosInstance(url, {
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${store.getState().login.token || localStorage.getItem('token')}`,
      },
    });

    if (toaster) {
      toast.promise(res, {
        loading: toasterMessages?.pending || 'Processing...',
        success: toasterMessages?.success || 'Request successful!',
        error: toasterMessages?.error || 'Something went wrong!',
      });
    }

    response.data = (await res).data.data || (await res).data.result;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 401) {
        localStorage.clear();
        window.location.reload();
      }
      toast.error(err.response?.data?.message || err.message || 'An unexpected error occurred');

      return err;
    }

    response.error = 'An unexpected error occurred';
    toast.error(response.error);
  }

  return response;
};

export default apiCaller;

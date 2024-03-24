import {appInfo} from '../constans/appInfo';
import axiosClient from './axiosClient';

class AuthApi {
  HandleAuthentication = async (
    url: string,
    data?: any,
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete',
  ) => {
    const BASE_URL = appInfo.BASE_URL;
    return await axiosClient(`${BASE_URL}/auth${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const authenticationApi = new AuthApi();
export default authenticationApi;

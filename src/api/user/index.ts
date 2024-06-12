import request from '../../utils/requests';
import type { Iuserinfo } from './type';

enum API{
    USER_LOGIN = '/api/user/login',
    USER_INFO = '/api/user/info'
}

export const UserLogin=(data:Iuserinfo) => request.post(API.USER_LOGIN,data);
export const UserInfo=()=>request.get(API.USER_INFO);
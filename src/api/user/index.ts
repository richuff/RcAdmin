import request from '../../utils/requests';
import type { Iuserinfo } from './type';

enum API {
    USER_LOGIN = '/api/admin/acl/index/login',
    USER_INFO = '/api/admin/acl/index/info',
    USER_LOGOUT = '/api/admin/acl/index/logout'
}

<<<<<<< HEAD
export const UserLogin=(data:Iuserinfo)=>request.post(API.USER_LOGIN,data);
export const UserInfo=()=>request.get(API.USER_INFO);
=======
export const UserLogin = (data: Iuserinfo) => request.post<any, any>(API.USER_LOGIN, data);
export const UserInfo = () => request.get<any, any>(API.USER_INFO);
export const UserLoginout = () => request.get<any, any>(API.USER_LOGOUT);
>>>>>>> 56a8778e9e5317507b7d344cda36908b812a3b4c

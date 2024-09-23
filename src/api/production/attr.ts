//书写与属性相关的API
import request from "../../utils/requests"
import type { CateGoryResponseData } from './type/type'
enum API {
    C1_URL = "/api/admin/product/getCategory1",
    C2_URL = "/api/admin/product/getCategory2/",
    C3_URL = "/api/admin/product/getCategory3/"
}

export const reqC1 = () => request.get<any, CateGoryResponseData>(API.C1_URL);

export const reqC2 = (category1Id: number | string) => request.get<any, CateGoryResponseData>(API.C2_URL + category1Id);

export const reqC3 = (category2Id: number | string) => request.get<any, CateGoryResponseData>(API.C3_URL + category2Id);
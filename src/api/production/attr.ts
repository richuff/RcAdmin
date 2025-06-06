//书写与属性相关的API
import request from "../../utils/requests"
import type { AttrResponseData, CateGoryResponseData } from './type/type'
enum API {
    C1_URL = "/api/admin/product/getCategory1",
    C2_URL = "/api/admin/product/getCategory2/",
    C3_URL = "/api/admin/product/getCategory3/",
    ATTR_URL = "/api/admin/product/attrInfoList/"
}

export const reqC1 = () => request.get<any, CateGoryResponseData>(API.C1_URL);

export const reqC2 = (category1Id: number | string) => request.get<any, CateGoryResponseData>(API.C2_URL + category1Id);

export const reqC3 = (category2Id: number | string) => request.get<any, CateGoryResponseData>(API.C3_URL + category2Id);

export const reqAttr = (category1Id:number | string, category2Id:number | string,category3Id:number | string) => request.get<any,AttrResponseData>(API.ATTR_URL+`${category1Id}/${category2Id}/${category3Id}`);
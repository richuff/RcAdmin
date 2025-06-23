//书写与属性相关的API
import request from "@/utils/requests"
import type { AttrResponseData, Attr, CateGoryResponseData } from './type'
enum API {
    START_URL = "/api/admin/product",
    C1_URL = START_URL+"/getCategory1",
    C2_URL = START_URL+"/getCategory2/",
    C3_URL = START_URL+"/getCategory3/",
    ATTR_URL = START_URL+"/attrInfoList/",
    UPDATE_ATTR = START_URL+"/saveAttrInfo",
    DELETE_ATTR = START_URL+"/deleteAttr/"
}

export const reqC1 = () => request.get<any, CateGoryResponseData>(API.C1_URL);

export const reqC2 = (category1Id: number | string) => request.get<any, CateGoryResponseData>(API.C2_URL + category1Id);

export const reqC3 = (category2Id: number | string) => request.get<any, CateGoryResponseData>(API.C3_URL + category2Id);

export const reqAttr = (category1Id:number | string, category2Id:number | string,category3Id:number | string) => 
    request.get<any,AttrResponseData>(API.ATTR_URL+`${category1Id}/${category2Id}/${category3Id}`);

export const reqUpdateAttr = (data:Attr) => request.post<any,any>(API.UPDATE_ATTR,data);

export const reqDeleteAttr = (data:number) => request.delete<any,any>(API.DELETE_ATTR + data)
import request from "@/utils/requests"
import type { HasSpuDataResponseData ,AllTradeMark
        ,SpuImgResponse,spuSaleAttrValueResponseData,
        HasSaleAttrResponseData} from "./type"

enum API {
    BASEURL="/api/admin/product",
    HASSPU_URL = API.BASEURL + "/",
    ALLTRADEMARK_URL = API.BASEURL + "/baseTrademark/getTrademarkList",
    IMAGE_URL = API.BASEURL + '/spuImageList/',
    SPUSALEATTR_LIST_URL= API.BASEURL + "/spuSaleAttrList",
    ALLSALEATTR_URL = API.BASEURL + "/baseSaleAttrList"
}

export const reqHasSpu = (page:number,limit:number,category3Id:number|string)=>
    request.get<any,HasSpuDataResponseData>(API.HASSPU_URL+`${page}/${limit}?category3Id=${category3Id}`)

export const reqAllTradeMark = ()=>request.get<any,AllTradeMark>(API.ALLTRADEMARK_URL)

export const reqSpuImageList = (spuId:number)=>request.get<any,SpuImgResponse>(API.IMAGE_URL+spuId)

export const reqSpuSaleAttrList = (spuId:number)=>request.get<any,spuSaleAttrValueResponseData>(API.SPUSALEATTR_LIST_URL+spuId)

export const reqAllSaleAttr = ()=>request.get<any,HasSaleAttrResponseData>(API.ALLSALEATTR_URL)
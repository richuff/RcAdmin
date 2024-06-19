import request from '../../utils/requests'
import type { ITrademarkResponseData, ITrademark } from './type/type'
enum API {
    TRADEMARK_URL = "/api/admin/product/baseTrademark/",
    ADDTRADEMARK_URL = "/api/admin/product/baseTrademark/save",
    UPDATETRADEMARK_URL = "/api/admin/product/baseTrademark/save/update"
}

export const reqHadTrademark = (page: number, pageSize: number) => request.get<any, ITrademarkResponseData>(API.TRADEMARK_URL + `${page}/${pageSize}`);

export const reqAddOrUpdateTrademark = (data: ITrademark) => {
    if (data.id) {
        return request.post(API.UPDATETRADEMARK_URL, data);
    } else {
        return request.post(API.ADDTRADEMARK_URL, data);
    }
}
import request from '../../utils/requests'
import type { ITrademarkResponseData } from './type/type'
enum API {
    TRADEMARK_URL = "/api/admin/product/baseTrademark/"
}

export const reqHadTrademark = (page: number, pageSize: number) => request.get<any, ITrademarkResponseData>(API.TRADEMARK_URL + `${page}/${pageSize}`);
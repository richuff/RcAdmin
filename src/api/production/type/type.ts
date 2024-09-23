//品牌类型定义
export interface IresponseTrademark {
    code: number;
    message: string;
    ok: boolean;
}

export interface ITrademark {
    id?: number;
    tmName: string;
    logoUrl: string;
}

export type IRecords = ITrademark[];

export interface ITrademarkResponseData extends IresponseTrademark {
    data: {
        records: IRecords;
        total: string;
        size: number;
        current: number;
        searchCount: boolean;
        pages: number;
    }
}
//属性类型定义
export interface CateGory1 {
    code: number;
    message: string;
    ok: boolean;
}

export interface CateGoryObj {
    id: number | string;
    name: string;
    category1Id?: number;
    category2Id?: number;
}

export interface CateGoryResponseData extends CateGory1 {
    data: CateGoryObj[]
}
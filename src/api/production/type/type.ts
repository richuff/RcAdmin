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
export interface ResponseData {
    code: number;
    message: string;
    ok: boolean;
}

export interface SpuData{
    id?:number,
    spuName:string,
    description:string,
    category3Id:string | number,
    tmId:number | string,
    spuSaleAttrList:null | SaleAttr[]
    spuImageList:null | SpuImg[]
}

export type Records = SpuData[]

export interface HasSpuDataResponseData extends ResponseData{
    data:{
        records:Records
        total:number,
        size:number,
        current:number,
        searchCount:boolean,
        pages:number
    }
}

export interface TradeMark{
    id:number,
    tmName:string,
    logoUrl:string
}

export interface AllTradeMark extends ResponseData{
    data:TradeMark[]
}

export interface SpuImg{
    id?:number,
    createTime?:string,
    updateTime?:string,
    spuId?:number,
    imgName:string,
    imgUrl:string
}

export interface SpuImgResponse extends ResponseData{
    data:SpuImg[]
}

export interface SpuSaleAttr {
    id?:number,
    createTime?:null,
    updateTime?:null,
    spuId?:number,
    baseSaleAttrId:number,
    saleAttrValueName:string,
    saleAttrname?:string,
    isChecked?:null
}

//存储已有的销售属性值数组类型
export type spuSaleAttrValueList = SpuSaleAttr[]

export interface SaleAttr{
    id?:number,
    createTime?:null,
    updateTime?:null,
    spuId:number,
    baseSaleAttrId:number,
    saleAttrName?:string,
    spuSaleAttrValueList:spuSaleAttrValueList
}

export interface spuSaleAttrValueResponseData extends ResponseData{
    data:SaleAttr[]
}

export interface HasSaleAttr{
    id:number,
    name:string
}

export interface HasSaleAttrResponseData{
    data:HasSaleAttr[]
}
import type { RouteRecordRaw } from 'vue-router'
import type { CateGoryObj } from "../../api/production/type/type"

export interface UserState {
    token: string | null;
    meunRoutes: RouteRecordRaw[];
}

export interface CategoryState {
    C1ID: string | number;
    C1Arr: CateGoryObj[];
    C2Arr: CateGoryObj[];
    C3Arr: CateGoryObj[];
}
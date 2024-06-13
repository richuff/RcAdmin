import type {RouteRecordRaw} from 'vue-router'

export interface UserState {
    token:string|null;
    meunRoutes:RouteRecordRaw[];
}
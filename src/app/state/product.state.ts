
export enum DataStateEnum{

    LOADED,
    LOADING,
    ERROR,
}

export interface appDataState<T>{

    dataState?: DataStateEnum,
    data?:T,
    errorMessage?:string
}
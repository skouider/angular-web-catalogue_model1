
export enum productActionTypes{
    GET_ALL_PRODUCTS = "[Product] Get All Product",
    GET_SELECTED_PRODUCTS = "[Product] Get Selected Product",
    GET_AVAILABLE_PRODUCTS = "[Product] Get Available Product",
    ADD_PRODUCTS = "[Product] Add Product",
    SEARCH_PRODUCTS = "[Product] Search Product",
    SELECT_PRODUCT = "[Product] Select Product",
    EDIT_PRODUCT = "[Product] Edit Product",
    DELETE_PRODUCT = "[Product] Delete Product",
}

export interface ActionEvent{
    type: productActionTypes,
    payload?: any
}


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
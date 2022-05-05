import { ResponseModel } from "./responseModel";

export interface SingeResponseModel<T> extends ResponseModel {

    data:T;
}
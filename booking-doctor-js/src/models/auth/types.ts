import { UserRole } from './constants';

export interface IAuthLoginResponse {
    access_token: string;
    token_type: string;
}

//#region API types
export interface IAuthRegisterData {
    email: string;
    password: string;
    role: UserRole;
}

export interface IAuthLoginData {
    email: string;
    password: string;
}
//#endregion

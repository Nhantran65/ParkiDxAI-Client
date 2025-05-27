import { UserRole } from '../auth';
import { IBaseObject } from '../base';

export interface IProfile extends IBaseObject {
    first_name: string;
    last_name: string;
    email: string;
    role: UserRole;
}

//#region API types
export interface IGetProfilesParams {}

export interface IUpdateProfileData {
    first_name: string;
    last_name: string;
    email: string;
    role: UserRole;
}

//#endregion

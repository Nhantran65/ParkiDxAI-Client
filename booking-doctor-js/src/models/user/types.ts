import { UserRole } from '../auth';
import { IBaseObject } from '../base';

export interface IUser extends IBaseObject {
    first_name: string | null;
    last_name: string | null;
    email: string;
    role: UserRole;
    profile_picture: string;
    bio: string;
}

export interface IPatient extends IUser {}

//#region API types
export interface ICreateUserData {
    profile_picture?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    email: string;
    role: UserRole;
    password: string;
}

export interface IUpdateUserData {
    profile_picture?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    email: string;
    role: UserRole;
}

//#endregion

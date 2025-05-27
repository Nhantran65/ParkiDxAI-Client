import { UserRole } from '../auth';
import { IdType } from '../base';
import { IUser } from '../user';

export interface IDoctor extends IUser {
    user_id: IdType;
    hospital_id: IdType;
    hospital_name: string | null;
    title: string;
    specialties: string;
    education: string;
    experience: string;
    member_of: string;
    publications: string;
    profile_picture: string;
    bio: string;
}
//#region API types
export interface ICreateDoctorData {
    email: string;
    password: string;
    first_name?: string | null;
    last_name?: string | null;

    hospital_id?: IdType | null;
    title?: string | null;
    specialties?: string | null;
    education?: string | null;
    experience?: string | null;
    member_of?: string | null;
    publications?: string | null;
    profile_picture?: string | null;
    bio?: string | null;
}

export interface IUpdateDoctorData {
    user_id: IdType;
    hospital_id?: IdType | null;
    title?: string | null;
    specialties?: string | null;
    education?: string | null;
    experience?: string | null;
    member_of?: string | null;
    publications?: string | null;
    profile_picture?: string | null;
    bio?: string | null;
}

//#endregion

import { IBaseObject } from '../base';

export interface IHospital extends IBaseObject {
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    established: string;
}

//#region API types
export interface IGetHospitalsParams {}

export interface ICreateHospitalData {
    name: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    website?: string | null;
    established?: string | null;
}

export type IUpdateHospitalData = ICreateHospitalData;

//#endregion

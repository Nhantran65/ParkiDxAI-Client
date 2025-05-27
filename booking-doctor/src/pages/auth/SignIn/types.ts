import { IAuthenticationParams } from '@jframework/jfw-js';

export interface ISignInFormValues extends IAuthenticationParams {
    isRememberMe: boolean;
}

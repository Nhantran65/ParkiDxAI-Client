import { HttpResponse } from '@jframework/jfw-js';
import { AxiosError, isAxiosError } from 'axios';

// Standardized error interface
interface IError {
    message?: string;
    code?: string | number;
    httpCode?: number;
}

export const errorAdaptee = (error: Error | AxiosError<HttpResponse>): IError[] => {
    // Default to an unknown error
    const errors: IError[] = [];

    // Handle standard (Error) exceptions
    if (error instanceof Error && !isAxiosError(error)) {
        errors.push({
            message: error.message,
            code: error.name,
        });
    }

    // Handle AxiosError
    if (isAxiosError<HttpResponse>(error)) {
        const response = error.response;

        // Prioritize Axios errors (e.g., network error, timeout) if JFW response is unavailable
        if (error.code && !response?.data) {
            errors.push({
                message: error.message,
                code: error.code, // HTTP code
                httpCode: response?.status,
            });
        }

        // If JFW API returns errors, convert all errors into IError[]
        if (response?.data && response.data.errors?.length > 0) {
            const jfwErrors = response.data.errors.map(
                err =>
                    ({
                        message: err.details,
                        code: err.errorCode, // errorCode BE
                        httpCode: response.data.statusCode,
                    } as IError)
            );

            errors.push(...jfwErrors);
        }
    }

    return errors;
};

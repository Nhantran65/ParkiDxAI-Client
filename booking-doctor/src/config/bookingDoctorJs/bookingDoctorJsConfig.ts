import { bookingDoctorJs } from 'booking-doctor-js';
import { globalErrorHandler } from './globalErrorHandler';

bookingDoctorJs.init({
    globalErrorHandler: globalErrorHandler,
});

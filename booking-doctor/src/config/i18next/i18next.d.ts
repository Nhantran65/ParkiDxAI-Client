import Resources from './resources';

declare module 'i18next' {
    // Mở rộng CustomTypeOptions
    interface CustomTypeOptions {
        // tùy chỉnh loại namespace, nếu bạn đã thay đổi nó
        defaultNS: 'common';
        // tùy chỉnh loại tài nguyên
        resources: Resources;
        // các tùy chọn khác
    }
}

import { BrandDomainType } from '@jframework/jfw-js';

export const BRAND_URL = import.meta.env.DEV ? import.meta.env.VITE_BRAND_URL : location.hostname;
export const DEFAULT_WEBSITE_TYPE: BrandDomainType = import.meta.env.DEV
    ? import.meta.env.VITE_BRAND_TYPE
    : BrandDomainType.Client;

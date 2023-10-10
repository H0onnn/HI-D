import instance from './instance';
import { setupInterceptors } from './interceptors';
import { apiMethods } from './apiMethods';
import { addInstaceGroupMethod } from './addInstanceGroupMethod';

setupInterceptors(instance);

export const httpClient = addInstaceGroupMethod(instance, apiMethods);

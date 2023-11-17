import instance from './instance';
import { setupInterceptors } from './interceptors';
import { apiMethods } from './apiMethods';
import { addInstanceGroupMethod } from './addInstanceGroupMethod';

setupInterceptors(instance);

export const httpClient = addInstanceGroupMethod(instance, apiMethods);

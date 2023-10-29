/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios';

type Callback = (...args: any[]) => { url: string; data?: any };
type InstanceObjectAPI = {
  [key: string]: Callback;
};
type GroupedInstanceObjectAPI = Record<string, InstanceObjectAPI>;
type MethodInstanceObjectAPI = {
  [key in 'get' | 'post' | 'put' | 'patch' | 'delete']?: InstanceObjectAPI;
};
type GroupedMethodInstanceObjectAPI = {
  [key: string]: MethodInstanceObjectAPI;
};

export function addInstace(
  instance: AxiosInstance,
  instanceObjectAPI: InstanceObjectAPI,
): Record<string, (...args: any[]) => Promise<any>> {
  const instanceMap = ([key, callback]: [string, Callback]) => [
    key,
    (...parameters: any[]) => instance(callback(...parameters)),
  ];
  return Object.fromEntries(Object.entries(instanceObjectAPI).map(instanceMap));
}

export function addInstaceGroup(
  instance: AxiosInstance,
  instanceObjectAPI: GroupedInstanceObjectAPI,
): Record<string, Record<string, (...args: any[]) => Promise<any>>> {
  return Object.fromEntries(
    Object.entries(instanceObjectAPI).map(([key, value]) => [key, addInstace(instance, value)]),
  );
}

export function addInstaceMethod(
  instance: AxiosInstance,
  instanceObjectAPI: MethodInstanceObjectAPI,
): Record<string, Record<string, (...args: any[]) => Promise<any>>> {
  return Object.fromEntries(
    Object.entries(instanceObjectAPI)
      .filter(([method]: [string, any]) =>
        ['get', 'post', 'put', 'patch', 'delete'].includes(method.toLowerCase()),
      )
      .map(([method, value]) => {
        const instanceMap = ([key, callback]: [string, Callback]) => [
          key,
          (...parameters: any[]) => instance({ ...callback(...parameters), method }),
        ];
        return [method, Object.fromEntries(Object.entries(value).map(instanceMap))];
      }),
  );
}

export function addInstaceGroupMethod(
  instance: AxiosInstance,
  instanceObjectAPI: GroupedMethodInstanceObjectAPI,
): Record<string, Record<string, Record<string, (...args: any[]) => Promise<any>>>> {
  return Object.fromEntries(
    Object.entries(instanceObjectAPI).map(([key, value]) => [
      key,
      addInstaceMethod(instance, value),
    ]),
  );
}

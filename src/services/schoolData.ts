import { httpClient } from '../api/httpClient';
import { SchoolOrMajorDataInterface } from '@/types/schoolAndMajor';

export const getSchools = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) {
    return [];
  }

  const response = await httpClient.search.get.school(keyword);
  console.log(response);
  return response.data.dataList.map((item: SchoolOrMajorDataInterface) => item.name);
};

export const getMajors = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) {
    return [];
  }

  const response = await httpClient.search.get.major(keyword);
  console.log(response);
  return response.data.dataList.map((item: SchoolOrMajorDataInterface) => item.name);
};

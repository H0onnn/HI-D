import { httpClient } from '../apiClient';

export const getSchools = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) {
    return [];
  }

  const data = await httpClient.searchSchool(keyword);
  console.log(data);
  return data;
};

export const getMajors = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) {
    return [];
  }

  const data = await httpClient.searchMajor(keyword);
  console.log(data);
  return data;
};

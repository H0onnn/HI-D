import { useState, useEffect } from 'react';
import { getSchools, getMajors } from '../api/services/schoolData';
import { INCOMPLETE_KOREAN_REGEX, ENGLISH_ONLY_REGEX } from '../utils/auth/validationRules';
import localCache from '@/utils/localCache';

const useSchoolMajorData = (fieldName: string, searchValue: string) => {
  const [datas, setDatas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const cachedData = await localCache.readFromCache(searchValue);

      if (cachedData.length > 0) {
        setDatas(cachedData);
        setIsLoading(false);
        return;
      }

      try {
        if (INCOMPLETE_KOREAN_REGEX.test(searchValue) || ENGLISH_ONLY_REGEX.test(searchValue))
          return;
        const res =
          fieldName === 'school' ? await getSchools(searchValue) : await getMajors(searchValue);
        setDatas(res);

        localCache.writeToCache(searchValue, res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fieldName, searchValue]);

  return { datas, isLoading };
};

export default useSchoolMajorData;

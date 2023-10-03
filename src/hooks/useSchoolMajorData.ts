import { useState, useEffect } from 'react';
import { getSchools, getMajors } from '../api/schoolData';
import { INCOMPLETE_KOREAN_REGEX, ENGLISH_ONLY_REGEX } from '../utils/auth/validationRules';

const useSchooMajorData = (fieldName: string, searchValue: string) => {
  const [datas, setDatas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (INCOMPLETE_KOREAN_REGEX.test(searchValue) || ENGLISH_ONLY_REGEX.test(searchValue))
          return;
        const res =
          fieldName === 'school' ? await getSchools(searchValue) : await getMajors(searchValue);
        setDatas(res);
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

export default useSchooMajorData;

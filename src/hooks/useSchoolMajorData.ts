import { useState, useEffect } from 'react';
import { getSchools, getMajors } from '../api/schoolData';

const useSchooMajorData = (fieldName: string, searchValue: string) => {
  const [datas, setDatas] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res =
          fieldName === 'school' ? await getSchools(searchValue) : await getMajors(searchValue);
        setDatas(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [fieldName, searchValue]);

  return { datas };
};

export default useSchooMajorData;

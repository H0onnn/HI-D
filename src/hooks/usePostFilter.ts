import { useEffect, useState } from 'react';
import { POST_FILTER_LIST } from '@/constants/post';
import { MAJOR_LIST } from '@/constants/majorCategory';
import usePostFilterStore from '@/store/postFilterStore';

const dataList = POST_FILTER_LIST;
const majorDataList = MAJOR_LIST;

const usePostFilter = () => {
  const [selectedId, setSelectedId] = useState(dataList[0].id);
  const [majorId, setMajorId] = useState(majorDataList[0].id);
  const { setFilter, setMajor } = usePostFilterStore();

  useEffect(() => {
    if (!selectedId) return;
    const selectedContent = dataList.find((data) => data.id === selectedId) || dataList[0];
    setFilter({
      sortBy: selectedContent?.sortBy,
      direction: selectedContent?.direction,
    });
    return () => {
      setFilter({
        sortBy: 'createAt',
        direction: 'DESC',
      });
    };
  }, [selectedId]);

  useEffect(() => {
    if (!majorId) return;
    const selectedMajor = majorDataList.find((data) => data.id === majorId) || majorDataList[0];
    setMajor(selectedMajor?.code);
    return () => {
      setMajor('');
    };
  }, [majorId]);

  return { selectedId, setSelectedId, dataList, majorId, setMajorId, majorDataList };
};

export default usePostFilter;

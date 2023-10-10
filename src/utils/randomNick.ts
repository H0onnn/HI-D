export const generateRandomNickname = (): string => {
  const names = [
    '서울대',
    '한양대',
    '고려대',
    '서강대',
    '연세대',
    '중앙대',
    '부산대',
    '경북대',
    '충남대',
    '전북대',
    'Harvard',
    'Yale',
    'Stanford',
    'MIT',
    'Princeton',
    'Oxford',
    'Cambridge',
    'Caltech',
    'UCLA',
    'Berkeley',
  ];

  const getRandomItem = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

  // 랜덤한 이름 부분 선택
  const namePart = getRandomItem(names);

  // 3자리 랜덤 숫자 부분 생성
  const numberPart = Math.floor(100 + Math.random() * 900);

  return `${namePart}${numberPart}`;
};

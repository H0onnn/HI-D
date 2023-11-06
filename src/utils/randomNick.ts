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
    'Princet',
    'Oxford',
    'Camb',
    'Caltech',
    'UCLA',
    'Berkeley',
  ];

  const getRandomItem = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

  // 랜덤한 이름 부분 선택
  const namePart = getRandomItem(names);

  // 남은 길이 계산 (최소 2글자에서 최대 8글자 사이여야 함)
  const remainingLength = 8 - namePart.length;

  // 남은 길이에 따라 랜덤 숫자 부분 생성
  let numberPart = '';
  if (remainingLength > 0) {
    // 남은 길이만큼 랜덤 숫자 생성
    const min = Math.pow(10, remainingLength - 1); // 남은 길이에 맞는 최소 숫자
    const max = Math.pow(10, remainingLength) - 1; // 남은 길이에 맞는 최대 숫자
    numberPart = Math.floor(min + Math.random() * (max - min + 1)).toString();
  }

  return `${namePart}${numberPart}`;
};

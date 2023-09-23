export const emailValidation = {
  required: '이메일을 입력해주세요.',
  pattern: {
    // 이메일 형식 검사 : ex) abc@abc.com
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: '올바른 이메일 형식이 아닙니다.',
  },
};

export const passwordValidation = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    // 비밀번호 형식 검사 : 영어, 숫자, 특수문자 포함 8자에서 16자 사이
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
    message: '비밀번호는 영어, 숫자, 특수문자를 포함한 8자에서 16자 사이여야 합니다.',
  },
};

export const schoolValidation = {
  required: '학교명은 필수 입력 항목입니다.',
  pattern: {
    // 한글만 허용하면서 '학교' 단어를 포함
    value: /^[가-힣]+학교$/,
    message: '올바른 학교명을 입력해주세요.',
  },
  validate: {
    notOnlyConsonantsVowels: (value: string) => {
      // 'ㅁㄴㅇㅁㄴㅇ'와 같은 값 방지
      const hasConsonantVowelOnlyPattern = /^[ㄱ-ㅎㅏ-ㅣ]+$/;
      return !hasConsonantVowelOnlyPattern.test(value) || '올바른 학교명을 입력해주세요.';
    },
  },
};

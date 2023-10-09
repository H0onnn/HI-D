export const emailValidation = {
  required: '이메일은 필수 입력 항목입니다.',
  pattern: {
    // 이메일 형식 검사 : ex) abc@abc.com
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: '올바른 이메일 형식이 아닙니다.',
  },
};

export const passwordValidation = {
  required: '비밀번호는 필수 입력 항목입니다.',
  minLength: {
    value: 8,
    message: '비밀번호는 최소 8글자 이상이어야 합니다.',
  },
  maxLength: {
    value: 16,
    message: '비밀번호는 최대 16글자 까지 허용됩니다.',
  },
  pattern: {
    // 비밀번호 형식 검사 : 영어, 숫자, 특수문자 포함 8자에서 16자 사이
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
    message: '비밀번호는 영어, 숫자, 특수문자를 포함해야 합니다.',
  },
};

export const passwordConfirmValidation = (password: string) => ({
  validate: {
    matchesPreviousPassword: (value: string) => {
      return password === value || '비밀번호가 일치하지 않습니다.';
    },
  },
});

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

export const majorValidation = {
  required: '학과명은 필수 입력 항목입니다.',
  pattern: {
    // 한글만 허용 (특수문자, 공백 제외)
    value: /^[가-힣]+학과$/,
    message: '올바른 학과명을 입력해주세요.',
  },
  validate: {
    notOnlyConsonantsVowels: (value: string) => {
      // 'ㅁㄴㅇㅁㄴㅇ'와 같은 값 방지
      const hasConsonantVowelOnlyPattern = /^[ㄱ-ㅎㅏ-ㅣ]+$/;
      return !hasConsonantVowelOnlyPattern.test(value) || '올바른 학과명을 입력해주세요.';
    },
  },
};

export const nicknameValidation = {
  required: '닉네임은 필수 입력 항목입니다.',
  minLength: {
    value: 2,
    message: '닉네임은 최소 2글자 이상이어야 합니다.',
  },
  maxLength: {
    value: 8,
    message: '닉네임은 최대 8글자 까지 허용됩니다.',
  },
  pattern: {
    // 특수문자 제외, 1글자에서 8글자 사이
    value: /^[A-Za-z0-9가-힣]{1,8}$/,
    message: '사용할 수 없는 닉네임입니다.',
  },
};

// 검색어에 자음 또는 모음만 있는 문자가 있는지 확인하는 정규식 ex) 아ㅏ메
// 통과되는 검색어: 아메
// 통과되지 않는 검색어: 아ㅏ메
export const INCOMPLETE_KOREAN_REGEX = /[ㄱ-ㅎㅏ-ㅣ]/;

export const ENGLISH_ONLY_REGEX = /^[a-zA-Z]+$/;

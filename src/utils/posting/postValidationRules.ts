export const titleValidation = {
  required: '제목은 필수 입력 항목입니다.',
  minLength: {
    value: 2,
    message: '제목은 최소 2글자 이상이어야 합니다.',
  },
  maxLength: {
    value: 20,
    message: '제목은 최대 20글자 까지 허용됩니다.',
  },
};

export const postContentValidation = {
  required: '게시글 내용은 필수 입력 항목입니다.',
  minLength: {
    value: 10,
    message: '게시글은 최소 10글자 이상 입력해야 합니다.',
  },
  maxLength: {
    value: 1000,
    message: '게시글은 최대 1000글자 까지 허용됩니다.',
  },
};

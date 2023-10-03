export interface LoginDataInterface {
  mail: string;
  password: string;
}

export interface ProfileSetupDataInterface {
  mail: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  school: string;
  major: string;
  imageURL: string;
}

export interface SVGIconInterface {
  color: string;
}

export interface ProfileSetupStepInterface {
  onNext: () => void;
}

export interface KeywordDataInterface {
  name: string;
}

export type setValueFunction = (
  name: string,
  value: string,
  options?: { shouldValidate?: boolean; shouldDirty?: boolean },
) => void;

export interface KeywordSearchInterface {
  fieldName: string;
  keywordSelectHandler: (
    fieldName: string,
    keyword: string,
    setValue: setValueFunction,
    onBlur: () => void,
  ) => void;
  setValue: setValueFunction;
  onBlur: () => void;
}

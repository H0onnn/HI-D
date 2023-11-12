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
  imageUrl: string;
}

export interface SVGIconInterface {
  color: string;
}

export interface ProfileSetupStepInterface {
  onNext?: () => void;
  isEdit?: boolean;
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

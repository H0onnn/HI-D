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
  agreement: boolean;
}

export interface SVGIconInterface {
  color: string;
}

export interface ProfileSetupStepInterface {
  onNext: () => void;
}

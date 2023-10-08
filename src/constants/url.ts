import DEFAULT_IMG from '../public/images/elephant.png';

const { VITE_APP_API_BASE_URL } = import.meta.env;

export const URL = {
  DEFAULT_PROFILE_IMG: DEFAULT_IMG,
  API_BASE_URL: VITE_APP_API_BASE_URL,
} as const;

export interface AuthStateInterface {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

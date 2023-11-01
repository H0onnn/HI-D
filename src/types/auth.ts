export interface AuthStateInterface {
  token: string | null;
  actions: AuthActionsInterface;
}

export interface AuthActionsInterface {
  setToken: (token: string) => void;
  logout: () => void;
}

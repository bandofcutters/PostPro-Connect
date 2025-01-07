export interface User {
  id: string;
  email: string;
  role: 'employer' | 'freelancer';
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface SignInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}
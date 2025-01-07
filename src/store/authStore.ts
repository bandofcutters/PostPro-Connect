import { create } from 'zustand';
import { AuthState, SignInData, User } from '../types/auth';

interface AuthStore extends AuthState {
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  setUser: (user: User | null) => void;
  setError: (error: string | null) => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user, error: null }),
  setError: (error) => set({ error }),
  setLoading: (isLoading) => set({ isLoading }),

  signIn: async (data) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (data.email === 'employer@example.com' && data.password === 'password') {
        const user: User = {
          id: '1',
          email: data.email,
          role: 'employer',
          name: 'John Doe'
        };
        set({ user, isLoading: false });
        if (data.rememberMe) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An error occurred', 
        isLoading: false 
      });
    }
  },

  signOut: () => {
    localStorage.removeItem('user');
    set({ user: null });
  }
}));
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const { user, signIn, signOut, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      useAuthStore.getState().setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSignIn = async (email: string, password: string, rememberMe: boolean) => {
    await signIn({ email, password, rememberMe });
    const currentUser = useAuthStore.getState().user;
    if (currentUser) {
      navigate('/');
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/signin');
  };

  return {
    user,
    isLoading,
    error,
    signIn: handleSignIn,
    signOut: handleSignOut,
    isAuthenticated: !!user
  };
}
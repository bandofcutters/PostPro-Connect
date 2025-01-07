import React from 'react';
import { ProfileUpdateData } from '../../../types/profile';

interface UpdateProfileContextType {
  formData: ProfileUpdateData;
  updateFormData: (data: Partial<ProfileUpdateData>) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

export const UpdateProfileContext = React.createContext<UpdateProfileContextType | undefined>(undefined);

export function useUpdateProfile() {
  const context = React.useContext(UpdateProfileContext);
  if (!context) {
    throw new Error('useUpdateProfile must be used within UpdateProfileProvider');
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

export function UpdateProfileProvider({ children }: Props) {
  const [formData, setFormData] = React.useState<ProfileUpdateData>({
    name: '',
    role: '',
    location: '',
    dailyRate: 0,
    bio: '',
    imageUrl: '',
    availability: []
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const updateFormData = (data: Partial<ProfileUpdateData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <UpdateProfileContext.Provider 
      value={{ 
        formData, 
        updateFormData,
        isSubmitting,
        setIsSubmitting
      }}
    >
      {children}
    </UpdateProfileContext.Provider>
  );
}
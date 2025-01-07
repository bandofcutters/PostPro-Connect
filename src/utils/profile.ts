import { ProfileUpdateData, ProfileUpdateResponse } from '../types/profile';
import { useProfileStore } from '../store/profileStore';

export async function updateProfile(id: string, data: ProfileUpdateData): Promise<ProfileUpdateResponse> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update local store
    useProfileStore.getState().updateProfile(id, data);
    
    return {
      success: true,
      message: 'Profile updated successfully',
      data
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update profile'
    };
  }
}
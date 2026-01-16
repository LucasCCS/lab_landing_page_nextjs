'use client';

import { createContext, useContext } from 'react';
import { useUserLocation } from '@/hooks/useUserLocation';

const UserLocationContext = createContext<any>(null);

export function UserLocationProvider({ children }: { children: React.ReactNode }) {
  const value = useUserLocation();
  return (
    <UserLocationContext.Provider value={value}>
      {children}
    </UserLocationContext.Provider>
  );
}

export const useUserLocationContext = () => useContext(UserLocationContext);

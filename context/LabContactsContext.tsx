'use client';

import { createContext, useContext } from 'react';
import { useLabContacts } from '@/hooks/LabContacts';

const LabContactsContext = createContext<any>(null);

export function LabContactsProvider({ children }: { children: React.ReactNode }) {
  const value = useLabContacts();
  return (
    <LabContactsContext.Provider value={value}>
      {children}
    </LabContactsContext.Provider>
  );
}

export const useLabContactsContext = () => useContext(LabContactsContext);

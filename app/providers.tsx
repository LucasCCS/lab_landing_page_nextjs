'use client';

import { LabContactsProvider } from '@/context/LabContactsContext';
import { RegionProvider } from '@/context/RegionContext';
import { UserLocationProvider } from '@/context/UserLocationContext';

export function Providers({
  children,
  zipcode,
}: {
  children: React.ReactNode;
  zipcode: string;
}) {
  return (
    <LabContactsProvider>
    <UserLocationProvider>
      <RegionProvider zipcode={zipcode}>
        {children}
      </RegionProvider>
    </UserLocationProvider>
    </LabContactsProvider>
  );
}

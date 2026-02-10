'use client';

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
    <UserLocationProvider>
      <RegionProvider zipcode={zipcode}>
        {children}
      </RegionProvider>
    </UserLocationProvider>
  );
}

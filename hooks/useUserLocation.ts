'use client';

import { useEffect, useState } from 'react';

type LocationData = {
  cep?: string;
  city?: string;
  state?: string;
  street?: string;
};

export function useUserLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const STORAGE_KEY = 'user_location';

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalização não suportada');
      setLoading(false);
      return;
    }

    const consent = localStorage.getItem('lgpd_consent');

    if (consent !== 'accepted') {
    setLoading(false);
    return;
    }


    const storedLocation = localStorage.getItem(STORAGE_KEY);
    if (storedLocation) {
        try {
            setLocation(JSON.parse(storedLocation));
            setLoading(false);
            return;
        } catch {
            localStorage.removeItem(STORAGE_KEY);
        }
    }

    console

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
          );
          const data = await res.json();
          const locationData = {
            cep: data.address.postcode,
            city: data.address.city || data.address.town,
            state: data.address.state,
            street: data.address.road,
          };
          setLocation(locationData);

          localStorage.setItem(STORAGE_KEY, JSON.stringify(locationData));
        } catch {
          setError('Erro ao obter endereço');
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Permissão de localização negada');
        setLoading(false);
      }
    );
  }, []);

  return { location, loading, error, setLocation };
}

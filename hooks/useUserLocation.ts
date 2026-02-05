'use client';

import { useEffect, useState } from 'react';

type LocationData = {
  cep?: string;
  city?: string;
  state?: string;
  street?: string;
};

const LGPD_ACCEPTED_EVENT = 'lgpd-accepted';
const CONSENT_KEY = 'lgpd_consent';
const STORAGE_KEY = 'user_location';

function hasConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_KEY) === 'accepted';
}

export function useUserLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [consentGranted, setConsentGranted] = useState(hasConsent);

  useEffect(() => {
    const onLGPDAccepted = () => setConsentGranted(true);
    window.addEventListener(LGPD_ACCEPTED_EVENT, onLGPDAccepted);
    return () => window.removeEventListener(LGPD_ACCEPTED_EVENT, onLGPDAccepted);
  }, []);

  useEffect(() => {
    if (!consentGranted) {
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
      setError('Geolocalização não suportada');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

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

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
          );
          const data = await res.json();
          const locationData: LocationData = {
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
  }, [consentGranted]);

  return { location, loading, error, setLocation };
}

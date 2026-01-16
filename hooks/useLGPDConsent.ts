'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'lgpd_consent';

export type LGPDStatus = 'accepted' | 'rejected' | null;

export function useLGPDConsent() {
  const [status, setStatus] = useState<LGPDStatus>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as LGPDStatus;
    if (stored) setStatus(stored);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setStatus('accepted');
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setStatus('rejected');
  }

  return { status, accept, reject };
}

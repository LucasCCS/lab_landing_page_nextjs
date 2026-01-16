'use client';

import { useLGPDConsent } from '@/hooks/useLGPDConsent';
import { getTheme } from '@/lib/get-theme';
import { Button } from './ui/button';
import { ArrowRight, X } from 'lucide-react';

export default function LGPDAlert() {
  const { status, accept, reject } = useLGPDConsent();
  const theme = getTheme();

  if (status !== null) return null;

  return (
    <div className={theme.lgpdAlert.wrapper}>
      <div className={theme.lgpdAlert.box}>
        <p>
          Utilizamos cookies e dados de localização para melhorar sua experiência,
          personalizar conteúdo e exibir unidades próximas a você.
        </p>

        <div className={theme.lgpdAlert.actions}>
          <Button onClick={reject} className={theme.button.outline}>
            Recusar
            <X className="w-4 h-4 ml-2" />
          </Button>

          <Button onClick={accept} className={theme.button.primary}>Aceitar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';

type PhoneContact = {
  label: string;
  phone: string;
};

type LabContactsData = {
  phones: PhoneContact[];
  [key: string]: any;
};

/**
 * Hook to get the lab contact phones from the global widget API.
 * Uses the window.LAB_SITE_TOKEN to fetch phones from WateSistema widget, if available.
 */
export function useLabContacts() {
  const [contacts, setContacts] = useState<PhoneContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWidgetData() {
      setLoading(true);
      setError(null);

      try { const token = process.env.NEXT_PUBLIC_LAB_SITE_TOKEN;
          if (token) {
            const resp = await fetch(
              "https://website-management-api.watesistema.com.br/public/contacts"
            , {
              headers: {
                'x-site-token': token
              }
            });
            if (!resp.ok) throw new Error('Erro ao buscar contatos');
            const data: LabContactsData = await resp.json();
            if (data.contacts) {
              setContacts(data.contacts);
            } else {
              setContacts([]);
              setError('Nenhum contato encontrado.');
            }
          } else {
            setError('Token não encontrado.');
            setContacts([]);
          }
      } catch (err: any) {
        setError(
          err?.message || 'Erro desconhecido ao buscar telefones do laboratório.'
        );
        setContacts([]);
      }
      setLoading(false);
    }

    fetchWidgetData();
  }, []);

  return { contacts, loading, error };
}
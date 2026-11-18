-- Execute no SQL Editor do seu projeto Supabase.
-- Apenas a API protegida da Vercel, usando a chave secreta, acessa esses dados.
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email text NOT NULL UNIQUE,
  consent_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL DEFAULT 'site_essencia_selecionada',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT newsletter_subscribers_email_format CHECK (
    char_length(email) BETWEEN 5 AND 254 AND email ~* '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$'
  )
);
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.newsletter_subscribers FROM anon, authenticated;
GRANT SELECT, INSERT ON public.newsletter_subscribers TO service_role;
-- Nenhuma política pública de leitura/escrita é criada de propósito.

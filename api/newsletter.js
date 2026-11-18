/**
 * Inscrição opt-in. A chave sb_secret_* é lida somente nesta função da Vercel.
 * Não use chaves secretas no HTML ou nos arquivos de assets.
 */
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Allow', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });

  const type = String(req.headers['content-type'] || '');
  if (!type.toLowerCase().includes('application/json')) {
    return res.status(415).json({ error: 'Envie os dados em JSON.' });
  }

  let payload = req.body;
  try {
    if (typeof payload === 'string' && payload.length <= 2048) payload = JSON.parse(payload);
  } catch {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }
  if (payload.website) return res.status(200).json({ message: 'Inscrição recebida.' }); // honeypot
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  const accepted = payload.consent === true;
  if (!accepted) return res.status(400).json({ error: 'É necessário consentir com o cadastro.' });
  if (email.length < 5 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Digite um e-mail válido.' });
  }

  const url = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url) || !key) {
    return res.status(503).json({ error: 'O cadastro está temporariamente indisponível.' });
  }
  try {
    const response = await fetch(`${url}/rest/v1/newsletter_subscribers?on_conflict=email`, {
      method: 'POST',
      headers: {
        'apikey': key,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=ignore-duplicates,return=minimal'
      },
      body: JSON.stringify({ email, source: 'site_essencia_selecionada' }),
      signal: AbortSignal.timeout(8500)
    });
    if (!response.ok) {
      console.error('Erro ao registrar inscrição:', response.status);
      return res.status(502).json({ error: 'Não foi possível concluir a inscrição. Tente novamente.' });
    }
    return res.status(200).json({ message: 'Inscrição confirmada! Obrigado por participar.' });
  } catch (err) {
    console.error('Erro de comunicação com o banco de dados:', err.name);
    return res.status(502).json({ error: 'Serviço indisponível no momento. Tente novamente.' });
  }
};

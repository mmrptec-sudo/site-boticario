(() => {
  'use strict';
  const form = document.getElementById('newsletter');
  const status = document.getElementById('newsletterStatus');
  if (!form || !status) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const submit = form.querySelector('button[type="submit"]');
    const originalText = submit.textContent;
    submit.disabled = true;
    submit.textContent = 'ENVIANDO…';
    status.textContent = '';
    delete status.dataset.type;

    const data = new FormData(form);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: String(data.get('email') || ''),
          consent: data.get('consent') === 'on',
          website: String(data.get('website') || '')
        }),
        signal: AbortSignal.timeout(12000)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Não foi possível concluir a inscrição.');
      status.dataset.type = 'success';
      status.textContent = result.message || 'Inscrição recebida!';
      form.reset();
    } catch (error) {
      status.dataset.type = 'error';
      status.textContent = error.name === 'TimeoutError'
        ? 'A conexão demorou demais. Tente novamente.'
        : (error.message || 'Erro de conexão. Tente novamente.');
    } finally {
      submit.disabled = false;
      submit.textContent = originalText;
    }
  });
})();

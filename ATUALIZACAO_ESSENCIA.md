# ESSÊNCIA SELECIONADA — DESIGN INTEGRADO

Esta atualização converte a prévia `PREVIA_NAVEGAVEL_ESSENCIA_HD_4K.html` para o site **existente** `site-boticario`.

## O que mudou
- Novo visual editorial verde e dourado, preservando a prévia enviada.
- Catálogo das quatro marcas preservado, com códigos, busca, filtros, favoritos e indicação de registros a conferir.
- Imagens editoriais da prévia convertidas em arquivos WebP/JPG/SVG em `assets/images/editorial/`.
- Vídeo introdutório opcional, com arquivos MP4 locais.
- JavaScript e CSS externos para navegação mais rápida e cache na Vercel.
- Os botões de visita encaminham à loja parceira; não há pagamento integrado.
- A inscrição por e-mail permanece desligada até configurar o Supabase.

## Atualizar mesmo repositório (sem criar outro)
1. Extraia o ZIP de atualização.
2. Copie **o conteúdo** para sua pasta local `site-boticario` (onde já existe o `index.html`).
3. Substitua os arquivos iguais, sem excluir a pasta `.git`.
4. No GitHub Desktop: **Summary** > **Commit to main** > **Push origin**.
5. A Vercel atualiza automaticamente caso esteja ligada à branch main. Se não atualizar, acesse Deployments e verifique o estado do deploy.

## Notas sobre preços
- Preços extraídos dos catálogos **não são garantia de disponibilidade**; confirme os valores na loja parceira.
- O ciclo 16 de O Boticário vai de 03/11 a 30/11/2026; os demais catálogos podem ter regras e datas diferentes.
- Imagens do catálogo podem mostrar uma página com vários produtos, não uma foto individual por SKU.
- Nomes marcados “A conferir” devem ser revisados antes de serem usados como oferta.

## Arquivos-chave
- `index.html` — página principal.
- `assets/css/essencia-site.css` — visual da prévia.
- `assets/js/essencia-store.js` — comportamento da loja / catálogo.
- `assets/js/essencia-controls.js` — filtros, marca e paginação.
- `assets/js/catalogo-oficial.js` — catálogo de quatro marcas, com ajustes de título.
- `assets/images/editorial` — imagens da nova identidade.

Esta vitrine não é um checkout do Grupo Boticário e não deve se apresentar como loja oficial.

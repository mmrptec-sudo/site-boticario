# Publicação do site na Vercel — Supabase fica para depois

O site é HTML/CSS/JS e está pronto para a Vercel **sem pagar nem configurar Supabase agora**.

## 1. Atualizar o GitHub

1. Abra o ZIP `site-boticario-pronto-vercel.zip` e extraia seus arquivos.
2. No repositório GitHub que já usa, substitua os arquivos anteriores pelo conteúdo extraído, mantendo a pasta `assets`.
3. O arquivo `index.html` e o arquivo `vercel.json` devem estar na **raiz do repositório**, não dentro de outra pasta `site-boticario-main`.
4. Apague os arquivos antigos duplicados que ficaram soltos na raiz: `intro-desktop.mp4`, `intro-mobile.mp4`, `intro-poster.jpg`, `intro.css`, `intro.js`, `products.js`, `store.css`, `store.js`. A versão correta fica em `assets/`.
5. Faça commit no GitHub.

## 2. Publicar gratuitamente (se disponível no seu plano) na Vercel

1. Abra https://vercel.com/new.
2. Faça login e escolha **Import Git Repository**.
3. Autorize o GitHub, escolha o repositório e a branch correta.
4. Em **Framework Preset**, selecione **Other** (HTML estático), e mantenha **Root Directory** no diretório que contém `index.html`.
5. Deixe variáveis de ambiente do Supabase vazias. Não defina nenhum comando de build.
6. Clique em **Deploy**. Sua URL de testes termina em `.vercel.app`.
7. A Vercel geralmente publica novas alterações quando você atualiza o GitHub conectado.

## 3. Testar antes de divulgar

- Abrir a página em computador e celular.
- Pular a introdução e verificar catálogo, busca, filtros, quiz, favoritos e sacola.
- Conferir que o bloco "Clube de descobertas" diz **Em preparação**, sem formulário de inscrição ativo.
- Confirmar que os dados e preços são demonstrativos e que não há finalização real de compras.

## 4. Depois, quando for usar Supabase

1. Criar o projeto no painel do Supabase.
2. Executar `supabase/schema.sql`.
3. Na Vercel: **Project → Settings → Environment Variables**, criar `SUPABASE_URL` e `SUPABASE_SECRET_KEY`, com a chave privada apenas no ambiente do servidor.
4. Editar `assets/js/newsletter.js`: `NEWSLETTER_ACTIVE = true`.
5. Completar e revisar a política de privacidade e um processo de descadastro antes de receber inscrições.
6. Enviar alterações ao GitHub, fazer redeploy e testar `/api/newsletter`.

> Publicar na Vercel não significa automaticamente publicar no Supabase. A primeira hospeda seu site; o segundo é opcional, para dados e funcionalidades futuras.

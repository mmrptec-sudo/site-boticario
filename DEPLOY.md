# Publicar no GitHub + Vercel + Supabase

Este projeto é HTML/CSS/JavaScript puro. **A Vercel hospeda o site**; **o Supabase fornece o banco de dados** para o cadastro opcional de novidades. Supabase não substitui a hospedagem do HTML.

## 1. Atualizar o GitHub

1. Descompacte o ZIP final.
2. Abra seu repositório GitHub do site e substitua/adicione os arquivos **preservando a estrutura de pastas**. `index.html` precisa ficar na raiz do repositório, junto de `vercel.json` e da pasta `api/`.
3. Faça commit e push para a branch usada na Vercel (geralmente `main`). Exemplo pelo terminal:

   ```bash
   git add .
   git commit -m "Corrige assets, refina site e prepara integração Supabase"
   git push origin main
   ```

> Se o repositório não tiver o projeto na raiz, configure o **Root Directory** correto na Vercel.

## 2. Criar as tabelas no Supabase

1. Abra [supabase.com/dashboard](https://supabase.com/dashboard) e selecione/crie um projeto.
2. Entre em **SQL Editor** e execute todo o conteúdo de `supabase/schema.sql`.
3. Confirme que a tabela `public.newsletter_subscribers` existe, com RLS habilitado.
4. Em **Project Settings → API Keys** (ou **Connect**), encontre:
   - **Project URL**: `https://SEU-PROJETO.supabase.co`
   - **Secret key** nova `sb_secret_...` (não é `sb_publishable_...`)

**Jamais coloque a chave secreta no `index.html`, no JavaScript do navegador ou no GitHub.**

## 3. Vincular o projeto à Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e escolha **Import Git Repository**.
2. Selecione o repositório atualizado e configure o preset de framework como **Other** (site HTML estático), com o diretório raiz correto.
3. Em **Project Settings → Environment Variables**, cadastre:

   | Nome | Valor |
   | --- | --- |
   | `SUPABASE_URL` | `https://SEU-PROJETO.supabase.co` |
   | `SUPABASE_SECRET_KEY` | `sb_secret_...` (chave secreta do seu projeto) |

4. Faça **Deploy**. Se as variáveis foram adicionadas depois, faça **Redeploy** para serem aplicadas às funções.
5. Abra a URL publicada em `.vercel.app` e teste o site em desktop e celular.

## 4. Antes de habilitar a newsletter para pessoas reais

- Atualize `privacidade.html` com **identificação do responsável pelo tratamento e canal de contato**.
- Configure um processo para atender pedidos de exclusão/descadastro e, se necessário, confirmação de e-mail e proteção anti-spam.
- Antes disso, mantenha o envio de inscrições desativado removendo as variáveis de ambiente da Vercel ou evitando divulgar o formulário.

## 5. Testes após o deploy

- `https://SEU-SITE.vercel.app/` abre com CSS, imagens e catálogo.
- **Pular introdução**, buscar por produto, filtrar linhas, favoritar e usar a sacola funcionam.
- O formulário de novidades, **após a configuração**, grava um único registro por e-mail em `public.newsletter_subscribers`.
- `https://SEU-SITE.vercel.app/privacidade.html` abre a política de privacidade.
- Se aparecer **503** no envio do formulário, confira as variáveis de ambiente. **502** indica erro de comunicação/SQL e exige conferir os logs da função e as permissões no Supabase.

## Limites

- **Compras e pagamentos permanecem simulações.** Não conectamos checkout/ERP nem alteramos preços oficiais.
- Você precisa ter permissão para o repositório e para os projetos Vercel/Supabase. Sem acesso às contas não existe publicação efetiva; o ZIP está preparado para o deploy.

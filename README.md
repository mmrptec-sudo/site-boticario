# Essência Selecionada — versão para Vercel (sem Supabase por enquanto)

Site demonstrativo independente de curadoria de perfumaria inspirado no universo O Boticário. **Não é o site oficial, não recebe pedidos e não processa pagamentos.**

## Pronto agora
- Site HTML/CSS/JavaScript sem etapa de build, compatível com Vercel.
- Arquivos CSS, JS, vídeos e imagens organizados na pasta `assets/`.
- Layout responsivo, vídeo de abertura, catálogo, filtros, busca, quiz, favoritos e sacola simulada.
- Formulário de newsletter **desativado**, com aviso de "em breve": nenhum e-mail será coletado até o Supabase estar conectado.
- Pastas `api/` e `supabase/` preservadas apenas para ativação futura.
- Removidas duplicatas da raiz trazidas pelo arquivo ZIP; ocultos `.gitignore` e `.env.example` adicionados.

## Publicar agora
Siga `DEPLOY.md`. **Não é necessário ter projeto Supabase ou colocar variáveis de ambiente para publicar uma versão demonstrativa.**

## Testar no computador
Na pasta que contém `index.html`, rode:
```bash
python -m http.server 8000
```
Abra http://localhost:8000. A introdução pode ser pulada.

## Supabase no futuro
1. Criar projeto no Supabase e rodar `supabase/schema.sql` pelo SQL Editor.
2. Adicionar `SUPABASE_URL` e `SUPABASE_SECRET_KEY` somente nas configurações da Vercel, nunca no GitHub.
3. Alterar `const NEWSLETTER_ACTIVE = false;` para `true` em `assets/js/newsletter.js`.
4. Rever `privacidade.html`, identificação do responsável, canal de descadastro e consentimento **antes de coletar e-mails reais**.

## Importante
- Conteúdo, valores e imagens são ilustrativos. Confirme direitos de uso e informações oficiais para qualquer uso comercial.
- Não há checkout, estoque, ERP ou cobrança reais.

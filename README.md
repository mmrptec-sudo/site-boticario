# Essência Selecionada — site demonstrativo (versão melhorada)

Projeto de boutique de perfumaria **independente e demonstrativo**, com produtos e preços ilustrativos relacionados ao universo O Boticário. **Não é o site oficial e não processa compras.**

## O que foi corrigido e melhorado

- **Arquivos reorganizados:** o ZIP original trazia CSS, JS, imagens e vídeos na raiz, mas o `index.html` apontava para `assets/`. Agora todos os caminhos correspondem aos arquivos reais.
- Identidade premium com visual editorial verde-floresta, creme e dourado; cards, filtros, tipografia e botões revisados.
- Responsividade, contraste, foco por teclado e link para pular diretamente ao catálogo.
- Introdução em vídeo preservada, com versão desktop compactada (aprox. 6,1 MB → 1,6 MB), e opção de pular/rever.
- Navegação, busca, quiz, favoritos e sacola demonstrativa mantidos.
- **Newsletter preparada para banco de dados Supabase** com API serverless `/api/newsletter` na Vercel. A chave privada fica nas variáveis de ambiente da Vercel, nunca no JavaScript público.
- SQL de criação da tabela com **RLS habilitado**, sem acesso público aos dados cadastrados.

## Estrutura

```text
index.html                 Página principal
privacidade.html            Texto-base da política de dados; revise antes de ativar cadastros
assets/css/                Estilos base e refinamentos
assets/js/                 Catálogo, loja, introdução e newsletter
assets/videos/             Abertura desktop e mobile
assets/images/             Poster e favicon
api/newsletter.js           Função da Vercel → Supabase
supabase/schema.sql        Criação da tabela no Supabase
vercel.json                Configuração de deploy e headers
.env.example               Exemplo de variáveis (não contém chaves reais)
DEPLOY.md                  Guia completo para publicar
```

## Testar localmente

Na raiz do projeto:

```bash
python -m http.server 8000
```

Abra http://localhost:8000. A loja estática funciona localmente; **o envio da newsletter requer a função na Vercel**, que não roda no servidor Python.

## Atualizar o catálogo

Edite `assets/js/products.js`. Mantenha a atribuição `window.BOTICARIO_PRODUCTS = [...]` e os campos usados pela loja. Fotos, preços e características devem ser conferidos com fontes autorizadas antes de qualquer uso comercial real.

## Atenção antes de publicar

1. Confira direitos de uso das imagens, vídeos, textos e marcas de terceiros.
2. Revise o texto da Política de Privacidade, identifique o responsável pelo tratamento de dados e **adicione um e-mail real para direitos de privacidade antes de ativar o cadastro de novidades**.
3. A newsletter pode exigir mecanismos contra abuso, dupla confirmação de inscrição e gestão de descadastro antes de uma campanha real.
4. **Não existe checkout real nem integração de estoque, frete ou pagamentos.** Não apresente a demonstração como loja oficial.

Veja **[DEPLOY.md](DEPLOY.md)** para o passo a passo.

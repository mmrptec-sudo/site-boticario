# Site demonstrativo — O Boticário | MM Soluções Digitais

Projeto demonstrativo independente. Não é o site oficial do O Boticário.

## Estrutura do projeto

```text
site-boticario/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       # visual geral e componentes da loja
    │   └── intro.css       # visual exclusivo da introdução
    ├── js/
    │   ├── products.js     # catálogo: dados dos produtos
    │   ├── app.js          # busca, filtros, favoritos, quiz e sacola
    │   └── intro.js        # vídeo, pular, som, replay e acessibilidade
    ├── videos/
    │   ├── intro-desktop.mp4
    │   └── intro-mobile.mp4
    └── images/
        └── poster.jpg
```

## Onde alterar cada parte

| Alteração | Arquivo |
|---|---|
| Produtos, nomes, categorias e preços ilustrativos | `assets/js/products.js` |
| Busca, filtros, favoritos, quiz e sacola | `assets/js/app.js` |
| Comportamento da introdução | `assets/js/intro.js` |
| Aparência geral | `assets/css/style.css` |
| Aparência da introdução | `assets/css/intro.css` |
| Vídeos da introdução | `assets/videos/` |
| Poster do vídeo | `assets/images/poster.jpg` |

## Ordem de carregamento

O `index.html` carrega `products.js` antes de `app.js`, pois a aplicação utiliza o catálogo definido no primeiro arquivo. `intro.js` é independente.

## Publicação

Envie o conteúdo desta pasta para a raiz do repositório. Mantenha `index.html` na raiz e preserve a pasta `assets` e suas subpastas. Funciona em hospedagem estática, como GitHub Pages e Vercel.

## Observações e limites do protótipo

- Produtos, imagens, preços, estoque e textos são demonstrativos.
- O checkout não processa pagamentos nem cria pedidos reais.
- O projeto não representa nem é afiliado oficialmente à marca O Boticário.
- Não renomeie ou mova os arquivos sem atualizar os caminhos no `index.html`.

## Revisão técnica desta entrega

- Separados os dados do catálogo e a lógica de interface.
- Mantidos arquivos distintos para a loja e para a introdução, pois têm responsabilidades diferentes.
- Removidos dois blocos CSS exatamente duplicados.
- Mantidos seletores repetidos que funcionam como ajustes responsivos ou sobrescritas de cascata; removê-los automaticamente poderia quebrar o layout.
- Verificados os caminhos locais usados pelo HTML e a sintaxe dos arquivos JavaScript.

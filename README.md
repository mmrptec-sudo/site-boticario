# Site demonstrativo — O Boticário | MM Soluções Digitais

Projeto demonstrativo independente, sem vínculo oficial com a marca O Boticário.

## Estrutura única do projeto

```text
site-boticario/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── store.css       # visual da loja
    │   └── intro.css       # visual da abertura em vídeo
    ├── js/
    │   ├── products.js     # catálogo e dados dos produtos
    │   ├── store.js        # busca, filtros, favoritos, sacola e interações
    │   └── intro.js        # reprodução, som, pular e rever a introdução
    ├── videos/
    │   ├── intro-desktop.mp4
    │   └── intro-mobile.mp4
    └── images/
        └── intro-poster.jpg
```

## Onde editar

- Produtos, preços demonstrativos, categorias e descrições: `assets/js/products.js`.
- Funcionalidades da loja: `assets/js/store.js`.
- Introdução e comportamento do vídeo: `assets/js/intro.js`.
- Estilo geral: `assets/css/store.css`.
- Estilo da introdução: `assets/css/intro.css`.
- Vídeos e imagem de capa: `assets/videos/` e `assets/images/`.

## Ordem dos scripts

O HTML carrega `products.js` antes de `store.js`, pois a loja depende do catálogo. `intro.js` é independente.

## Publicação

Envie o conteúdo desta pasta para a raiz do repositório GitHub. O arquivo `index.html` deve ficar na raiz. Preserve toda a pasta `assets` e suas subpastas.

## Observações

- Este é um protótipo demonstrativo.
- Produtos, preços, imagens, disponibilidade e textos são ilustrativos.
- A sacola/checkout não processa pagamentos reais.
- Não é o site oficial nem representa uma oferta oficial do O Boticário.
- Se renomear ou mover arquivos, atualize os caminhos correspondentes no HTML.

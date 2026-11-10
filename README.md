# Site demonstrativo — O Boticário | MM Soluções Digitais

Projeto demonstrativo independente. Não é o site oficial do O Boticário.

## Estrutura

```text
site-boticario/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       # estilos gerais da loja
    │   └── intro.css       # estilos exclusivos da abertura
    ├── js/
    │   ├── products.js     # catálogo e dados dos produtos
    │   ├── app.js          # busca, filtros, favoritos, sacola e interações
    │   └── intro.js        # controle da introdução em vídeo
    ├── videos/
    │   ├── intro-desktop.mp4
    │   └── intro-mobile.mp4
    └── images/
        └── poster.jpg
```

## Como executar

Abra `index.html` no navegador ou publique a pasta inteira no GitHub Pages/Vercel.

## Onde fazer alterações

- Conteúdo, nomes, categorias e preços demonstrativos: `assets/js/products.js`.
- Funcionalidades da loja: `assets/js/app.js`.
- Introdução: `assets/js/intro.js` e `assets/css/intro.css`.
- Aparência geral: `assets/css/style.css`.
- Vídeos: `assets/videos/`.
- Imagem de carregamento da introdução: `assets/images/poster.jpg`.

## Observações

- Os produtos, preços, imagens e textos são ilustrativos.
- O checkout não processa pagamentos nem gera pedidos reais.
- Mantenha os caminhos e nomes dos arquivos ao publicar.
- Os scripts são carregados em ordem: `products.js` antes de `app.js`.

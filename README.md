# Site responsivo unificado — Desktop + Mobile

**Um único `index.html`** contém o HTML, o CSS responsivo e o JavaScript de interface. O site se adapta a qualquer tamanho de tela automaticamente. Não há duas versões para manter.

- **Aparência:** estilos desktop, tablet e celular no mesmo bloco `estilos-unificados-responsivos` do arquivo `index.html`.
- **Funcionalidades:** JavaScript de navegação, catálogo, favoritos, busca, quiz e interação no mesmo `index.html`.
- **Dados:** `assets/js/catalogo-oficial.js` guarda os registros importados; editar pela ferramenta `ferramentas/importar.html` continua funcionando.
- **Fotografias:** `assets/images/editorial/referencias-2026/` contém as fotos enviadas; outras imagens do catálogo mantidas.
- **Vídeos:** `assets/videos/intro-desktop.mp4` e `intro-mobile.mp4` são variantes da mesma apresentação selecionadas pelo navegador, não páginas diferentes.
- **Estrutura original:** catálogo, navegação, marcas, filtros, presentes, textos e recursos de navegação preservados.

## Executar localmente

```bash
python -m http.server 8000
```

Abrir <http://localhost:8000/>. No navegador, redimensione a janela para conferir o modo mobile.

## Publicar

Publicar **a pasta inteira**, com `index.html`, `assets/`, `api/` e `vercel.json`. Instruções específicas para Vercel em `DEPLOY.md`.

## Aviso

Esta vitrine é independente e demonstrativa. Não processa pagamentos, nem cria pedidos reais. As informações, preços e imagens de catálogo exigem verificação antes de uso comercial.

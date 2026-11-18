# Como colocar todos os produtos da loja oficial

**Estado atual:** o catálogo da loja indicada não pôde ser lido automaticamente. Não há uma lista verificada de todos os produtos no projeto entregue. Os 12 itens anteriores continuam sendo **exemplos ilustrativos**, não ofertas reais. Nenhum preço novo foi inventado.

**Link da loja informado pelo proprietário:**
https://minhaloja.grupoboticario.com.br/loja-boticabelisario?utm_source=app_divulgar&utm_medium=mld

## Processo mais simples — sem Supabase

1. Obtenha uma lista/planilha do catálogo com nomes, imagens e, se houver, preços e links diretos. Os preços devem ser conferidos porque mudam.
2. Abra `ferramentas/importar.html` em seu navegador.
3. Baixe `ferramentas/modelo-catalogo.csv` e preencha a partir da exportação da loja (ou arraste seu CSV/TSV/JSON diretamente ao importador).
4. Clique para gerar `catalogo-oficial.js` e coloque o resultado em **`assets/js/catalogo-oficial.js`**, substituindo o arquivo vazio.
5. Atualize o projeto no GitHub e publique pela Vercel.

O site trocará automaticamente os 12 exemplos pelo seu catálogo, criará filtros por categoria e por marca, aceitará buscas e mostrará as fotos fornecidas. O botão de cada produto aponta para o **link oficial de compra** no Boticário quando ele estiver preenchido. Quando faltar link individual, aponta para a home da loja do proprietário, sem fingir que há um checkout integrado.

**Atenção:** a ferramenta não realiza raspagem de sites protegidos, não cria pedidos, não sincroniza estoques e não altera preços automaticamente. Evite anunciar disponibilidade ou preços não verificados. Utilize imagens e descrições autorizadas.

## Campos do CSV (UTF-8)

| Coluna | Obrigatória | Observação |
| --- | --- | --- |
| `nome` | Sim | Nome completo do produto |
| `marca` | Não | Linha/marca (ex.: Floratta) |
| `categoria` | Recomendado | Perfumaria, Corpo e Banho, Maquiagem, Kits etc. |
| `familia` | Não | Floral, Amadeirado, etc. |
| `tamanho` | Não | Volume, peso ou apresentação |
| `preco` | Não | Se vazio, mostra “Consultar na loja oficial” |
| `preco_antigo` | Não | Preencher somente se confirmado |
| `imagem` | Recomendado | Link HTTPS autorizado da imagem ou arquivo `assets/produtos/arquivo.jpg` |
| `link` | Recomendado | Link do produto em domínio oficial `*.boticario.com.br` ou `*.grupoboticario.com.br` |
| `descricao` | Não | Texto fiel à descrição da fonte |
| `sku` | Recomendado | Identificador para remover duplicados na importação |
| `selo` | Não | Atributo real, verificado |

**Segurança e privacidade:** o importador funciona no próprio navegador; não envia dados para servidores. A vitrine estática não depende do Supabase. O formulário de newsletter segue desativado.

Se você me enviar um CSV, XLSX ou exportação com os produtos, posso importar e devolver o site já preenchido, sem precisar que você execute essas etapas manualmente.

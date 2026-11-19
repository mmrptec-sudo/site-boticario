# Publicação da versão única desktop + mobile

A pasta possui um só ponto de entrada (`index.html`) para as duas apresentações.

### Vercel
1. Crie um projeto na Vercel e importe esta pasta (ou repositório contendo o seu conteúdo).
2. Framework: **Other** / Site estático; sem build command.
3. Root Directory: a pasta que contém o arquivo `index.html`.
4. Publique normalmente: o mesmo endereço atende computadores e celulares.

### Teste local
Execute `python -m http.server 8000` na pasta extraída.

### Dados / newsletter
A newsletter segue desativada. Não inclua credenciais privadas no código frontend. Confira `README.md` e `IMPORTAR_CATALOGO.md`.

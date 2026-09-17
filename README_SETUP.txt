SOULY CONTROL — APPWRITE + GITHUB PAGES

Estrutura usada:
- GitHub Pages: hospedagem do painel
- Appwrite Auth: acesso protegido por senha
- Appwrite TablesDB: dados do sistema
- Appwrite Storage: contratos, comprovantes e arquivos

Configuração pública já preenchida no config.js:
- Project ID
- Database ID
- Table ID
- Bucket ID
- e-mail administrativo oculto na tela de login

IMPORTANTE:
- Nunca coloque senha, API Key ou secret no GitHub.
- O site mostra apenas o campo de senha; o e-mail administrativo é usado internamente.
- O Appwrite deve ter uma Web App autorizando o hostname juliavps1244-ui.github.io.

PUBLICAÇÃO NO GITHUB PAGES:
1. Coloque index.html, config.js e .nojekyll na raiz deste repositório.
2. Abra Settings > Pages.
3. Em Build and deployment, escolha Deploy from a branch.
4. Branch: main. Pasta: / (root).
5. Salve e aguarde a publicação.

Depois teste no computador e no celular usando a mesma senha do usuário criado no Appwrite.

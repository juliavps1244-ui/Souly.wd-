SOULY CONTROL — COMO COLOCAR NA NUVEM

O pacote já está preparado para:
- Login por e-mail e senha com Supabase Auth
- Sincronização dos clientes/projetos/financeiro/modelos em Postgres
- Arquivos em Supabase Storage
- Cache local para tolerar uma falha momentânea de internet
- GitHub Pages como hospedagem estática

1. SUPABASE
Crie um projeto novo no Supabase.
No SQL Editor, abra supabase_setup.sql, cole tudo e clique em Run.

2. CRIE O SEU USUÁRIO
No Supabase: Authentication > Users > Add user.
Cadastre apenas o seu e-mail e uma senha forte.
Não precisa abrir cadastro público.

3. PEGUE AS CHAVES
No Supabase, copie a Project URL e a Publishable Key.
Abra config.js e cole nos dois campos.
IMPORTANTE: nunca use a service_role key dentro do HTML/JS.

4. MIGRAÇÃO DOS DADOS LOCAIS
Abra a nova versão no mesmo computador/navegador onde você já usa o Souly Control e faça login.
Se ainda não existir estado na nuvem, a versão cloud envia automaticamente o estado que estiver salvo no localStorage desse navegador.
Depois disso, os outros dispositivos puxam a nuvem após o login.

5. GITHUB PAGES
Crie um repositório (ex.: souly-control), envie index.html, config.js e .nojekyll.
Em Settings > Pages, selecione Deploy from a branch > main / root.
O endereço publicado abrirá a tela de login.

6. TESTE
Cadastre um cliente no PC. Espere o indicador mostrar “sincronizado”.
Abra o link no celular, faça login e confirme se o mesmo cliente aparece.
Faça também um teste de upload e download de arquivo.

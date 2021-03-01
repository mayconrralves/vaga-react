# Api Fake para o projeto

A api em questão utiliza JWT token, e atende requisições Restful;

## Como Executar.

- Depois de ter clonado todo o projeto, execute yarn ou npm install para instalar as dependências;
- Em senguida, execute: yarn/npm start.
- A api executa na porta 3333. Caso queira mudar é só mudar varíavel port em server.js.
- Essa api não salva dados em banco de dados e mantém tudo na memória run, com a exceção das imagens para avatar, seu fim é para facilitar a construção do front-end.
- Usuários devem ser cadastrados antes de qualquer ação protegida;
- Depois deve se fazer o login.

## Rotas:

- /user/photo/update;
  - Rota POST;
  - Recebe um arquivo;
  - Rota protegida;
  - Retorna um objeto com o nome e o caminho do avatar do usuário;
  - Única rota que persiste os dados;

- /user/update
  - Rota PUT;
  - Atualiza usuário;
  - Rota protegida;
  - Recebe os dados a serem atualizados: id, name, email, password, urlAvatar;
  - Retorna um objeto do usuário atualizado;

- /cart/close
  - Rota POST;
  - Fecha o pedido;
  - Rota Protegida;
  - Recebe lista de produtos(listProducts), (data)date, endereço de entrega (deliveryAddress);
  - Retorna o pedido fechado, com os produtos do carrinho e o total da compra;

- /product?id=
  - Rota GET;
  - Retorna um produto com o id fornecido;

- /products
  - Retorna GET;
  - Retorna todos os produtos cadastrados;

- /register
  - Rota POST;
  - Recebe name, email, password e address;
  - Retorna o usuário cadastrado;

- /login
  - Rota POST;
  - Recebe email e password;
  - Retorna os dados do usuário e o token JWT;

- /user
  - Rota GET;
  - Rota protegida;
  - Retorna os dados do usuário do dono da sessão;
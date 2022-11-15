# API REST - Backend Orange Evolution

## Rotas:
- GET "/" - rota padrão

- Usuários:
	- **POST** `/user` -> cadastro de usuário
	- **GET** `/user/profile` -> mostrar perfil (requer autenticação, id do usuário esta anexado no token). 
	- **POST** `/user/signup-to-trail/:id_da_trilha` -> cadastrar em uma trilha (requer autenticação)

- Autenticação:
	- **POST** `/login` -> autenticar usuário cadastrado

- Conteúdos:
	- **POST** `/content/new` -> cadastrar um conteúdo (requer estar logado como administrador)
	- **GET** `/content/list` -> exibe todos os conteúdos cadastrador (requer estar logado como administrador)

- Trilhas:
	- **POST** `/trails/new` -> cadastrar uma trilha (requer estar logado como administrador)
	- **GET** `/trails/list` -> cadastrar um conteúdo (requer estar logado)
	- **POST** `/trails/add-content/:id_da_trilha` -> cadastrar conteúdo em uma trilha (requer estar logado como administrador). Id do conteúdo a ser **adicionado** virá do corpo da requisição.
	- **DELETE** `/trails/remove-content/:id_da_trilha` -> cadastrar uma trilha (requer estar logado como administrador).  Id do conteúdo a ser **removido** virá do corpo da requisição.
# API REST - Backend Orange Evolution

API REST do Orange Evolution. Desenvolvido com Node.js, Express, Typescript, TypeORM e PostgreSQL  durante o Hackathon, a etapa final do programa de Formação da FCamara 2022.

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--egmJbu5X--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/trp0zksm3rffm69rp35z.png)

O projeto foi desenvolvido pelo Squad 9, que conta com essas pessoas incríveis:
- UX/UI Designer:
	- Andressa
- Desenvolvedores Front-End:
	- Lucas
	- Diego
- Desenvolvedores Back-End:
	- Dayane
	- Marcelo
	

Para baixar o código em sua máquina e testar localmente, basta clonar o repositório e executar o comando:

    npm install

Em relação ao servidor de banco de dados PostgreSQL: 
- Caso use de um servidor em nuvem, pasta usar o arquivo **.env.example**, editá-lo para **.env** e adicionar a URL do host.
- Caso use um container de docker do PostgreSQL, será necessário passar as configuração dentro do arquivo src/database/**index.ts**, dentro do construtor do objeto DataSource. Saiba mais nesse [link.](https://typeorm.io/data-source-options#postgres--cockroachdb-data-source-options)

Após essas configurações, basta executar a aplicação com

    npm run dev


## Rotas:
- GET "`/`" - rota padrão

- Documentação de API  `/doc-redocly` ou `/swagger`

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
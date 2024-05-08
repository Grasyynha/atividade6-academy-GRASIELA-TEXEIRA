Feature: Listar usuarios cadastrados

Scenario: Listar usuarios
Given Que existe usuario cadastrado
When  Acesso a página de listagem de usuários
Then  Devo visualizar a lista de usuários com nome e email completos

Scenario: Nao existe usuarios para listar
Given   Que não exista nenhum usuário cadastrado
When    Acesso a página de listagem de usuário
Then    Devo ver uma mensagem informando que não há usuários cadastrados
And     Devo ver um link para cadastrar um novo usuário

Scenario: Paginacao
Given    Que existam mais de 6 usuários cadastrados
When     Acesso a página de listagem de usuários
Then     Devo ver a paginação com o número da página atual e total de páginas
And      Devo ver os botões "Anterior" e "Proxima"
And      O botão "Próxima Página" deve estar habilitado
And      O botão "Anterior" deve estar desabilitado

Scenario: Navegacao entre paginas
Given   Que existam mais de 6 usuários cadastrados
When    Acesso a página de listagem de usuários
And     Clico no botão "Próxima" até chegar à última página
Then    Devo ver a última página da lista de usuários
And     O botão "Próxima" deve estar desabilitado
And     O botão "Anterior" deve estar habilitado

Scenario: Voltar para Página Anterior
Given Que existam mais de 6 usuários cadastrados
When  Acesso a página de listagem de usuários
And   Clico no botão "Próxima" até chegar à última página
And   Clico no botão "Anterior" até voltar à primeira página
Then  Devo ver a primeira página da lista de usuários
And   O botão "Próxima" deve estar habilitado
And   O botão "Anterior" deve estar desabilitado

Scenario: Opções de Ações nos Usuários
Given Que exista pelo menos um usuário cadastrado
When  Acesso a página de listagem de usuários
Then  Devo ver opções para visualizar detalhes e excluir cada usuário

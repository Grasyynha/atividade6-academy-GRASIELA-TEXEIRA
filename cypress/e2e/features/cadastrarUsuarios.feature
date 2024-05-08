Feature: Cadastro de Usuário

Scenario: Cadastro com sucesso
Given  Eu acesso o sistema
When   Informo um novo nome de usuario e email valido
Then   O usuário é registrado

Scenario: E-mail já utilizado
When   Informo um nome e email ja cadastrado
Then   Uma mensagem de erro "Email já cadastrado" é exibida

Scenario: Não deve ser possível cadastrar um usuário apenas com o e-mail
When  Informo somente o email
Then  Recebo mensagem de erro

Scenario: Nao deve ser possivel cadastrar com email no formato incorreto
When  Informo um novo nome de usuario e email invalido
Then  Recebo menssagem de formato de email invalido


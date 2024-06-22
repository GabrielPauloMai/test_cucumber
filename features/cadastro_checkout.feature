Feature: Tela de cadastro - Checkout
  Como cliente da EBAC-SHOP
  Quero fazer concluir meu cadastro
  Para finalizar minha compra

  Scenario: Cadastro com todos os dados obrigatórios
    Given que eu esteja na página de cadastro
    When eu preencher todos os dados obrigatórios
    Then o sistema deve aceitar o cadastro

  Scenario: Cadastro com e-mail inválido
    Given que eu esteja na página de cadastro
    When eu inserir um e-mail com formato inválido
    Then o sistema deve exibir uma mensagem de erro

  Scenario: Cadastro com campos vazios
    Given que eu esteja na página de cadastro
    When eu tentar cadastrar com campos obrigatórios vazios
    Then o sistema deve exibir uma mensagem de alerta

  Scenario Outline: Cadastro com diferentes dados
    Given que eu esteja na página de cadastro
    When eu inserir "<nome>", "<sobrenome>", "<email>", "<senha>"
    Then o sistema deve validar os dados e prosseguir com o cadastro

    Examples:
      | nome    | sobrenome | email                  | senha    |
      | João    | Silva     | joao.silva@teste.com   | senha123 |
      | Maria   | Souza     | maria.souza@teste.com  | senha456 |
      | Carlos  | Pereira   | carlos.pereira@teste.com| senha789 |

Feature: Login na plataforma
  Como cliente da EBAC-SHOP
  Quero fazer o login (autenticação) na plataforma
  Para visualizar meus pedidos

  Scenario: Login com dados válidos
    Given que eu estou na página de login
    When eu preencho o campo email com "gabriel.mai@belluno.digital"
    And eu preencho o campo senha com "123456"
    And eu clico no botão de login
    Then eu devo ser redirecionado para a página de dashboard

  Scenario: Login com senha inválida
    Given que eu estou na página de login
    When eu preencho o campo email com "gabriel.mai@belluno.digital"
    And eu preencho o campo senha com "senha_incorreta"
    And eu clico no botão de login
    Then deve exibir uma mensagem de alerta "Usuário ou senha inválidos"

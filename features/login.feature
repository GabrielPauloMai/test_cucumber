#language: pt

Funcionalidade: Login
  Como um usuário
  Eu quero poder me autenticar
  Para que eu possa acessar o sistema

  Cenário: Login com sucesso
    Dado que eu estou na página de login
    Quando eu preencho o campo email com "gabriel.mai@belluno.digital"
    E eu preencho o campo senha com "123456"
    E eu clico no botão de login
    Então eu devo ser redirecionado para a página de dashboard
    
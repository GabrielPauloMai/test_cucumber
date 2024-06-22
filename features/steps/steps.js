const { Given, When, Then } = require('@cucumber/cucumber');

// Configurar Produto
Given('que eu esteja na página de configuração de produto', function () {
  // Implementação do passo
  console.log('Estou na página de configuração de produto');
});

When('eu selecionar a cor, tamanho e quantidade', function () {
  // Implementação do passo
  console.log('Selecionei a cor, tamanho e quantidade');
});

Then('a seleção deve ser obrigatória', function () {
  // Implementação do passo
  console.log('Seleção é obrigatória');
});

When('eu selecionar mais de 10 produtos', function () {
  // Implementação do passo
  console.log('Selecionei mais de 10 produtos');
});

Then('o sistema deve impedir a seleção de mais de 10 produtos', function () {
  // Implementação do passo
  console.log('O sistema impediu a seleção de mais de 10 produtos');
});

Given('que eu tenha selecionado a cor, tamanho e quantidade', function () {
  // Implementação do passo
  console.log('Selecionei a cor, tamanho e quantidade');
});

When('eu clicar no botão "limpar"', function () {
  // Implementação do passo
  console.log('Cliquei no botão limpar');
});

Then('as configurações devem voltar ao estado original', function () {
  // Implementação do passo
  console.log('Configurações voltaram ao estado original');
});

// Login na Plataforma
Given('que eu estou na página de login', function () {
  // Implementação do passo
  console.log('Estou na página de login');
});

When('eu preencho o campo email com {string}', function (email) {
  // Implementação do passo
  console.log(`Preenchi o campo email com: ${email}`);
});

When('eu preencho o campo senha com {string}', function (senha) {
  // Implementação do passo
  console.log(`Preenchi o campo senha com: ${senha}`);
});

When('eu clico no botão de login', function () {
  // Implementação do passo
  console.log('Cliquei no botão de login');
});

Then('eu devo ser redirecionado para a página de dashboard', function () {
  // Implementação do passo
  console.log('Fui redirecionado para a página de dashboard');
});

Then('deve exibir uma mensagem de alerta "Usuário ou senha inválidos"', function () {
  // Implementação do passo
  console.log('Mensagem de alerta "Usuário ou senha inválidos" exibida');
});

// Tela de Cadastro - Checkout
Given('que eu esteja na página de cadastro', function () {
  // Implementação do passo
  console.log('Estou na página de cadastro');
});

When('eu preencher todos os dados obrigatórios', function () {
  // Implementação do passo
  console.log('Preenchi todos os dados obrigatórios');
});

Then('o sistema deve aceitar o cadastro', function () {
  // Implementação do passo
  console.log('Sistema aceitou o cadastro');
});

When('eu inserir um e-mail com formato inválido', function () {
  // Implementação do passo
  console.log('Inseri um e-mail com formato inválido');
});

Then('o sistema deve exibir uma mensagem de erro', function () {
  // Implementação do passo
  console.log('Sistema exibiu uma mensagem de erro');
});

When('eu tentar cadastrar com campos obrigatórios vazios', function () {
  // Implementação do passo
  console.log('Tentei cadastrar com campos obrigatórios vazios');
});

Then('o sistema deve exibir uma mensagem de alerta', function () {
  // Implementação do passo
  console.log('Sistema exibiu uma mensagem de alerta');
});

When('eu inserir {string}, {string}, {string}, {string}', function (nome, sobrenome, email, senha) {
  // Implementação do passo usando os parâmetros
  console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}, Email: ${email}, Senha: ${senha}`);
});

Then('o sistema deve validar os dados e prosseguir com o cadastro', function () {
  // Implementação do passo
  console.log('Sistema validou os dados e prosseguiu com o cadastro');
});

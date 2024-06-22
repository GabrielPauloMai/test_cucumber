Feature: Configurar produto
  Como cliente da EBAC-SHOP
  Quero configurar meu produto de acordo com meu tamanho e gosto
  E escolher a quantidade
  Para depois inserir no carrinho

  Scenario: Selecionar cor, tamanho e quantidade
    Given que eu esteja na página de configuração de produto
    When eu selecionar a cor, tamanho e quantidade
    Then a seleção deve ser obrigatória

  Scenario: Limite de produtos por venda
    Given que eu esteja na página de configuração de produto
    When eu selecionar mais de 10 produtos
    Then o sistema deve impedir a seleção de mais de 10 produtos

  Scenario: Limpar configurações
    Given que eu tenha selecionado a cor, tamanho e quantidade
    When eu clicar no botão "limpar"
    Then as configurações devem voltar ao estado original

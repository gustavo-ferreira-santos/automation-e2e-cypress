import { login_page } from '../../pages/loginPage'; // Ajuste o caminho conforme necessário

describe('Testes de login', () => {
  // Carrega massa de dados do json da fixture
  beforeEach(function() {
    cy.fixture('data.json').as('data'); //carrega a massa de dados no alias 'data'
    cy.visit(''); // Visita a página antes de cada teste
  });

  it('Realizar login com sucesso', function() {
    const dados_login_valido = this.data.login.usuario_valido; // carrega dados validos de login armazenados na fixture
    login_page.preencher_user(dados_login_valido.username); // preenche o campo username com dados da fixture
    login_page.preencher_password(dados_login_valido.password); // preenche o campo password com dados da fixture
    login_page.click_btn_login(); // clica no botão para realizar o login

    cy.get('#add-contact').should('be.visible'); // valida que o elemento com o id add-contact (botão para adicionar contato) está presente na tela
    cy.get('.logout').should('be.visible'); // valida que o elemento com o id logout (botão de logout) está presente na tela
    cy.get('#email').should('not.exist'); // valida que o elemento com o id email (campo de username) NÃO está mais presente na tela
  });

  it('Falha no login com credenciais inválidas', function() {
    const dados_login_invalido = this.data.login.usuario_invalido; // carrega dados invalidos de login armazenados na fixture
    login_page.preencher_user(dados_login_invalido.username); // preenche o campo username com dados da fixture
    login_page.preencher_password(dados_login_invalido.password); // preenche o campo password com dados da fixture
    login_page.click_btn_login();

    cy.get('#add-contact').should('not.exist'); // valida que o elemento com o id add-contact (botão para adicionar contato) NÃO está presente na tela
    cy.get('#error').should('be.visible').and('contain', 'Incorrect username or password');// valida que o elemento com o id error (mensagem de erro de login) está presente na tela e contem o texto 'Incorrect username or password'
  });

 // Exemplos dos mesmos testes com os dados de login chumbados diretamente nos testes
 // OBS: Neste caso torna-se desnecessária tanto a linha 6 onde a massa de dados é carregada em um alias, quanto o próprio json dentro da pasta fixtures visto que não será utilizado
 // Também se torna desnecessário o 'function' no beforeEach já que não haverá um 'this' dentro dos testes

  it('Realizar login com sucesso dados chumbados', () => {
    login_page.preencher_user('testeuser@gmail.com'); // preenche o campo username com o valor 'testeuser@gmail.com'
    login_page.preencher_password('5124042'); // preenche o campo password com o valor '5124042'
    login_page.click_btn_login(); // clica no botão para realizar o login

    cy.get('#add-contact').should('be.visible');
    cy.get('.logout').should('be.visible');
    cy.get('#email').should('not.exist');
  });

  it('Falha no login com credenciais inválidas dados chumbados', () => {
    login_page.preencher_user('usuario_invalido@gmail.com');
    login_page.preencher_password('senha_incorreta');
    login_page.click_btn_login();

    cy.get('#add-contact').should('not.exist');
    cy.get('#error').should('be.visible').and('contain', 'Incorrect username or password');
  });
});

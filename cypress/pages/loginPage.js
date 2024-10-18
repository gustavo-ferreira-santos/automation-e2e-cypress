class LoginPage {

  preencher_user(username) {
    cy.get('#email').type(username)
  }

  preencher_password(password) {
    cy.get('#password').type(password)
  }

  click_btn_login() {
    cy.get('#submit').click()
  }
}

export const login_page = new LoginPage()

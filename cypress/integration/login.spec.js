it('Should do a login', () => {
  cy.visit('http://localhost:3000')
  cy.get('#email').type('success@success.com')
  cy.get('#password').type('123')
  cy.get('button').click()
  cy.url().should('eq', 'http://localhost:3000/')
  cy.get('button').click()
  cy.url().should('eq', 'http://localhost:3000/logindsadsadsa')
})

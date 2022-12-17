describe('simple to-do app', () => {
  it('first test', () => {
    cy.visit('/')
    cy.get(":nth-child(1) > input").should("be.checked")
    cy.get(".input-text").type("new task")
    cy.get(".input-submit").click()
    cy.get(":nth-child(4) > input").check()
    cy.get(":nth-child(4) > button").click()
    cy.get(":nth-child(1) > input").uncheck()
    cy.get(":nth-child(1) > input").should("not.be.checked")
  })
})
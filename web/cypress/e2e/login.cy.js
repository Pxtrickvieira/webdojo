describe('Login', () => {
  const emailValido = 'papito@webdojo.com'
  const senhaValida = 'katana123'

  it('deve logar com sucesso', () => {
    cy.start()
    cy.submitLogin(emailValido, senhaValida)

    cy.contains('Dashboard', { timeout: 10000 })
      .should('be.visible')

    cy.contains('Fernando Papito').should('be.visible')

  })

  it('deve exibir erro com senha inválida', () => {
    cy.start()
    cy.submitLogin(emailValido, 'senha_errada')

    cy.contains('Acesso negado! Tente novamente.', { timeout: 1000 })
      .should('be.visible')

    cy.url().should('not.include', '/dashboard')

  })

  it('deve exibir erro com email inválido', () => {
    cy.start()
    cy.submitLogin('emaierrado@gmail.com', senhaValida)

    cy.contains('Acesso negado! Tente novamente.', { timeout: 1000 })
      .should('be.visible')

    cy.url().should('not.include', '/dashboard')

  })

  it('deve exibir erro ao tentar logar sem senha', () => {
    cy.start()
    cy.get('#email').clear().type(emailValido)
    cy.get('#password').clear()
    cy.get('button[type="submit"]').contains('Entrar').click()

    cy.contains('Você precisa de uma senha para entrar!').should('be.visible')
    cy.url().should('not.include', '/dashboard')

  })

  it('deve exibir erro ao tentar logar sem email', () => {
    cy.start()
    cy.get('#email').clear()
    cy.get('#password').clear().type(senhaValida, { log: false })
    cy.get('button[type="submit"]').contains('Entrar').click()

    cy.contains('Ei, não esqueça de digitar seu email!').should('be.visible')
    cy.url().should('not.include', '/dashboard')

  })

  it('deve validar formato de e-mail inválido', () => {
    cy.start()
    cy.submitLogin('papitowebdojo.com', senhaValida)

    cy.contains('Hmm... esse email parece estar errado')
      .should('be.visible')

    cy.url().should('not.include', '/dashboard')

  })

  it('não deve permitir acessar dashboard sem estar logado', () => {
    cy.start()
    cy.contains('Acesse sua conta', { timeout: 10000 })
      .should('be.visible')

  })

  it('deve permitir acessar dashboard após login', () => {
    cy.start()
    cy.submitLogin(emailValido, senhaValida)

    cy.contains('Dashboard', { timeout: 10000 }).should('be.visible')
    cy.reload()
    cy.contains('Dashboard', { timeout: 10000 }).should('be.visible')

  })
})

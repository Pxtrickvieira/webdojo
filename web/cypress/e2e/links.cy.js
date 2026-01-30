describe('Links abrindo nova guia/janela', () => {
    beforeEach(() => {
        cy.login()
    })

    it('validando o atibuto do link do Instagram', () => {
        cy.contains('Dashboard')
            .should('be.visible')

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('acessa link de termos de uso removendo o target blank', () => {
        cy.contains('Dashboard')
            .should('be.visible')

        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('Aceitação dos Termos')
            .should('be.visible')
    })
});
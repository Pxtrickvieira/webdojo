describe('Simulando Mouseover', () => {
    it('deve mostrar um texto ao passar o mouse em cima do link do instagram', () => {
        cy.login()

        cy.contains('Dashboard')
            .should('be.visible')

        cy.contains('Isso é Mouseover!')
            .should('not.exist')

        cy.get('[data-cy="instagram-link"]')
            .should('be.visible')
            .realHover()

        cy.contains('Isso é Mouseover!')
            .should('be.visible')
    })

});
describe('Simulando Mouseover', () => {
    it('Deve mostrar um texto ao passar o mouse em cima do link do instagram', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.get('[data-cy="instagram-link"]')

    })
})
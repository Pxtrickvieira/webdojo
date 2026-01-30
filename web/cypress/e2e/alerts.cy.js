describe('Validações de Alertas em JavaScript', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar mensagem de alerta', () => {
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()
    })

    it('deve confirmar um Confirm Box clicando em OK', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm')
            .click()
    })

    it('Deve cancelar um diálogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('deve preencher e confirmar um Prompt Box', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('patrick')
        })

        cy.on('window:alert', (text) => {
            expect(text).to.eq('Olá patrick! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt')
            .should('be.visible')
            .click()
    })
})
describe('Kanban board', () => {
    it('Deve mover uma tarefa de Todo para Done e atualizar o board', () => {
        cy.login()

        cy.contains('Kanban').click()

        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', { dataTransfer })

        cy.get('.column-done')
            .trigger('dragover', { dataTransfer })
            .trigger('drop', { dataTransfer })

        cy.get('.column-done').within(() => {
            cy.get('h3').should('have.text', 'Done (4)')
            cy.contains('Documentar API').should('be.visible')
            cy.contains('Criar documentação da API com Swagger').should('be.visible')
        })

        cy.get('.column-todo').should('not.contain.text', 'Documentar API')
    })
});
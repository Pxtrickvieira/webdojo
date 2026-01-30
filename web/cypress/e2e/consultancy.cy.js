import { personal, inCompany } from '../fixtures/consultancy.json'

describe('Formulário de Consultoria', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')


    })
    it('deve solicitar consultoria individual ', () => {

        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()

        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('contain.text', 'Sua solicitação de consultoria foi enviada com sucesso')

    })

    it('deve solicitar consultoria In company ', () => {
        cy.fillConsultancyForm(inCompany)
        cy.submitConsultancyForm()

        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('contain.text', 'Sua solicitação de consultoria foi enviada com sucesso')

    })

    it('deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
        ]

        requiredFields.forEach(({ label, message }) => {
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', message)

        })
    })
})
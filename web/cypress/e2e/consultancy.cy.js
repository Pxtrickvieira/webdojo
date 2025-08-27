import { personal, company } from '../fixtures/consultancy.json'

describe('Formulário de Consutoria', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('Deve consultar consultoria individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validadeConsultancyModal()
    })

    it('Deve consultar consultoria In Company', () => {
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validadeConsultancyModal()
    })

    it('Deve verificar os campo obrigatórios', () => {
        cy.submitConsultancyForm()

        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso'}
        ]

        requiredFields.forEach(({label, message}) => {
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', message)
                .and('have.class', 'text-red-400')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })
})

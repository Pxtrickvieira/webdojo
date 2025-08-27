describe('gerenciamento de perfis no github', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve cadastrar um novo perfil no github', () => {

        cy.get('#name').type('Fernando Papito')
        cy.get('#username').type('qapapito')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Fernando Papito')
        cy.get('#username').type('papitodev')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'papitodev')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('Fernando Papito')
            .should('be.visible')

        cy.get('@trProfile')
            .should('be.visible')
            .contains('QA')
            .should('be.visible')
    })

    it('Deve poder remover um perfil no github', () => {
        const profile = {
            name: 'Fernando Papito',
            username: 'papito123',
            desc: 'QA'
        }
        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('button[title="Remover perfil"]').click()

        cy.contains('table tbody', profile.username)
        .should('not.exist')

    })

    it('Deve validar o link no github', () => {
        const profile = {
            name: 'Fernando Papito',
            username: 'papitodev',
            desc: 'QA'
        }
        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('a')
        .should('have.attr', 'href', 'https://github.com/' +profile.username)
        .and('have.attr', 'target', '_blank')

    })
})
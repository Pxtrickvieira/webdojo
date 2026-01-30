describe('Gerenciamento de Perfis no Github', () => {

  const createProfile = (profile) => {
    cy.get('#name').type(profile.name)
    cy.get('#username').type(profile.username)
    cy.get('#profile').type(profile.desc)
    cy.contains('button', 'Adicionar Perfil').click()
  }

  beforeEach(() => {
    cy.login()
    cy.goTo('Tabela', 'Perfis do GitHub')
  })

  it('Deve poder cadastrar um novo perfil no github', () => {
    const profile = {
      name: 'Patrick',
      username: 'Patrickgit',
      desc: 'QA'
    }

    createProfile(profile)

    cy.contains('table tbody tr', profile.username)
      .should('be.visible')
      .as('trProfile')

    cy.get('@trProfile')
      .contains(profile.desc)
      .should('be.visible')
  })

  it('Deve poder remover um perfil do github', () => {
    const profile = {
      name: 'Patrick',
      username: 'PatrickDev',
      desc: 'QA'
    }

    createProfile(profile)

    cy.contains('table tbody tr', profile.username)
      .should('be.visible')
      .as('trProfile')

    cy.get('@trProfile')
      .find('button[title="Remover perfil"]')
      .click()

    cy.contains('table tbody tr', profile.username)
      .should('not.exist')
  })

  it('Deve validar o link do github', () => {
    const profile = {
      name: 'Patrick',
      username: 'PatrickDev',
      desc: 'QA'
    }

    createProfile(profile)

    cy.contains('table tbody tr', profile.username)
      .should('be.visible')
      .as('trProfile')

    cy.get('@trProfile')
      .find('a[title="Abrir perfil no GitHub"]')
      .should('have.attr', 'href', `https://github.com/${profile.username}`)
      .and('have.attr', 'target', '_blank')
  })
})

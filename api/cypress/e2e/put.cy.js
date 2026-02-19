describe('PUT /api/users/:id', () => {
    context('Atualização', () => {
        let userId

        const originalUser = {
            name: 'Peter Parker',
            email: 'parker@stark.com',
            password: '123456'
        }

        const updateUser = {
            name: 'Spiderman',
            email: 'Spider@tes.com',
            password: '123456'
        }

        before(() => {
            cy.task('deleteUser', originalUser.email)
            cy.task('deleteUser', updateUser.email)

            cy.postUser(originalUser).then(response => {
                cy.log(response.body.user.id)
                userId = response.body.user.id
            })
        })

        it('Deve atualizar um usuário existente', () => {
            cy.putUser(userId, updateUser).then(response => {
                expect(response.status).to.eq(204)
            })
        })

        after(() => {
            cy.getUsers().then(response => {
                const spider = response.body.find(user => user.id === userId)
                expect(spider).to.exist
                expect(spider.name).to.eq(updateUser.name)
                expect(spider.email).to.eq(updateUser.email)
            })
        })
    })

    context('Quando o id não existe', () => {
        let userId

          const originalUser = {
            name: 'Tony Stark',
            email: 'tony@stark.com',
            password: '123456'
        }

        const updateUser = {
            name: 'Ironman',
            email: 'iroman@testes.com',
            password: '123456'
        }

        before(() => {
            cy.task('deleteUser', originalUser.email)
            cy.task('deleteUser', updateUser.email)

            cy.postUser(originalUser).then(response => {
                cy.log(response.body.user.id)
                userId = response.body.user.id
            })

            cy.task('deleteUser', originalUser.email)
        })

        it('Deve retornar 404 e user not found', () => {
            cy.api({
                method: 'PUT',
                url: 'http://localhost:3333/api/users/' + userId,
                headers: {
                    'Content-Type': 'application/json'
                },
                body:updateUser,
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq('User not found.')
            })
        })
    })

    context('Campos obrigatórios', () => {
        it('O campo name deve ser obrigátorio', () => {
            const user = {
                email: 'storn@xmen.com',
                password: 'pwd123'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Name is required.')
            })
        })

        it('O campo email deve ser obrigátorio', () => {
            const user = {
                name: 'Jean Grey',
                password: 'pwd123'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Email is required.')
            })
        })

        it('O campo senha deve ser obrigátorio', () => {
            const user = {
                name: 'Charles Xavier',
                email: 'xavier@xmen.com'

            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Password is required.')
            })
        })

        it('Não deve passar quando o JSON esta mal formatado', () => {
            const user = `{
      name: 'Magneto',
      email: 'magneto@xmen.com'
      password: 'pwd123'
    }`

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Invalid JSON format.')
            })
        })
    })
})
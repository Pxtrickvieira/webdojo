const pgp = require('pg-promise')()

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'UserDB',
    user: 'dba',
    password: 'dba'
})

function deleteUserByEmail(email) {
    return db.none(
        'DELETE FROM public."User" where email = $1', [email]
    )
}

module.exports = {
    deleteUserByEmail

}
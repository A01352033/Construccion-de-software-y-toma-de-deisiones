const db = require('../util/db');
// const users = [];

module.exports = class Users {

    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    save() {
        return db.execute('INSERT INTO Usuarios (usuario, contrasena) VALUES (?, ?)',
            [this.username, this.password]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Usuarios');
    }

    static fetch(id) {
        let query = 'SELECT * FROM Usuarios';
        if (id != 0) {
            query += ' WHERE id = ?';
            return db.execute(query, [id]);
        }
        return db.execute(query);
    }

    

}
const db = require('../util/database');
const bcrypt = require('bcryptjs');
// const users = [];

module.exports = class Users {

    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((hashedPassword) => {
            this.password = hashedPassword;
                return db.execute('INSERT INTO Usuarios (usuario, contrasena) VALUES (?, ?)',
                    [this.username, this.password]);
        });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Usuarios');
    }

    static fetch(username) {
        return db.execute('SELECT * FROM Usuarios WHERE usuario = ?', [username]);
    }

    

}
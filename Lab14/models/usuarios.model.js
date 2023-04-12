
const users = [];

module.exports = class Users {

    //Constructor
    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    //Este método es para guardar de manera persistente el nuevo objeto
    save() {
        users.push(this);
    }

    //Este método es para devolver los objetos del almacenamiento persistente
    static fetchAll() {
        return users;
    }

}
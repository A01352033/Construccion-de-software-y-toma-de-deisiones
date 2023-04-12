const db = require('../util/db');

/* const pedidos = [
    {
        bisteck: '0',
        pastor: '0',
        chorizo: '0',
        asada: '0',
        carnitas: '0',
        nombre: 'Manuel Villalpando',
        direccion: 'Jesus Oviedo',
    },
    {
        bisteck: '1',
        pastor: '1',
        chorizo: '1',
        asada: '1',
        carnitas: '1',
        nombre: 'Sergio Corona',
        direccion: 'Jesus Oviedo, Geminis - 2',
    },
]; */

module.exports = class Orden {

    constructor(pedido) {
        this.bisteck = pedido.bisteck || '';
        this.pastor = pedido.pastor || '';
        this.chorizo = pedido.chorizo || '';
        this.asada = pedido.asada || '';
        this.carnitas = pedido.carnitas || '';
        this.nombre = pedido.nombre || '';
        this.direccion = pedido.direccion || '';
    }

    save(id) {
        if (id != 0) {
            return db.execute('UPDATE pedido SET bisteck = ?, pastor = ?, chorizo = ?, asada = ?, carnitas = ?, nombre = ?, direccion = ? WHERE id = ?',
                [this.nombre, this.apellido, this.direccion, this.telefono, this.email, this.password, this.tarjeta, this.cvv, id]
            );
        } else {
            return db.execute('INSERT INTO pedido (bisteck, pastor, chorizo, asada, carnitas, nombre, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [this.nombre, this.bisteck, this.pastor, this.chorizo, this.asada, this.carnitas, this.nombre, this.direccion]
            );
        }
    }

    static fetch(id) {
        let query = `SELECT * FROM pedido`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        }
        return db.execute(query);
    }
}
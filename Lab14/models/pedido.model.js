const pedidos = [
    /* {
        sucursal: '',
        bisteck: '0',
        pastor: '0',
        chorizo: '0',
        asada: '0',
        carnitas: '0',
        nombre: '',
        direccion: '',
    },
    {
        sucursal: 'Norte',
        bisteck: '1',
        pastor: '1',
        chorizo: '1',
        asada: '1',
        carnitas: '1',
        nombre: 'Sergio Corona',
        direccion: 'Jesus Oviedo, Geminis - 2',
    }, */
];

module.exports = class Orden {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(pedido) {
        this.sucursal = pedido.sucursal || '';
        this.bisteck = pedido.bisteck || '';
        this.pastor = pedido.pastor || '';
        this.chorizo = pedido.chorizo || '';
        this.asada = pedido.asada || '';
        this.carnitas = pedido.carnitas || '';
        this.nombre = pedido.nombre || '';
        this.direccion = pedido.direccion || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        pedidos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return pedidos;
    }

}
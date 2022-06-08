const faker = require("faker")

class Repuestoservice{
  constructor(){
    this.repuestos=[{
      id: faker.datatype.uuid(),
      nombre: "4Runner",
      imagen: "https://www.toyotaperu.com.pe/sites/default/files/camioneta-4Runner-Toyota-4x4.png",
      precio: "S/23100"
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Avanza",
      imagen: "https://www.toyotaperu.com.pe/sites/default/files/avanza-listado_0.png",
      precio: "S/82680"
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Hilux",
      imagen: "https://www.toyotaperu.com.pe/sites/default/files/HILUX.png",
      precio: "S/160280"
    }
  ]
    //this.GenerarDatos();
  }

  GenerarDatos() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.repuestos.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl()
      });
    }
  }

  create(repuesto) {
    repuesto.id = faker.datatype.uuid();
    this.repuestos.push(repuesto);
  }

  update(id, repuesto) {
    const posicion = this.repuestos.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("repuesto no encontrado");
    }
    this.repuestos[posicion] = repuesto;
    return this.repuestos[posicion];
  }

  delete(id) {
    const posicion = this.repuestos.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Producto no encontrado");
    }
    this.repuestos.splice(posicion, 1);
    return {
      mensaje: "operacion realizada",
      id
    };
  }

  findAll() {
    return this.repuestos;
  }

  findBy() {
    return this.repuestos.find(item => item.id === id);
  }
}

module.exports = Repuestoservice;

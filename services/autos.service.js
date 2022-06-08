const faker = require("faker")

class AutoService{
  constructor(){
    this.auto=[{
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
      this.auto.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl()
      });
    }
  }

  create(auto) {
    auto.id = faker.datatype.uuid();
    this.auto.push(auto);
  }

  update(id, auto) {
    const posicion = this.auto.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("auto no encontrado");
    }
    this.auto[posicion] = auto;
    return this.auto[posicion];
  }

  delete(id) {
    const posicion = this.auto.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Producto no encontrado");
    }
    this.auto.splice(posicion, 1);
    return {
      mensaje: "operacion realizada",
      id
    };
  }

  findAll() {
    return this.auto;
  }

  findBy() {
    return this.auto.find(item => item.id === id);
  }
}

module.exports = AutoService;

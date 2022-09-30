/**
 * CREACIÓN DE CLASE ArticuloDescriptivo QUE PERMITIRÁ EL USO DE INSTANCIAS PARA LA CREACIÓN DE ARTICULOS ACORDE A LA NECESIDAD
 */
export class ArticuloDescriptivo {
   /**
    *  CONTRUCTOR QUE RECIBE VALOR PARA ASIGNAR A LAS VARIABLES 
    * @param {String} tipo 
    * @param {String} marca 
    * @param {String} nombre 
    * @param {String} precio 
    * @param {String} img 
    */
   constructor(tipo, marca, nombre, descripcion, precio, img) {
      this.tipo = tipo;
      this.marca = marca;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.descripcion = descripcion;
   }
   /**
    * Metodo get devuelve el valor de desccripcion
    */
   get getDescripcion() {
      return this.descripcion;
   }
   /**
    * METODO GET RETORNA EL VALOR DE IMG
    */
   get getImg() {
      return this.img;
   }
   /**
    * METODO GET RETORNA EL VALOR DE TIPO
    */
   get getTipo() {
      return this.tipo;
   }
   /**
    * METODO GET RETORNA EL VALOR DE MARCA
    */
   get getMarca() {
      return this.marca;
   }
   /**
    * METODO GET RETORNA EL VALOR DE NOMBRE
    */
   get getNombre() {
      return this.nombre;
   }
   /**
    * METODO GET RETORNA EL VALOR DE PRECIO
    */
   get getPrecio() {
      return this.precio;
   }
   /**
    * METODO SET CAMBIA EL VALOR DE DESCRIPCION
    * @param {String} descripcion
    */
   set setDescripcion(descripcion) {
      this.descripcion = descripcion;
   }
   /**
    * METODO SET CAMBIA EL VALOR DE TIPO
    * @param {String} tipo
    */
   set setTipo(tipo) {
      this.tipo = tipo;
   }
   /**
    * METODO SET CAMBIA EL VALOR DE MARCA
    * @param {String} marca
    */
   set setMarca(marca) {
      this.marca = marca;
   }
   /**
    * METODO SET CAMBIA EL VALOR DE NOMBRE
    * @param {String} nombre
    */
   set setNombre(nombre) {
      this.nombre = nombre;
   }
   /**
    * METODO SET CAMBIA EL VALOR DE PRECIO
    * @param {String} precio
    */
   set setPrecio(precio) {
      this.precio = precio;
   }
   /**
    * METODO SET CAMBIA EL VALOR DE IMG
    * @param {String} img
    */
   set setImg(img) {
      this.img = img;
   }

   /**
    * FUNCION QUE INTERACTUA CON EL DOM PARA LA CREACION DE NUEVOS ARTICULOS CON CADA UNA DE LAS VARIABLES Y DATOS INSTANCIADOS
    * @param {boolean} vendido 
    */
   publicar(vendido) {
      let contenedor = document.getElementById("listaDeArticulos");
      let perfumesUl = document.createElement("li");
      perfumesUl.className = 'articulo';
      if (vendido == false) {

         perfumesUl.innerHTML = '<h3>' + this.tipo + '</h3>' +
            '<p class="especificacionesDeArticulo">' +
            ' Marca:<span class="letraDeEspecificacion"> ' + this.marca + '</span><br/> ' +
            'Nombre:<span class="letraDeEspecificacion"> ' + this.nombre + '</span><br/>' +
            'Descripción:<span class="letraDeEspecificacion"> ' + this.descripcion + '</span><br/>' +
            '</p>' +
            '<div class="imagenContenedor">' +
            '<img class="imgDeArticulos" src="' + this.img + '"/>' +
            '</div>' +
            '<p class="precio">Precio: $' + this.precio + '</p>';

      } else {
         perfumesUl.innerHTML = '<h3>' + this.tipo + '</h3>' +
            '<p class="especificacionesDeArticulo">' +
            ' Marca:<span class="letraDeEspecificacion"> ' + this.marca + '</span><br> ' +
            'Nombre:<span class="letraDeEspecificacion"> ' + this.nombre + '</span><br>' +
            'Descripción:<span class="letraDeEspecificacion"> ' + this.descripcion + '</span><br>' +
            '</p>' +
            '<div class="imagenContenedor">' +
            '<img class="imgDeArticulos" src="' + this.img + '"/>' +
            '</div>' +
            '<p class="precio">Precio: <span class="agotado">Agotado</span></p>';
      }
      contenedor.appendChild(perfumesUl);
   }
}
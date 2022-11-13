
/**
 * ARCHIVO JAVASCRIPT QUE IMPLEMENTAN CLASES Y FUNCIONES QUE INTERACTUAN CON EL DOM PARA LA CREACIÓN DE NUEVOS ARTÍCULOS TIPO PERFUME
 * @AUTHOR MARLON AZUA
 */
/**
 * CREACIÓN DE CLASE PERFUME QUE PERMITIRÁ EL USO DE INSTANCIAS PARA LA CREACIÓN DE PERFUMES
 */
class Perfume {
   /**
    *  CONTRUCTOR QUE RECIBE VALOR PARA ASIGNAR A LAS VARIABLES 
    * @param {String} tipo 
    * @param {String} marca 
    * @param {String} nombre 
    * @param {String} precio 
    * @param {String} img 
    */
   constructor(tipo, marca, nombre, precio, img) {
      this.tipo = tipo;
      this.marca = marca;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
   }

   /**
    * METODO GET RETORNA EL VALOR DE IMG
    */
   get getImg() {
      return this.img
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
    * FUNCION QUE INTERACTUA CON EL DOM PARA LA CREACION DE NUEVOS ARTICULOS DE PERFUMES CON CADA UNA DE LAS VARIABLES Y DATOS INSTNCIADOS
    * @param {boolean} vendido 
    */
   publicar(vendido) {
      let contenedor = document.getElementById("listaDeArticulos");
      let perfumesUl = document.createElement("li");
      perfumesUl.className = 'articulo';
      if (vendido == false) {

         perfumesUl.innerHTML = '<h3>' + this.tipo + '</h3>' +
            '<p class="especificacionesDeArticulo">' +
            ' Marca:<span class="letraDeEspecificacion"> ' + this.marca + '</span><br> ' +
            'Nombre:<span class="letraDeEspecificacion"> ' + this.nombre + '</span><br>' +
            '</p>' +
            '<div class="imagenContenedor">' +
            '<img class="imgDeArticulos" src="' + this.img + '">' +
            '</div>' +
            '<p class="precio">Precio: $' + this.precio + '</p>';

      } else {
         perfumesUl.innerHTML = '<h3>' + this.tipo + '</h3>' +
            '<p class="especificacionesDeArticulo">' +
            ' Marca:<span class="letraDeEspecificacion"> ' + this.marca + '</span><br> ' +
            'Nombre:<span class="letraDeEspecificacion"> ' + this.nombre + '</span><br>' +
            '</p>' +
            '<div class="imagenContenedor">' +
            '<img class="imgDeArticulos" src="' + this.img + '">' +
            '</div>' +
            '<p class="precio">Precio: <span class="agotado">Agotado</span></p>';
      }
      contenedor.appendChild(perfumesUl);
   }
}
/**
 * Crear instancias aninimas para crear un nuevo perfume y agregarlo al DOM al iniciar la pagina en la sección perfume
 * @param {String} tipo 
 * @param {String} marca 
 * @param {String} nombre 
 * @param {String} precio 
 * @param {String} img 
 */
function crearNuevoProducto(tipo, marca, nombre, precio, img, estaAgotado) {
   new Perfume(tipo, marca, nombre, precio, img).publicar(estaAgotado);
}
//creando perfumes- instancias de la clase Perfume 
//Comando Force
crearNuevoProducto("Colonia de niña", "Ésika", "Comando Force", "6.00", "../Img articulos/imgPerfume/comando force.jpeg", false);
//set you 
crearNuevoProducto("Perfume unisex", "Ésika", "set you", "15.00", "../Img articulos/imgPerfume/set you.png", false);
//Must Freeze
crearNuevoProducto("Perfume Masculino", "Avon", "Must Freeze", "10.00", "../Img articulos/imgPerfume/musk freeze.png", false);
//Must Yambal
crearNuevoProducto("Perfume Masculino", "Yambal", "Must Yambal", "30.00", "../Img articulos/imgPerfume/musk colonia.png", false);
//Adrenaline
crearNuevoProducto("Perfume Femenino", "Yambal", "Adrenaline", "30.00", "../Img articulos/imgPerfume/PerfumE adrenaline.jpeg", false);
//Dí que sí
crearNuevoProducto("Perfume Femenino", "Yambal", "Dí que sí", "30.00", "../Img articulos/imgPerfume/di que si2.jpeg", false);
//Super Papa
crearNuevoProducto("Perfume Masculino", "Yambal", "Super Papa", "18.00", "../Img articulos/imgPerfume/fuerte super papa.png", false);
//ser
crearNuevoProducto("Perfume Femenino", "Yambal", "Ser", "30.00", "../Img articulos/imgPerfume/ser.png", false);
//Gaia 
crearNuevoProducto("Perfume Femenino", "Yambal", "Gaia", "35.00", "../Img articulos/imgPerfume/gaia 1.jfif", false);
//Temptation
crearNuevoProducto("Perfume Femenino", "Yambal", "Temptation", "30.00", "../Img articulos/imgPerfume/temptation.png", false);
//Di que si
crearNuevoProducto("Perfume Femenino", "Yambal", "Di que sí", "30.00", "../Img articulos/imgPerfume/di que si.png", false);
//Mithyka floral 
crearNuevoProducto("Perfume Femenino", "L'Bel", "Mithyka floral ", "25.00", "../Img articulos/imgPerfume/mithyka.jpg", false);
//Belessa by Ále
crearNuevoProducto("Perfume Femenino", "Ésika", "Belessa by Ále", "20.00", "../Img articulos/imgPerfume/belessa.png", false);
//Mithyka zaffyr
crearNuevoProducto("Perfume Femenino", "L'Bel", "Mithyka zaffyr", "25.00", "../Img articulos/imgPerfume/mithyka zaffyr.jpg", true);
//Inspira
crearNuevoProducto("Perfume Femenino", "Ésika", "Inspira", "20.00", "../Img articulos/imgPerfume/inspira.png", false);
//L'image Radiant
crearNuevoProducto("Perfume Femenino", "Ésika", "L'image Radiant", "25.00", "../Img articulos/imgPerfume/limage.png", false);



/**
 * Agotados
 */
//Privé Homme
crearNuevoProducto("Perfume Masculino", "Ésika", "Privé Homme", "24.00", "../Img articulos/imgPerfume/prive homme.png", true);
//magnat select
crearNuevoProducto("Perfume Masculino", "Ésika", "Magnat Select", "6.00", "../Img articulos/imgPerfume/magnat select 1.jpeg", true);
//leyenda absolute
crearNuevoProducto("Perfume Masculino", "Ésika", "Leyenda Absolute", "6.00", "../Img articulos/imgPerfume/leyenda absolute.png", true);
//Mini Chics
crearNuevoProducto("Colonia de niña", "Ésika", "Mini Chics", "6.00", "../Img articulos/imgPerfume/mini chics.jpeg", true);
//black suede
crearNuevoProducto("Perfume Masculino", "Avon", "Black Sude", "15.00", "../Img articulos/imgPerfume/black suede.png", true);
//Ohm black Yambal
crearNuevoProducto("Perfume Masculino", "Yambal", "Ohm black Yambal", "15.00", "../Img articulos/imgPerfume/ohm black.png", true);
//Fiori
crearNuevoProducto("Perfume Femenino", "Ésika", "Fiori", "20.00", "../Img articulos/imgPerfume/fiori.jpg", true);
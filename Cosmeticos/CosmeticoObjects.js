
/**
 * CREACIÓN DE CLASE ArticuloDescriptivo QUE PERMITIRÁ EL USO DE INSTANCIAS PARA LA CREACIÓN DE ARTICULOS ACORDE A LA NECESIDAD
 * @author Marlon Azua
 */
 class ArticuloDescriptivo {
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
/**
 * Funcion que permite crear instancias anonimas y publicarlos atravez de la clase ArticuloDescriptivo
 * @param {String} tipo 
 * @param {String} marca 
 * @param {String} nombre 
 * @param {String} descripcion 
 * @param {String} precio 
 * @param {String} img 
 * @param {boolean} estaAgotado 
 */
 function crearNuevoProducto(tipo, marca, nombre, descripcion, precio, img, estaAgotado) {
   new ArticuloDescriptivo(tipo, marca, nombre, descripcion,  precio, img).publicar(estaAgotado);
}
//BODY SPA Yanbal
crearNuevoProducto("Crema", "Yanbal", "BODY SPA ",'Crema para El cuerpo.',"14.00", "../Img articulos/ImgCosmeticos/body spa.jpeg", false);
//Crema antiedad para manos Yambal
crearNuevoProducto("Crema antiedad", "Yanbal", "Body Spa ",'Crema antiedad para manos.',"10.00", "../Img articulos/ImgCosmeticos/crema antiedad.jpeg", false);
//Desodorantes para hombre ESIKA
crearNuevoProducto("Desodorantes", "Ésika", "Desodorantes Ésika ",'Desodorantes para hombre Ésika, Leyenda, magna, pulso.',"3.00 c/u", "../Img articulos/ImgCosmeticos/desodorante para hombre 3.jpeg", false);
//Combo Sombras 6 tonos + brillo labial
crearNuevoProducto("Combo", "L.A Colors", "Combo Sombras brillo + labial  ",'Sombras 6 tonos + brillo labial.',"7.00", "../Img articulos/ImgCosmeticos/sombra 6 labial.jpeg", false);
//Colonia Aromaterapia Relajante YANBAL
crearNuevoProducto("Colonia Relajante", "Yanbal", "Colonia Aromaterapia",'Colonia Aromaterapia Relajante de Yambal .',"16.00", "../Img articulos/ImgCosmeticos/colonia aromaterapia.jpeg", false);
//Combo Sombra para ojos + brillo labial + lápiz delineador para ojos
crearNuevoProducto("Combo", "L.A Colors", "Combo Sombra para ojos + brillo labial + lápiz delineador para ojos",'Combo Sombra para ojos + brillo labial + lápiz delineador para ojos.',"9.00", "../Img articulos/ImgCosmeticos/sombras para ojos brillo labial.jpeg", false);
// Combo Blush + brillo labial+ sombra para ojos
crearNuevoProducto("Combo", "L.A Colors", "Combo Blush + brillo labial+ sombra para ojos",'Combo Blush + brillo labial+ sombra para ojos.',"8.00", "../Img articulos/ImgCosmeticos/blush brillo labial.jpeg", false);
//Contorno para rostro
crearNuevoProducto("Contorno para rostro", "L.A Colors", "Contorno para rostro",'Contorno para rostro de L.A Colors.',"4.00 c/u", "../Img articulos/ImgCosmeticos/contorno para ros.jpeg", false);
//Base para rostro larga duración
crearNuevoProducto("Base para rostro", "L.A Colors", "Base para rostro larga duración",'Base para rostro larga duración de L.A Colors con espejo incluido.',"6.00", "../Img articulos/ImgCosmeticos/base largad.jpeg", false);
//Shampoo y Acondicionador ✅2 en 1 ✅Control de caspa YANBAL
crearNuevoProducto("Shampoo y Acondicionador", "Yanbal", "Biomilk",'Shampoo y Acondicionador ✅2 en 1 ✅Control de caspa.',"7.00", "../Img articulos/ImgCosmeticos/shampoo y acondicionador.jpeg", false);
//Creama de Mano L'Bel
crearNuevoProducto("Crema de mano", "L'Bel", "Delice",'Oleo de almendras, hidratación instantanea.',"8.00", "../Img articulos/ImgCosmeticos/crema de mano lbel.jpeg", false);
//Creama un litro AVON
crearNuevoProducto("Crema", "Avon", "Care",'Cremas de 1 litro.',"9.00 c/u", "../Img articulos/ImgCosmeticos/creamas 1litro.jpeg", false);
//Jabón Intimo Cyzone 
crearNuevoProducto("Jabón intimo", "Cyzone", "Jabón intims",'Jabon Intimo Cyzone PH balanceado, ginecológicamente testeado.',"6.00", "../Img articulos/ImgCosmeticos/new jabon intimo1.jpeg", false);
//MÁSCARA MEGA FULL SIZE Color Negro ESIKA
crearNuevoProducto("Máscara", "Ésika", "Mascara Mega full size",'Mascara Mega full size color negro.',"7.00", "../Img articulos/ImgCosmeticos/mascara megafull.jpeg", false);
//Labial máximo color e hidratación Yanbal
crearNuevoProducto("Labial", "Yanbal", "Hydra-lips",'Labial máximo color e hidratación Yanbal.',"7.00 c/u", "../Img articulos/ImgCosmeticos/labial maximo color.jpeg", false);
//Desmaquillador para maquillaje a prueba de agua y de largo duración Yanbal
crearNuevoProducto("Desmaquillador", "Yanbal", "Desmaquillador Doble fase Yanbal",'Desmaquillador para maquillaje a prueba de agua y de larga duración Yanbal de doble fase.',"10.00", "../Img articulos/ImgCosmeticos/desmaquillador doble fase.jpeg", false);
//CCORI crema perfumada para el cuerpo Yanbal
crearNuevoProducto("Crema Perfumada", "Yanbal", "CCORI ROSE",'crema perfumada para el cuerpo.',"8.00", "../Img articulos/ImgCosmeticos/ccori rose.jpeg", false);
//Máscara rizado extremo a prueba de agua Yanbal
crearNuevoProducto("Máscara", "Yanbal", "Máscara rizado extremo",'Mascara de rizado extremo a prueba de agua.',"9.00", "../Img articulos/ImgCosmeticos/mascara rizado extremo.jpeg", false);
//Máscara Mega volumen y alargamiento Yanbal
crearNuevoProducto("Máscara", "Yanbal", "Máscara Mega volumen y alargamiento",'Mascara Mega volumen y alargamiento.',"8.00", "../Img articulos/ImgCosmeticos/mascara mega volumen y alargamiento.jpeg", false);
//Sombras 12 tonos Cyzone
crearNuevoProducto("Sombras", "Cyzone", "Sombra 12 tonos Cyzone",'Sombras 12 tonos Cyzone.',"10.00 c/u", "../Img articulos/ImgCosmeticos/sobras12Tonos.jpeg", false);



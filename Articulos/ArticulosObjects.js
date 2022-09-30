//import { ArticuloDescriptivo } from "../articulosDescripcion.js";

//
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
//Licuadora Holstein
crearNuevoProducto("Licuadora", "Holstein", "Licuadora Holstein",'Vaso de vidrio, Capacidad 1.5 litros, 2 velocidades mas pulso, Cuchillas de acero inoxidables',"25.00", "../Img articulos/ImgArticulos/licua 3.jpg", false);
//Parrilla electrica BBQ Holstein
crearNuevoProducto("Parrilla electrica", "Holstein", "Parrilla electrica BBQ",'2 alturas para disferentes niveles de cocción, Desarmable para facilidad de limpieza, Control de temperatura, Dimenciones 46.5 x 36.5 x 9.5 cm',"30.00", "../Img articulos/ImgArticulos/Parrilla1.jfif", false);
//Secador de cabello
crearNuevoProducto("Secador de cabello", "Gama", "Keration",'3 temperaturas, 2 velocidades, 1 boquilla, Tecnología micro glitt que protege la keratina natural del cabello',"20.00", "../Img articulos/ImgArticulos/secadora 2.png", false);
//Sanduchera Umco
crearNuevoProducto("Sanduchera", "Umco", "Sanduchera umco",'Apta para 2 rebanadas, Luces indicadoras, Color turquesa',"20.00", "../Img articulos/ImgArticulos/sanduchera.jfif", false);
//Sartén Electrico Holstein
crearNuevoProducto("Sartén Eléctrico", "Holstein", "Sartén Electrico Holstein",'Dimenciones 30 cm de diámetro, Capa antiadherente, Control de temperatura, tapa de crista, Capacidad 1.5 litros',"30.00", "../Img articulos/ImgArticulos/sarten 1.jpg", false);
//Olla de presión Umco
crearNuevoProducto("Olla de presión", "Umco", "Olla de presión Umco",'Capacidad 4.2 litros, Con tapa válvula y fusible de seguridad, Mango de baquelita ergonomico, Apta para cocinas electricas, a gas y vitrocerámica',"35.00", "../Img articulos/ImgArticulos/ollaDePresion.jpeg", false);
//Hornilla eléctrica Holstein
crearNuevoProducto("Hornilla eléctrica", "Holstein", "Hornilla eléctrica Holstein",'Medida 47 x 25 x 6.5 cm, 2 quemadores independientes con perilla, Cobertura de acero inoxidable, Diseño compacto',"25.00", "../Img articulos/ImgArticulos/hornillaElectrica.jpeg", false);
//Cepillo Alisador Iconic
crearNuevoProducto("Cepillo Alisador", "Cyzone", "Iconic",'Elige la temperatura que prefieras,En plastico, Placas de aluminio, Look cepillado y super liso',"35.00", "../Img articulos/ImgArticulos/cepillo.jpeg", false);
//Horno Electrico Holstein
crearNuevoProducto("Horno Electrico", "Holstein", "Horno Electrico Holstein",'Calentamiento superior, inferior y simultáneo, Tiempo de cocción 15 minutos, Bandeja desmontable para limpieza, Luz de encendido y alrma al finalizar la cocción',"35.00", "../Img articulos/ImgArticulos/hornoElectrico.jpeg", false);
//Licuadora Home Elements
crearNuevoProducto("Licuadora", "Home Elements", "Licuadora Home Elements",'Vaso de vidrio, Capacidad de 1.5 litros, Dos velocidades mas pulso',"20.00", "../Img articulos/ImgArticulos/licua home.png", false);
//Kit de 2 piezas Tramontina Brasileño
crearNuevoProducto("Kit de 2 piezas", "Tramontina", "Tramontina Brasileño",'Aluminio con revestimiento interno y externo de antiadherente Starflon, Mangos de baquelita antitérmica, Para cocinas a gas, electricas y vitrocerámico, No se pega y es facil de limpiar',"40.00", "../Img articulos/ImgArticulos/tramotinaBrasileno.jpeg", false);
//Set tres piezas Umco
crearNuevoProducto("Set tres piezas", "Umco", "Set tres piezas Umco",'3 piezas, 1 wolk, Tapa de vidrio, 1 Olla',"25.00", "../Img articulos/ImgArticulos/bateria roja.jpeg", false);
//Licuadora Wotto
crearNuevoProducto("Licuadora", "Wotto", "Licuadora Wotto",'Vaso de de vidrio, 1.5L de Capacidad, 4 velocidades mas pulso, Cuchillos de acero inoxidable',"20.00", "../Img articulos/ImgArticulos/licuadora wotto.png", false);
//Billetera mujer Cyzone
crearNuevoProducto("Billetera mujer", "Cyzone", "Billetera mujer Cyzone",'Compartimiento para cédula, tarjetas, billetes y monedero con cierre',"15.00", "../Img articulos/ImgArticulos/billetera de mujer.jpeg", false);


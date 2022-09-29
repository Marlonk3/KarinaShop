/**
 * Creación de las insancias necesarias para poder realizar la creación de diferentes articulos tipo Joyas para posteriormente ser mostradas en el joyeria.html
 * @author Marlon Jair Azua Barrera
 */
import { Joya } from "./ArticuloMolde.js";
/**
 * Crear instancias para crear un nuevo articulo de tipo joya y agregarlo al DOM al iniciar la pagina en la sección Joyería
 * @param {String} tipo 
 * @param {String} marca 
 * @param {String} nombre 
 * @param {String} precio 
 * @param {String} img 
 */
 function crearNuevoProducto(tipo, marca, nombre, precio, img, estaAgotado) {
   new Joya(tipo, marca, nombre, precio, img).publicar(estaAgotado);
}
/**
 * Creación de instancias
 */
//Pulcera de niña
crearNuevoProducto("Pulsera de niña", "Ésika", "Beary Fun","15.00", "../Img articulos/ImgJoyas/pulsera niña.jpeg", false);
//Colección Aguajal
crearNuevoProducto("Colección", "Yanbal", "Aguajal","18.00", "../Img articulos/ImgJoyas/coleccion aguajal.jpeg", false);
//Aretes Sarar
crearNuevoProducto("Aretes", "Yanbal", "Sara","12.00", "../Img articulos/ImgJoyas/aretes sarar.jpeg", false);
//Aretes de niña
crearNuevoProducto("Aretes", "Ésika", "niña","9.00", "../Img articulos/ImgJoyas/aretes para niña.jpeg", false);
//Pulsera Gold tree "Finart"
crearNuevoProducto("Pulsera", "Ésika", 'Gold tree "Finart"',"18.00", "../Img articulos/ImgJoyas/Pulsera.png", false);
//Aretes "Florepin"
crearNuevoProducto("Aretes", "Yanbal", 'Florepin',"10.00", "../Img articulos/ImgJoyas/florepin.png", false);
//Aretes "Cameo"
crearNuevoProducto("Aretes", "Yanbal", 'Cameo',"15.00", "../Img articulos/ImgJoyas/cameo.png", false);
//Colección "Pariamanu"
crearNuevoProducto("Colección", "Yanbal", 'Pariamanu',"18.00", "../Img articulos/ImgJoyas/pariamanu.png", false);
//Argollas "Fancy"
crearNuevoProducto("Argollas", "Ésika", 'Fancy',"10.00", "../Img articulos/ImgJoyas/fancy.png", false);
//Reloj "Rocky"
crearNuevoProducto("Reloj", "Ésika", 'Rocky',"22.00", "../Img articulos/ImgJoyas/rocky 2.webp", false);
//Collar Pearls and falls
crearNuevoProducto("Collar", "Ésika", 'Pearls and falls',"20.00", "../Img articulos/ImgJoyas/collar pearls and falls.png", false);
//Pulsera Golden Tassel
crearNuevoProducto("Pulsera", "Ésika", 'Golden Tassel',"23.00", "../Img articulos/ImgJoyas/pulsera golden .png", false);

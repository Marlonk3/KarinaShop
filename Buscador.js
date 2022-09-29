/* function limpiar(){
   
} */
document.addEventListener("keyup", e => {
   if (e.key === 'Escape') e.target.value = "";

   if (e.target.matches('#Buscando')) {
      document.querySelectorAll(".articulo").forEach(cadaArticulo => {
         cadaArticulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? cadaArticulo.classList.remove("filtro")
            : cadaArticulo.classList.add("filtro")
      })

   }
   let comprobarClase = document.querySelectorAll(".articulo");
   comprobarClase = Array.from(comprobarClase);
   let check = comprobarClase.every((clases) => clases.classList.contains('filtro'));
   if (check) {
      document.getElementById('losentimos').style.display = 'grid';

   } else {
      document.getElementById('losentimos').style.display = 'none';
   }
   if (e.key === 'Escape') {
      document.getElementById('losentimos').style.display = 'none';
   }
})


document.addEventListener("keyup", e => {
   if (e.target.matches('#Buscando2')) {
      document.querySelectorAll(".articulo").forEach(cadaArticulo => {
         cadaArticulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? cadaArticulo.classList.remove("filtro")
            : cadaArticulo.classList.add("filtro")
      })
   }

})
document.getElementById('MenuComeBackButton').addEventListener('click', x => {
   /* document.getElementById('avisoLosentimosSpoiler').remove(); */
   document.getElementById('Buscando2').value = "";
   document.querySelectorAll(".articulo").forEach(Articulo => {
      Articulo.classList.remove("filtro")
   })
   document.getElementById('losentimos').style.display = 'none';
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// FONDOS ALEATORIOS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//Cada vez que se carga la pagina, se ejecuta la funcion especificada.
window.onload = fondo;


//Funcion para cargen las imagenes.
function fondo(){
  var divbg = document.getElementById("caja"); //escoge el elemento donde cagara la imagen.
  var imgarray = new Array("gif01.gif", "gif02.gif", "gif03.gif", "gif04.gif", "gif05.gif", "gif06.gif", "gif07.gif", "gif08.gif", "gif09.gif", "gif10.gif", "gif11.gif", "gif12.gif"); //esla lista d elementos a cargar
  var imgElegida = Math.floor(Math.random()* imgarray.length); //genera valores aleatorios entre 0 y el largo del array de imagenes.

  divbg.style.background="url(media/"+imgarray[imgElegida]+")"; //coloca la imagene escogida en el fondo del elemento.
  divbg.style.backgroundSize="cover";  //para que se vea completa en la caja correspondiente.
}



//jQuery para cuando se cargue el DOM
 $(document).ready(function(){
  // Mostrar el contenidom, quitando la clase que lo esconde
  $('body').fadeIn(2000).removeClass('hidden');
  var d = new Date();
  // Ver lo asignado a la variable d en la consola de javascript
  console.log(d);
  // Crear dos variables, una con días y otra con meses
  var days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre","diciembre"];
  // Obtener el día de la semana con un número entre 0 y 6
  var the_day = d.getDay();
  // Obtener el mes del año con un número entre 0 y 11
  var the_month = d.getMonth();
  // Crear una variable con el día que corresponda a la posición según número entre 0 y 6
  var today = days[the_day];
  // Crear una variable con el mes que corresponda a la posición según número entre 0 y 11
  var month = months[the_month]
  // Crear un contenido que será incluido entre etiquetas small
  $("small").html('Hoy es ' + today + ' ' + d.getDate() + ' de ' + month + ', ' + d.getFullYear());
  // Crear función que se ejecute con el envío de lo que se ingrese al formulario
  $('form').submit(function(){
     var datos = $(this).serializeArray();
     console.log(datos);
     $("#denominacion").html("Hola " + datos[0]["value"] + " " + datos[1]["value"] + ", recarga el browser para cambiar el canal.");

     var frase;
       $("#envejecimiento").html(frase);
       return false;
   });
 });

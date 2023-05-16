function cambiarModoNoche() {

    var body = document.getElementById("body");
    var logo = document.getElementById("logo");
    var menu = document.getElementById("menu");
    var btnInicio = document.getElementById("aInicio");
    var btnProductos = document.getElementById("aProductos");
    var btnContactanos = document.getElementById("aContactanos");


    body.classList.toggle("modo-noche");
    logo.classList.toggle("modo-noche");
    menu.classList.toggle("modo-noche");
    btnInicio.classList.toggle("modo-noche");
    btnProductos.classList.toggle("modo-noche");
    btnContactanos.classList.toggle("modo-noche"); 

    var eleccion = document.getElementById("eleccion");
    var modoNocheBtn = document.getElementById("modoNocheBtn");
    var modoNocheBtnP = document.getElementById("modoNocheBtnP");
    
    eleccion.classList.toggle("modo-noche");
    modoNocheBtn.classList.toggle("modo-noche");
    modoNocheBtnP.classList.toggle("modo-noche");
    
    
    var boton = document.getElementById("boton");
    var myButton = document.getElementById("myButton");
    
    myButton.classList.toggle("modo-noche");
    boton.classList.toggle("modo-noche");

   /*  var segundaFooter = document.getElementById("segundaFooter");
    var segundaFooterH1 = document.getElementById("segundaFooterH1"); */


   /*  var btnDivInicio = document.getElementById("aDivInicio");
    var btnDivProductos = document.getElementById("aDivProductos");
    var btnDivContactanos = document.getElementById("aDivContactanos"); */


    /* segundaFooter.classList.toggle("modo-noche");
    segundaFooterH1.classList.toggle("modo-noche"); */


    /* btnDivInicio.classList.toggle("modo-noche");
    btnDivProductos.classList.toggle("modo-noche");
    btnDivContactanos.classList.toggle("modo-noche"); */
  }



var button = document.getElementById("myButton");
var element = document.getElementById("myElement");

button.

button


addEventListener("click", function() {
  
 
if (element.style.display === "none") {
    element.
   
style.display = "flex";
  } 
 
else {
    element.
   
style.display = "flex";
  }
});


var button = document.getElementById("myButton");
var element = document.getElementById("myElement");
var isVisible = false;

button.addEventListener("click", function() {
  if (!isVisible) {
    element.style.display = "flex";
    isVisible = true;
  } else {
    element.style.display = "none";
    isVisible = false;
  }
});

/* boton de camisetas */


var button2 = document.getElementById("myButton2");
var element2 = document.getElementById("myElement2");
var isVisible2 = false;

button2.addEventListener("click", function() {
  if (!isVisible2) {
    element2.style.display = "flex";
    isVisible2 = true;
  } else {
    element2.style.display = "none";
    isVisible2 = false;
  }
});

/* boton de calcetines */

var button3 = document.getElementById("myButton3");
var element3 = document.getElementById("myElement3");
var isVisible3 = false;

button3.addEventListener("click", function() {
  if (!isVisible3) {
    element3.style.display = "flex";
    isVisible3 = true;
  } else {
    element3.style.display = "none";
    isVisible3 = false;
  }
});

/* boton de calcetines */

var button4 = document.getElementById("myButton4");
var element4 = document.getElementById("myElement4");
var isVisible4 = false;

button4.addEventListener("click", function() {
  if (!isVisible4) {
    element4.style.display = "flex";
    isVisible4 = true;
  } else {
    element4.style.display = "none";
    isVisible4 = false;
  }
});



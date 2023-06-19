const cantidad = document.getElementById("cantidad");
const formulario= document.getElementById("formulario");
const button = document.getElementById("boton_submit");
const category = document.getElementById("disabledSelect");
const total = document.getElementById("total");
const button_refresh = document.getElementById("boton_refresh");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail= document.getElementById("correo");


var valor=200
var precio= 0


function calculadora(){
    if (category.value === "Estudiante"){
       precio= valor*0.2*cantidad.value;
       console.log(precio);
       total.innerText = "Total a pagar: $"+precio
    } else {
        if (category.value === "Trainee"){
            precio= valor*0.5*cantidad.value;
            total.innerText = "Total a pagar: $"+precio
        }else {
            precio= valor*0.85*cantidad.value;
            total.innerText = "Total a pagar: $"+precio;
        }
    }
}


button.addEventListener ("click", function(){
    if (cantidad.value>0 && nombre.value!="" && apellido.value!="" && mail.value!=""){
        calculadora()
    } 
 })
 


 button_refresh.addEventListener( "click", function(){
    location.reload()
 })



 









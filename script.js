const number_of_tickets = document.getElementById("number_of_tickets");
const form= document.getElementById("form");
const button_submit = document.getElementById("button_submit");
const category = document.getElementById("disabledSelect");
const total = document.getElementById("total");
const button_refresh = document.getElementById("button_refresh");
const input_for_name = document.getElementById("input_for_name");
const last_name = document.getElementById("last_name");
const email= document.getElementById("email");
const correct_data_input= document.getElementById("correct_data_input")

correct_data_input.style.display ="none"

var ticket_value=200
var price= 0


function calculator(){
    if (category.value === "Estudiante"){
       price= ticket_value*0.2*number_of_tickets.value;
       console.log(price);
       total.innerText = "Total a pagar: $"+price
    } else {
        if (category.value === "Trainee"){
            price= ticket_value*0.5*number_of_tickets.value;
            total.innerText = "Total a pagar: $"+price
        }else {
            price= ticket_value*0.85*number_of_tickets.value;
            total.innerText = "Total a pagar: $"+price;
        }
    }
}

/*si alguien cambia el valor de cantidad o categoría, que el boton vuelva a "resumen" en vez de
permanecer en "continuar"*/

function checked(){
    button_submit.innerText= "Inicio";
    correct_data_input.style.display ="block";
}

function back_again(){
    correct_data_input.style.display ="none";
    button_submit.innerText= "Resumen";
}

button_submit.addEventListener ("click", function(){
    if (number_of_tickets.value>0 && input_for_name.value.length>1 && last_name.value.length>1 && email.value!=""){
        calculator(),
        checked()
        
    } else {
        back_again()
    }
 })
 
 button_refresh.addEventListener( "click", function(){
    location.reload()
 })

/*TARJETAS */

const student_card = document.getElementById("first_op");
const trainee_card = document.getElementById("second_op");
const junior_card = document.getElementById("third_op")
const cards = document.getElementById("cards")

student_card.addEventListener("click", function(){
    button_submit.innerText="Resumen"
    category.value="Estudiante";
})
trainee_card.addEventListener("click", function(){
    button_submit.innerText="Resumen"
    category.value="Trainee";
})
junior_card.addEventListener("click", function(){
    button_submit.innerText="Resumen"
    category.value="Junior";
})

category.addEventListener('change', button_change)
number_of_tickets.addEventListener('change',button_change)
 
function button_change(){
    button_submit.innerText="Resumen"
};






window.onload = iniciar; 

function iniciar() {
  document.getElementsByClassName("btn btn-primary").addEventListener('click', validate, false);
}

function validar_nombre() {
    var elemento = document.getElementById('Nombre');
    if (elemento.value ==''){
      alert("¡Porfa no te olvides de escribir tu nombre!");
      return false
    }
    return true;
  }


function validar_apellido() {
    var elemento = document.getElementById('Apellido');
    if (elemento.value ==''){
      alert('¡Porfa no te olvides de escribir tu apellido!');
      return false
    }
    return true;
  }

function validar_fecha() {
    var elemento = document.getElementById('FechadenNacimiento');
    if (!elemento.checked){
      alert('¡Te falto poner cuando es tu cumple!');
      return false;
    }
    return true;
    }
    
function validar_mail() {
    var elemento = document.getElementById("Email");
    if (elemento.value ==''){
        alert('¡Porfa no te olvides de escribir tu Mail!');
        return false
    }
    return true;
    }

function validar_direccion() {
    var elemento = document.getElementById('Direccion');
    if (elemento.value ==''){
        alert('¡Porfa no te olvides de escribir tu Direccion!');
        return false
        }
        return true;
        }
    
function validar_residencia() {
    var elemento = document.getElementById('Residencia');
    if (elemento.value ==''){
        alert('¡Porfa no te olvides de escribir tu Lugar de Residencia!');
        return false
        }
        return true;
        }





    function validate(e){
      if(validar_nombre() && validar_apellido() && validar_fecha() && validar_mail() && validar_direccion() && validar_residencia() && confirm('¿Ya querés mandar?')){
        return true;
      } else {
        // evito que se envíe el formulario
        // traba el evento que por defecto se disparó con el botón enviar.
        e.preventDefault();
        return false;
      }
    }
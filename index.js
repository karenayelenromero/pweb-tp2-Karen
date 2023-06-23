var datos = []; // Se declara el array

let formulario = document.getElementById('formulario'); // se trae el formulario del HTML



formulario.addEventListener("submit", (e) => { // Se llama al evento submit cuando apreta el boton enviar


  let nombre = document.getElementById('nombre'); //Se trae los valores de los campos 
  let email = document.getElementById('email');
  let telefono = document.getElementById('telefono');
  let mensaje = document.getElementById('mensaje');
  let sueldo = document.getElementById('sueldo');
  let moneda = document.getElementById('moneda');

  if (sueldo.value < 2000 && moneda.value=="Peso"){
    
    alert("El sueldo debe ser mayor a $2000/h");
    return false;

    
  }
  else if  (sueldo.value < 4 && moneda.value=="USD"){
    
    alert("El sueldo debe ser mayor a US$4/h");
    return false;
}
else if  (sueldo.value < 37 && moneda.value=="Real"){
    
    alert("El sueldo debe ser mayor a R$37/h");
    return false;
}


  let registro = { // Se declara la variable del tipo objeto
    name: nombre.value,
    telefono: telefono.value,
    email: email.value,
    mensaje: mensaje.value,
    sueldo: sueldo.value,
    moneda: moneda.value,
  };




  e.preventDefault();

  datos.push(registro); //Se guarda la variable en el array

  createTable(registro); // Se pasa como parametro la variable que contiene los datos

  console.log(datos);
  console.log(nombre.value);
  console.log(email.value);
  console.log(telefono.value);
  console.log(mensaje.value);
  console.log(sueldo.value);
  console.log(moneda.value);

  nombre.value="";
  email.value="";
  telefono.value="";
  sueldo.value="";
  mensaje.value="";

});

function createTable(d){
    const newRow = document.createElement("tr"); // Crea una nueva fila en la tabla
    const tdNombre = document.createElement("td"); // Crea una nueva celda en la tabla
    const tdEmail = document.createElement("td"); // Se crea una celda por cada campo
    const tdTel = document.createElement("td"); // Se crea una celda por cada campo
    const tdMsg = document.createElement("td"); // Se crea una celda por cada campo
    const tdSueldo = document.createElement("td"); // Se crea una celda por cada campo
    const tdMoneda = document.createElement("td"); // Se crea una celda por cada campo
    tdNombre.textContent = d.name; // Se gurda el atributo en la celda name
    tdEmail.textContent = d.email;// Se gurda el atributo en la celda email
    tdTel.textContent = d.telefono;// Se gurda el atributo en la celda telefono
    tdMsg.textContent = d.mensaje;// Se gurda el atributo en la celda mensaje
    tdSueldo.textContent = d.sueldo;// Se gurda el atributo en la celda sueldo
    tdMoneda.textContent = d.moneda;// Se gurda el atributo en la celda moneda
    newRow.appendChild(tdNombre); // Se agrega a la nueva fila cada una de las celdas creadas(nombre)
    newRow.appendChild(tdEmail);  // (Se agregra cada nuevo registro)
    newRow.appendChild(tdTel);
    newRow.appendChild(tdMsg);
    newRow.appendChild(tdSueldo);
    newRow.appendChild(tdMoneda);
    const target = document.getElementById('tbody'); //Trae el elemneto target(Es el cuerpo de la tabla)
    target.appendChild(newRow); // Agregra la nueva fila
}


function sortTable(col){
console.log(col);
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable"); //Trae la tabla
  switching = true;
  dir = "asc"; // Se ordena ascendente
  while (switching) { 
    switching = false;
    rows = table.rows; 
    for (i = 1; i < (rows.length - 1); i++) { // recorre la tabla
      shouldSwitch = false; //Si esta en false no cambia de lugar las filas sino las inercambia(en true)
			console.log(rows[i].getElementsByTagName("TD"));
      x = rows[i].getElementsByTagName("TD")[col]; //agarra una fila (ej la 1)
      y = rows[i + 1].getElementsByTagName("TD")[col];// agarra la siguiente fila( ej la 2)
      if (dir == "asc") { //Si la direccion es ascendente se fija si el valor de la fila 1 es mas grande que el de la fila 2
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true; //(los intercambia si es mayor)
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {// Se fija ssi es menor (si es menor los intercambia)
          shouldSwitch = true;
          break;
        }
      } //sino no hace nada
    }
    if (shouldSwitch) { //Si los tiene que intercambiar (shouldSwitch=true)
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //Intercambia las filas
      switching = true;
      
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {  //incrementa el count para saber cuantos clicks se hacen 
        dir = "desc"; // cambia de asc a desc
        switching = true;
      }
    }
  }
}
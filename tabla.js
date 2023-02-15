//Crea una tabla y 3 inputs que agreguen datos en la tabla

//Creo la maquetacion
//Contenedor padre
const contenedorPadre = document.createElement('div');
contenedorPadre.setAttribute("class","container-fluid");
//row
const row = document.createElement('div');
row.setAttribute("class","row mt-3");
//columnas
const col1 = document.createElement('div');
col1.setAttribute("class","col-5");
const col2 = document.createElement('div');
col2.setAttribute("class","col-5");

//le asignamos la jerarquia a la maquetación
document.body.appendChild(contenedorPadre);
contenedorPadre.appendChild(row);
row.appendChild(col1);
row.appendChild(col2);

//Columna 1 (izquierda)
//Creo la tabla
const mitabla = document.createElement('table');
const cuerpo = document.createElement('tbody');
cuerpo.insertRow(0);
cuerpo.rows[0].insertCell(0);
cuerpo.rows[0].cells[0].appendChild(document.createTextNode("NOMBRE"));
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(document.createTextNode("APELLIDO"));
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(document.createTextNode("EDAD"));
col1.appendChild(mitabla);
mitabla.appendChild(cuerpo);


//Columna 2 (derecha)
const inputNombre = document.createElement("input");
const inputApellido = document.createElement("input");
const inputEdad = document.createElement("input");
col2.appendChild(inputNombre);
col2.appendChild(inputApellido);
col2.appendChild(inputEdad);

let i = cuerpo.rows.length;
const btnAgregar = document.createElement('button');
btnAgregar.innerText = "Agregar datos";
col2.appendChild(btnAgregar);
btnAgregar.addEventListener("click",()=>{
    cuerpo.insertRow(i);
    cuerpo.rows[i].insertCell(0);
    cuerpo.rows[i].cells[0].appendChild(document.createTextNode(inputNombre.value));
    cuerpo.rows[i].insertCell(1);
    cuerpo.rows[i].cells[1].appendChild(document.createTextNode(inputApellido.value));
    cuerpo.rows[i].insertCell(2);
    cuerpo.rows[i].cells[2].appendChild(document.createTextNode(inputEdad.value));
    i= i+1;
});
const btnEliminar = document.createElement('button');
btnEliminar.innerText = "Eliminar ultima fila";
col2.appendChild(btnEliminar);
btnEliminar.addEventListener("click",()=>{
    cuerpo.deleteRow(cuerpo.rows.length -1);
    i = i-1;
});
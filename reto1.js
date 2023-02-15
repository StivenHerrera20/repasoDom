const contenedorPadre = document.createElement('div');
contenedorPadre.setAttribute("class","container-fluid");
document.body.appendChild(contenedorPadre);
const row = document.createElement('div');
row.setAttribute("class","row mt-3");
contenedorPadre.appendChild(row);

const input = document.createElement('input');
input.setAttribute("type","color");
input.setAttribute("style","max-width: 10%")
row.appendChild(input);

const mitabla = document.createElement('table');
const cuerpo = document.createElement('tbody');
cuerpo.insertRow(0);
cuerpo.rows[0].insertCell(0);
cuerpo.rows[0].cells[0].appendChild(document.createTextNode("NOMBRE"));
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(document.createTextNode("APELLIDO"));
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(document.createTextNode("EDAD"));
row.appendChild(mitabla);
mitabla.appendChild(cuerpo);

let i = 1; 
input.addEventListener("blur",()=>{
    if (i==1)
    {
        cuerpo.rows[0].cells[0].style = "background-color: "+input.value;
        i++;
    }
    else if (i==2) {
        cuerpo.rows[0].cells[1].style = "background-color: "+input.value;
        i++;        
    } else if(i==3){
        cuerpo.rows[0].cells[2].style = "background-color: "+input.value;
        i=1;
    }
})
const contenedorPadre = document.createElement('div');
contenedorPadre.setAttribute("class","container-fluid");
const row = document.createElement('div');
row.setAttribute("class","row mt-3");
document.body.appendChild(contenedorPadre);
contenedorPadre.appendChild(row);
const img = document.createElement('img');
img.setAttribute("src","./descarga.png");
img.addEventListener("mouseover",()=>{
    img.style = "transform: scale(1.1)"
})
img.addEventListener("mouseout",()=>{
    img.removeAttribute("style");
})
const img2 = document.createElement('img');
img2.setAttribute("src","./descarga.png");
img2.addEventListener("mouseover",()=>{
    img2.style = "transform: scale(1.1)"
})
img2.addEventListener("mouseout",()=>{
    img2.removeAttribute("style");
})
const img3 = document.createElement('img');
img3.setAttribute("src","./descarga.png");
img3.addEventListener("mouseover",()=>{
    img3.style = "transform: scale(1.1)"
})
img3.addEventListener("mouseout",()=>{
    img3.removeAttribute("style");
})
//Columna 1 (izquierda)
//Creo la tabla
const mitabla = document.createElement('table');
const cuerpo = document.createElement('tbody');
mitabla.setAttribute("class","table table-striped-columns table-bordered w-75 ms-2");
mitabla.style.border ="1px solid black"
cuerpo.insertRow(0);
cuerpo.rows[0].insertCell(0);
cuerpo.rows[0].cells[0].appendChild(img);
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(img2);
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(img3);
row.appendChild(mitabla);
mitabla.appendChild(cuerpo);
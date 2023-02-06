const btn = document.createElement('button');
btn.setAttribute("onclick","creaCss()");
btn.innerText = "Activar CSS";
document.body.appendChild(btn);

//Evento onClick
const creaCss = () => {  
    //Llamo el body
    const body = document.querySelector('body');
    //Creo un div para que sea el contenedor padre
    const contenedorPadre = document.createElement('div');
    //creo la row del titulo
    const rowTitulo = document.createElement('div');
    //manipulo el body para darle color al fondo
    body.style = "background-color: #9a9a9a; text-align: center;";
    //Manipulo el body con bootstrap
    btn.setAttribute("class", "btn btn-light mt-3 border border-secondary border-2");
    //Convierto el div en responsive
    contenedorPadre.setAttribute("class", "container-fluid");
    //Le asigno la clase a la row
    rowTitulo.setAttribute("class","row mt-2");
    rowTitulo.innerHTML = "<h2>Los inventos de Checho Agogo</h2>";
   //------------------------ columnas----------------------------
   const rowContenedor = document.createElement('div');
   rowContenedor.setAttribute("class","row mt-2");
   //Creo las columnas  
   const col1 = document.createElement('div');
   const col2 = document.createElement('div');
   const col3 = document.createElement('div');
   const col4 = document.createElement('div');
    //les asigno la clase
    col1.setAttribute("class","col-3");
    col2.setAttribute("class","col-3");
    col3.setAttribute("class","col-3");
    col4.setAttribute("class","col-3");

    //col1 formulario

    document.body.appendChild(contenedorPadre); 
    contenedorPadre.appendChild(btn);
    contenedorPadre.appendChild(rowTitulo);
    contenedorPadre.appendChild(rowContenedor);
    rowContenedor.appendChild(col1);
    rowContenedor.appendChild(col2);
    rowContenedor.appendChild(col3);
    rowContenedor.appendChild(col4);

}
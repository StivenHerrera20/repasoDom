const btn = document.createElement('button');
btn.setAttribute("onclick","ActivarFormulario()");
btn.setAttribute("class","btn btn-success m-2");
btn.innerText = "Activar Formulario";
document.body.appendChild(btn);
const ActivarFormulario = () => {  
    btn.setAttribute("onclick","eliminarFormulario()");
    btn.setAttribute("class","btn btn-danger ms-3");
    btn.innerText = "Eliminar";

    const body = document.querySelector('body');
    const contenedorPadre = document.createElement('div');
    contenedorPadre.setAttribute("id","contenedorPadre");
    body.style = "background-color: #9a9a9a; text-align: center;";
    contenedorPadre.setAttribute("class", "container-fluid");
   const rowContenedor = document.createElement('div');
   rowContenedor.setAttribute("class","row mt-2 ");
   rowContenedor.setAttribute("id","rowCo"); 
   const col1 = document.createElement('div');


    col1.setAttribute("class","col-10 input-group input-group-sm mb-3");
    col1.setAttribute("id","form");

    const input1 = document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("class","form-control");
    const input2 = document.createElement('input');
    input2.setAttribute("type","text");
    input2.setAttribute("class","form-control");
    const label1 = document.createElement('label');
    label1.innerText = "Nombre";
    label1.className = "me-1";
    const label2 = document.createElement('label');
    label2.innerText = "Apellido";
    label2.className = "ms-3 me-1";
    
    const btnEnviar = document.createElement('button');
    btnEnviar.setAttribute("class","btn btn-success ms-3");
    btnEnviar.innerText ="Enviar";
    btnEnviar.addEventListener("click",()=>{
        alert("Datos enviados");
    })
    
    document.body.appendChild(contenedorPadre); 
    contenedorPadre.appendChild(rowContenedor);    
    rowContenedor.appendChild(col1);
    col1.appendChild(label1);
    col1.appendChild(input1);
    col1.appendChild(label2);
    col1.appendChild(input2);
    col1.appendChild(btn);
    col1.appendChild(btnEnviar); 
}
const eliminarFormulario = () => {
    contenedorPadre.remove();
    btn.setAttribute("onclick","ActivarFormulario()");
    btn.innerText = "Activar Formulario";
    btn.removeAttribute("style");
    btn.setAttribute("class","btn btn-success m-2");
    document.body.removeAttribute("style");
    document.body.appendChild(btn);
}
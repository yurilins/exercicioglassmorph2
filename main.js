
    
 
let btnGet = document.querySelector('#btn-get');
let caixaDeTexto = document.querySelector('#caixadetexto');;
let result = document.querySelector('#nome');

btnGet.addEventListener('click', ()=>{
    result.innerText = caixaDeTexto.value;
});


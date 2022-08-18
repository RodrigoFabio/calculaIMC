var massa = document.querySelector('.Massa');
var altura = document.querySelector('.Altura');
var resultado = document.querySelector('span');  
var estilo = document.querySelector('span');
var mensagem = document.querySelector('#mensagem')
function calcular()
{
    resultado.innerHTML = (parseFloat(massa.value) / parseFloat(altura.value*altura.value)).toFixed(2);
    if((resultado.innerHTML > 18.5) && (resultado.innerHTML < 25))
    {
        mensagem.style.background = 'green';
        estilo.style.borderRadius='5px';
        mensagem.innerHTML= 'Abaixo do peso';
        mensagem.style.borderRadius='10px';
    }
    else if (resultado.innerHTML < 18.5)
    {
        mensagem.style.background = 'blue';
        estilo.style.borderRadius='5px';
        mensagem.innerHTML= 'Normal';
        mensagem.style.borderRadius='10px';
    }
    if(resultado.innerHTML > 25)
    { 
        mensagem.style.background = 'red';
        estilo.style.borderRadius='5px';
        mensagem.innerHTML= 'Acima do Peso';
        mensagem.style.borderRadius='10px';
    }
       
}

document.querySelector('#botao').onclick=calcular;
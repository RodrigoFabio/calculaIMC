var massa = document.querySelector('#Massa');
var alturaEntrada = document.querySelector('#Altura');
var resultado = document.querySelector('span');  
var estilo = document.querySelector('span');
var mensagem = document.querySelector('#mensagem');

function calcular()
{
        const NovaAltura = alturaEntrada.value.toString().replace(",",".")
        var altura = parseFloat(NovaAltura);
    resultado.innerHTML = (parseFloat(massa.value) / parseFloat(altura*altura)).toFixed(2);
    if((resultado.innerHTML > 18.5) && (resultado.innerHTML < 25))
    {
        mensagem.style.color = 'green';
        mensagem.style.fontWeight ='bold'
        estilo.style.borderRadius='5px';
        mensagem.innerHTML= 'Normal';
        mensagem.style.borderRadius='10px';
    }
    else if (resultado.innerHTML < 18.5)
    {
        mensagem.style.color = 'blue';
        mensagem.style.fontWeight ='bold'
        estilo.style.borderRadius='5px';
        mensagem.innerHTML= 'Normal';
        mensagem.style.borderRadius='10px';
    }
    if(resultado.innerHTML > 25)
    { 
        mensagem.style.color = 'red';
        mensagem.style.fontWeight ='bold'
        estilo.style.borderRadius='5px';
        mensagem.innerHTML= 'Acima do Peso';
        mensagem.style.borderRadius='10px';
    }
       
}

document.querySelector('#botao').onclick=calcular;
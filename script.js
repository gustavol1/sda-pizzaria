//função incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

for(let botao of botoesIncrementa)
{
  botao.addEventListener('click', incrementa);

  function incrementa()
  {
    var item = botao.closest('.item');

    var input = item.querySelector('.quantidade');
    input.value++;

    var preco = pegaPrecoItem(item);
    adicionaAoTotal(preco);
  }
}

//função decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");

for(let botao of botoesDecrementa)
{
  botao.addEventListener('click', decrementa);

  function decrementa()
  {
    var item = botao.closest('.item');

    var input = item.querySelector('.quantidade');

    if(input.value > 0){
      input.value--;
      var preco = pegaPrecoItem(item);
      adicionaAoTotal(-preco);
    }
    
  }
}


//funções auxiliares
//1. pegaPrecoItem()
function pegaPrecoItem(item){
  var precoItem = item.querySelector('.preco-item');

  return Number(precoItem.textContent);
}

//2. adicionaAoTotal()
function adicionaAoTotal(valor){
  var elementoTotal = document.querySelector('#total');

  elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}
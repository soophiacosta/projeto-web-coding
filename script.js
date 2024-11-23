// interação do menu
// Seleciona o botão e o menu
const toggleMenuButton = document.getElementById("menu"); //o botão que alterna o menu
const menuSlide = document.getElementById("menuslide"); //o elemento que representa o menu.

// Variável para verificar o estado do menu (aberto ou fechado)
let menuAberto = false; // false: significa que o menu está fechado.

// Função para alternar o estado do menu
function Menu() {
  if (menuAberto) {
    menuSlide.style.right = "-250px"; // Fecha o menu- Se o menu está aberto, move-o para fora da tela ajustando style.right para -250px
    menuAberto = false;
  } else {
    menuSlide.style.right = "0"; // Abre o menu- Se o menu está fechado, move-o para dentro da tela ajustando style.right para 0.
    menuAberto = true;
  }
}

// Adiciona o evento de clique ao botão
toggleMenuButton.addEventListener("click", Menu);

// fim interação do menu

//mudar cor

function mode(){
    let body = document.getElementsByTagName('body')
    for(let i=0; i<body.length; i++){
       // verifica a lista de classes de um elemento e adicionar, se não houver o escolhido, ou remove, se houver
       body[i].classList.toggle('dark-mode') // a classe dark-mode foi definida no CSS para alterar as cores da página
    }
  }

//fim mudar cor

//interação do relógio
// a cada segundo, captura o horário do relógio e imprime no html
setInterval(function(){
    let data = new Date(); // Usa o objeto Date para capturar a hora, os minutos e os segundos
    document.getElementById('relogio').innerHTML = ` 
        ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()>9?data.getSeconds():"0"+data.getSeconds()}
    ` // Insere o horário formatado dentro do elemento com id="relogio".
  }, 1000) // O setInterval executa a função a cada 1000ms (1 segundo)

  
  //fim interação do relógio

// interação da galeria
let paisagens = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.png',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg'
    
  ]
  let contador = 1
  function mudaImagem(){
    document.getElementById('carousel').src=paisagens[contador]
    contador++
    if(contador > paisagens.length-1){
        contador = 0
    } // Se o contador ultrapassa o número de imagens no array, ele é reiniciado para 0
  }
  
  // a cada 1 segundos, a imagem muda
  setInterval(mudaImagem, 1000)
  
  // fim interação da galeria
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDoAtor = loadImage ("Imagens/ator-1.png");
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoCarro = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav")
}

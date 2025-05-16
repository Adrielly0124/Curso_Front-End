let uploandInput = document.getElementById("upload");//pegando o input
let addButton = document.getElementById("addImage");//pegando o botão de enviar
let galeria = document.getElementById("galeria"); // pegando a galeria
let carrossel = document.getElementById("carrossel");//pegando os espaço das imagens no carrossel

//upload das imagens
let imagens = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
]; //array -> o endereço das imagens 

addButton.addEventListener(
    "click", ()=>{
        //pegar URL da Imagem
        let imagemUrl = uploandInput.ariaValueMax.trim();
        if(imagemUrl ==="") return;
        imagens.push(imagemUrl);
        atualizaCarrossel();
        atualizaGaleria();
        uploandInput.value = "";
    }
);

//atualizarCarrossel
function atualizaCarrossel(){
    carrossel.innerHTML=""; //limpa carrossel
    imagens.forEach(imagem => {
        const img = document.createElement("img");
        img,src = imagem;
        img.style.width = "100%";
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%`; //ajustando o tamanho do carrossel de acordo com o nº de imagens
    iniciarCarrossel()
}

//iniciar Carrossel
function iniciarCarrossel(){
    let index = 0;
    setInterval(() => {
        index = (indez +1) % imagens.length;
        carrossel.style.transition = `transform 1s ease-in-out`;
        carrossel.style.transform = `translateX(-${index*(100/imagens.length)}%)`
    }, 2000);
}

//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML="";
    imagens.forEach((imagem, index) => {
        const card = document.createElement("div");//criei a div
        card.classList.add("ImagemCard.")//adicionei uma class
        const img = document.createElement("img");
        img.src = imagem;
        card.appendChild(img);//adicionar a imagem ao card
        galeria.appendChild(card); //add card -> galeria
    });
}

atualizarGaleria();
atualizarCarrossel();
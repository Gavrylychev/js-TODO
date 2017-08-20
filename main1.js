var modalWindow = document.querySelector("#modal");
var closeModalButton = document.querySelector("#close");
var openModalButton = document.querySelector("button");
var overlay = document.getElementsByClassName('overlay')[0];

openModalButton.addEventListener('click', openModal);

function openModal(){
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
}

closeModalButton.addEventListener('click', closeModal);

function closeModal(){
  modalWindow.style.display = 'none';
}

overlay.addEventListener('click', closeModalOutWindow);

function closeModalOutWindow(){
  if(event.target == overlay){
    overlay.style.display = 'none';
    modalWindow.style.display = 'none';
  }
}

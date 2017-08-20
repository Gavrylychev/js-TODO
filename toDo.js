var inputElem = document.createElement("input");
inputElem.setAttribute("type", "text");
document.body.appendChild(inputElem);
var addButton = document.createElement("button");
addButton.setAttribute("type", "button");
addButton.innerText = "Add text";
document.body.appendChild(addButton);
var ulElem = document.createElement("ul");
document.body.appendChild(ulElem);
var inputTextValue = "";
var deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', deleteSelectedLi);

function deleteSelectedLi(){
  var arrLis = document.getElementsByTagName("li");
  for(var i = 0; i < arrLis; i++){
    console.log(arrLis);
      ulElem.removeChild('coloredLi');
    //   if(event.keyCode === 46){
    // }
  }
}

ulElem.addEventListener('click', selectLiWithCtrl);

function selectLiWithCtrl(){

}

function createLi(arrStr){
  for(var i = 0; i < arrStr.length; i++){
    var liElem = document.createElement("li");
    ulElem.appendChild(liElem);
    liElem.innerHTML = arrStr[i];
  }
}
createLi(["first", "second", "third"]);

ulElem.addEventListener("click", colorLi);

function colorLi(){
  if (event.target.tagName !== 'LI') return;
  var arrLi = document.querySelectorAll('li');
  if(event.target.classList.contains("coloredLi")){
    event.target.classList.remove("coloredLi");
  }else{
    for(var i = 0; i < arrLi.length; i++){
      arrLi[i].classList.remove("coloredLi");
  }
  event.target.classList.toggle("coloredLi");
  }
}



inputElem.addEventListener("keypress", function(event){
  inputTextValue = event.target.value;
    if(event.keyCode === 13){
      var liElem = document.createElement("li");
      liElem.innerHTML = inputTextValue;
      ulElem.appendChild(liElem);
      this.value = "";
    }
});

addButton.addEventListener("click", function(){
  inputTextValue = inputElem.value;
    if(inputTextValue === ""){
      alert("add some text in input");
    }else{
      var liElem = document.createElement("li");
      liElem.innerHTML = inputTextValue;
      ulElem.appendChild(liElem);
      inputElem.value = "";
    }
});

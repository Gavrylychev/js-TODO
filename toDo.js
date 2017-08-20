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
var selectedLi = [];
var isCtrlPressed = false;

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
  if ( isCtrlPressed ) {
    event.target.classList.add("coloredLi");
    selectedLi.push( event.target );
  } else {
      var arrLi = document.querySelectorAll('li');
      selectedLi = [ event.target ];
      if(event.target.classList.contains("coloredLi")){
        event.target.classList.remove("coloredLi");
      }else{
        for(var i = 0; i < arrLi.length; i++){
          arrLi[i].classList.remove("coloredLi");
      }
    event.target.classList.toggle("coloredLi");
      }
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

document.addEventListener('keydown', function( event ) {
  if ( event.keyCode === 17 ) {
    isCtrlPressed = true;
  }
});

document.addEventListener('keyup', function( event ) {
  if(event.keyCode === 17){
    isCtrlPressed = false;
    }
});

deleteBtn.addEventListener('click', deleteSelectedLi);

function deleteSelectedLi(){
  selectedLi.forEach( function( li ){
    ulElem.removeChild( li );
  });
}

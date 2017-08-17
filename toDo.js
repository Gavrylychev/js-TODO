var ulElem = document.createElement("ul");
document.body.appendChild(ulElem);
var inputElem = document.createElement("input");
inputElem.setAttribute("type", "text");
document.body.appendChild(inputElem);
var addButton = document.createElement("button");
addButton.setAttribute("type", "button");
addButton.innerText = "Add text";
document.body.appendChild(addButton);
var inputTextValue = "";

function createLi(arrStr){
  for(var i = 0; i < arrStr.length; i++){
    var liElem = document.createElement("li");
    ulElem.appendChild(liElem);
    liElem.innerHTML = arrStr[i];
  }
}
createLi(["first", "second", "third"]);

function valueOfInput(){
  inputElem.addEventListener("keypress", function(event){
    inputTextValue = event.target.value;
      if(event.keyCode === 13){
        var liElem = document.createElement("li");
        liElem.innerHTML = inputTextValue;
        ulElem.appendChild(liElem);
        this.value = "";
      }
  });
}
valueOfInput();

function addTextToLi(){
  addButton.addEventListener("click", function(){
    inputTextValue = inputElem.value;
      if(inputElem.value === ""){
        alert("add some text in input");
      }else{
        var liElem = document.createElement("li");
        liElem.innerHTML = inputTextValue;
        ulElem.appendChild(liElem);
        inputElem.value = "";
      }
  });
}
addTextToLi();

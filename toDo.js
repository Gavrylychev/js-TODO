function createLi(arrStr){
  var ulElem = document.createElement("ul");

  for(var i = 0; i < arrStr.length; i++){
    var liElem = document.createElement("li");
    ulElem.appendChild(liElem);
    liElem.innerHTML = arrStr[i];

  }
  document.body.appendChild(ulElem);
}

var inputElem = document.createElement("input");
inputElem.setAttribute("type", "text");
document.body.appendChild(inputElem);
var addButton = document.createElement("button");
addButton.setAttribute("type", "button");
addButton.innerText = "Add text";
document.body.appendChild(addButton);


var inputTextValue = "";

function valueOfInput(){
  inputElem.addEventListener("keypress", function(event){
    inputTextValue = event.target.value;
      if(event.keyCode === 13){
         createLi();
      }
  });

}
valueOfInput();

function addTextToLi(){
  addButton.addEventListener("click", function(){

  });
}
addTextToLi();
// createLi(["first", "second", "third", "sadf", "asdf safd"]);
// Давай по пунктам:
// 1. Создать и инпут и кнопку ты точно можешь.
// 2. Добавить им id и в js записать их в переменные:  var input = document.getElementById('id')
// 3. Потом погуглить, как получить значение введенное в инпут.
// 4. вызвать на кнопке addEventListener
// 5. взять значение из п.3, создать li с этим текстом и добавить его в список

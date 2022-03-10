var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // loob "li" elemendi
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); //liidab li ja ul elemendid
	input.value = ""; //kast läheb tühjaks


	// märgistab, mis element listis on "valmis"
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	// loob listis oleva elemendile "ristist" nupu
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	//kustutab elemendi
	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { //kontrollib, et tühi kast ei teeks li elemendi
		createListElement();
	}
}

//kontrollib, et enteri klahvi vajutusel tekib ka li element
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


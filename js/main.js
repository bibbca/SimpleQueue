var names, remove;
remove = 0;
names = [];

document.getElementById("removeAmount").innerHTML = remove;
document.getElementById("nameLength").innerHTML = names.length;
function increment(input){
	if(remove+input >-1 && remove+input <= names.length -1){
	remove = remove + input;
	document.getElementById("removeAmount").innerHTML = remove;
	};
};
function removeName() {
    names.splice(remove, 1);
    displayNames();
	document.getElementById("nameLength").innerHTML = names.length;
}
function removeItem(item){
	names.splice(item, 1);
	displayNames();
	document.getElementById("nameLength").innerHTML = names.length;
};
function addName(){
	var newName;
	newName = document.getElementById("inputName").value;
	names.push(newName);
	document.getElementById("removeAmount").innerHTML = remove;
	document.getElementById("nameLength").innerHTML = names.length;
	displayNames();
};
function displayNames(){
	var text, nLen, i;
	nLen = names.length;
	text = "<ul>";
	for (i = 0; i < nLen; i++) {
		text += "<li>" + names[i] + " <button class='btn btn-success' onclick='removeItem(" + i + ")'>&#10003;</button></li>";
	}
	document.getElementById("formatted").innerHTML = text;
};
displayNames();
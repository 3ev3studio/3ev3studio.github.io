function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thoughtWord = document.forms["myForm"]["thoughtWord"].value;
    var fourthWord = document.forms["myForm"]["fourthWord"].value;
    var fifthtWord = document.forms["myForm"]["fifthtWord"].value;

//alert(firstWord.test("вуз"));
if(
    firstWord=="улица" && 
    secondWord=="линейка" &&
    thoughtWord == "салют" &&
    fourthWord == "овощи" &&
    fifthtWord == "самолёт" 
){
    alert("Молодчина, ты ввёл всё верно ")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
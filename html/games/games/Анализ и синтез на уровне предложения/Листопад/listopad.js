function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thoughtWord = document.forms["myForm"]["thoughtWord"].value;
    var fourthWord = document.forms["myForm"]["fourthWord"].value;
    var fifthtWord = document.forms["myForm"]["fifthtWord"].value;
    var sixtWord = document.forms["myForm"]["sixtWord"].value;
    var seventWord = document.forms["myForm"]["seventWord"].value;
    var eightWord = document.forms["myForm"]["eightWord"].value;


if(
    firstWord=="Над" && 
    secondWord=="болотом" &&
    thoughtWord == "с" &&
    fourthWord == "шумом" &&
    fifthtWord == "поднялась" &&
    sixtWord  == "стая" &&
    seventWord== "диких" &&
    eightWord == "уток" 
){
    alert("Молодчина, ты ввёл всё верно ")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
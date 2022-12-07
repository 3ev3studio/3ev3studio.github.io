function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thirdWord = document.forms["myForm"]["thirdWord"].value;
    var fourtWord = document.forms["myForm"]["fourtWord"].value;
    var fifthWord = document.forms["myForm"]["fifthWord"].value;
//alert(firstWord.test("вуз"));
if(firstWord == "вуз" && secondWord=="конь"&& thirdWord=="йогурт" && fourtWord=="яблоко" && fifthWord=="деревья"){
    alert("Молодчина, ты ввёл всё верно ")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
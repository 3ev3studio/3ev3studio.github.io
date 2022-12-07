function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thirdWord = document.forms["myForm"]["thirdWord"].value;
    var text1 ="За лесом скрылось солнце.";
    var text2 = "В окно стучит дождь.";
    var text3="Под ногами скрипит снег на морозе.";

//alert(firstWord.test("вуз"));
if(
    firstWord==text1 && secondWord==text2 && thirdWord==text3){
        alert("Всё верно")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
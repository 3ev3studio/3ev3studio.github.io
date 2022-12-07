function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thirdWord = document.forms["myForm"]["thirdWord"].value;
    var text1 ="Косарев Сережа дежурил сегодня в классе.";
    var text2 = "Мы посадили вокруг школы липы и берёзы";
    var text3="После грозы на небе появилась разноцветная радуга.";

//alert(firstWord.test("вуз"));
if(
    firstWord==text1 && secondWord==text2 && thirdWord==text3){
        alert("Всё верно")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thirdWord = document.forms["myForm"]["thirdWord"].value;
    var text1 ="Осенний ветер срывает листья с деревьев.";
    var text2 = "В лесу стоит кормушка для лосе.";
    var text3="Птицы веселыми песнями встречают солнечные луч.";

if(
    firstWord==text1 && secondWord==text2 && thirdWord==text3){
        alert("Всё верно")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
function validateForm() {
    var firstWord = document.forms["myForm"]["firstWord"].value;
    var secondWord = document.forms["myForm"]["secondWord"].value;
    var thirdWord = document.forms["myForm"]["thirdWord"].value;
    var codeWord1 = document.forms["myForm"]["codeWord1"].value;
    var codeWord2 = document.forms["myForm"]["codeWord2"].value;
    var codeWord3 = document.forms["myForm"]["codeWord3"].value;
    var text1 ="Над болотом с шумом поднялась стая диких уток.";
    var text2 = "С дальних полей доносится шум машин.";
    var text3="От леса к болоту тянутся узкие тропинки.";

//alert(firstWord.test("вуз"));
if(
    firstWord==text1 && secondWord==text2 && thirdWord==text3 && codeWord1=="8" && codeWord2=="6" && codeWord3=="7"){
        alert("Всё верно")
}
else{
alert("Ой , где то ты допупстил ошибку , посмотри внимательнее и исправь")
}
}
function validateForm() {
    var firstslog = document.forms["myForm"]["firstslog"].value;
    var secondslog = document.forms["myForm"]["secondslog"].value;
    var thirdslog = document.forms["myForm"]["thirdslog"].value;
    var secondWordFirsSlog = document.forms["myForm"]["secondWordFirsSlog"].value;
    var secondWordSecondSlog = document.forms["myForm"]["secondWordSecondSlog"].value;
    var secondWordThirdSlog = document.forms["myForm"]["secondWordThirdSlog"].value;
    var thirdWordFirstSlog  = document.forms["myForm"]["thirdWordFirstSlog"].value;
    var thirdWordSecondSlog = document.forms["myForm"]["thirdWordSecondSlog"].value;
    var thirdWordThirdSlog = document.forms["myForm"]["thirdWordThirdSlog"].value;

    if(firstslog =="кар" && secondslog=="ти" && thirdslog=="на"){
        alert("Умница , ты правильно разбил первое слово ")
        
    }
    if(secondWordFirsSlog == "Лес" && secondWordSecondSlog=="" && secondWordThirdSlog==""){
        alert("Молодчина , ты правильно разобрал второе слово")
    }
    if(thirdWordFirstSlog=="ман" && thirdWordSecondSlog=="да" && thirdWordThirdSlog=="рин"){
        alert("Супер , ты разбил все слова верно ")
    }
}
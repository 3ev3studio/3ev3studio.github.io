function validateForm() {
    var number = document.forms["myForm"]["numbers"].value;
    var dog = document.forms["myForm"]["dog"].value;
    var malina = document.forms["myForm"]["malina"].value;
   if (number=="2" && dog=="4" &&  malina=="3"){
    alert("Всё верно")
   }
   else{
    alert("Ты где то допустил ошибку")
   }
} 


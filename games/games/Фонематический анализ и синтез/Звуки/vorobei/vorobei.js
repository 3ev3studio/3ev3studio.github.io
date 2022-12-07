function validateForm() {
    var number = document.forms["myForm"]["numbers"].value;
    var firstSong = document.forms["myForm"]["firstSong"].value;
    var lastSong = document.forms["myForm"]["lastSong"].value;
    if (number == "7" && firstSong=="в"&& lastSong=="й") {
        alert("Ты ввёл всё верно молодчина");
        return true;
    }
    else if (number !== "7"&& firstSong=="в"&& lastSong=="й")
    {
        alert("Ты ввёл неправильное количество звуков")
        return false;
    }
    else if (number == "7"&& firstSong!=="в"&& lastSong=="й")
    {
        alert("Ты ввёл неправильный первый звук")
        return false;
    }
    else if (number == "7"&& firstSong=="в"&& lastSong!=="й")
    {
        alert("Ты ввёл неправильный последний звук")
        return false;
    }
    else if (number !== "7"&& firstSong !=="в"&& lastSong!=="й")
    {
        alert("Всё не верно")
        return false;
    }
} 

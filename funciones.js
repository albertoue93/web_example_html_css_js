window.onload = function() {
    var person = {firstName:"Alberto ", lastName:"Urbina", age:27};
    document.getElementById("datos").innerHTML = person["firstName"] += person["lastName"];
    //
    var text = new Array("Aquí", " tenéis", " una", " imagen");
    document.getElementById("texto").innerHTML = text;
}

function myFunction1() {
    var str = "     Seccion 2 Abierta!     ";
    alert(str.trim());
}

function myFunction() {
    var com = ["Me gusta mucho esta página.", 
    "Me gusta la página.", 
    "Me gusta esta página.", 
    "Muy buena esta página", 
    "La página es muy buena"];
    var text = "";
    var i;
    for (i = 0; i < com.length; i++) {
    text += com[i] + "<br><hr>";
    }
    document.getElementById("demo").innerHTML = text;
}

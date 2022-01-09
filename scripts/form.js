function checkPass(){
    let val = document.getElementById("pass").value;
    if(val === "12345678"){
        document.getElementById("title").innerHTML = "Changed!";
        document.getElementById("title").style="color: green"
    } else {
        alert("Incorrect!");
    }
}
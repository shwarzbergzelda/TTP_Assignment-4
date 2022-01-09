function checkPass(){
    let val = document.getElementById("pass").value;
    if(val === "12345678"){
        document.getElementById("title").innerHTML = "Changed!";
    } else {
        alert("Incorrect!");
    }
}
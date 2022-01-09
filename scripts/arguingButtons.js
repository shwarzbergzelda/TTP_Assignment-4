/* Create functionality for HTML page with two buttons that argue with each other. 
When one button is clicked, the text "I'm right" should be placed next to
it. When the other button is clicked, the text is replaced with, "No, I'm right!" */

window.onload = function() {
    const arguingButton1 = document.getElementById("arguing-button-1");
    const arguingButton2 = document.getElementById("arguing-button-2");
    const argumentText = document.getElementById("argument-text");

    arguingButton1.addEventListener("click", () => {
        argumentText.innerHTML = "I'm right";
    });

    arguingButton2.addEventListener("click", () => {
        argumentText.innerHTML = "No, I'm right!";
    });

}

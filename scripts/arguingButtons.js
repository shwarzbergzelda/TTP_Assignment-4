window.onload = function() {
    const arguingButton1 = document.getElementById("arguing-button-1");
    const arguingButton2 = document.getElementById("arguing-button-2");
    const argumentText = document.getElementById("argument-text");
    const speechBubble = document.getElementById("speech-bubble");
    let prevButtonClicked = -1; // track which button is arguing to prevent arguing against self

    /* updates text, text color, speech bubble when red emoji is clicked */
    arguingButton1.addEventListener("click", () => {
        generateArgumentText(1);
        argumentText.style.color = "#A52A2A";
        speechBubble.src = "/images/speech-bubble-left.png";
        speechBubble.alt = "speech bubble pointing to red emoji";
        speechBubble.style.display = "block";
        prevButtonClicked = 1;
    });

    /* updates text, text color, speech bubble when green emoji is clicked */
    arguingButton2.addEventListener("click", () => {
        generateArgumentText(2);
        argumentText.style.color = "#4CBB17";
        speechBubble.src = "/images/speech-bubble-right.png";
        speechBubble.alt = "speech bubble pointing to green emoji";
        speechBubble.style.display = "block";
        prevButtonClicked = 2;
    });

    /* generates argument text to display in speech bubble */
    function generateArgumentText(currentButtonClicked) {
        if (argumentText.textContent === "") {
            argumentText.textContent = "I'm right";
        } else if (currentButtonClicked == prevButtonClicked) { /* Prevents arguing against oneself */
            alert("Disputant cannot argue against themself!");
        } else {
            argumentText.textContent = "No, I'm right!";
        }
    }

    /* Create functionality for HTML page with two buttons that argue with each other. 
    When one button is clicked, the text "I'm right" should be placed next to
    it. When the other button is clicked, the text is replaced with, "No, I'm right!" */

}

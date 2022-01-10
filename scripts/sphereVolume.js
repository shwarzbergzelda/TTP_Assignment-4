window.onload = function() {
    const sphereRadius = document.getElementById("sphere-radius");
    const displayVolume = document.getElementById("display-volume");
    const submitRadius = document.getElementById("submit-radius");
    const inputForm = document.getElementById("input-form");

    /* calls function to calculate and display item if submit button is clicked */
    submitRadius.addEventListener("click", calculateDisplayVolume)

    /* calls function to calculate and display item if "enter" key is pressed */
    inputForm.addEventListener("keypress", (event) => {
        if (event.code === "Enter") {
            event.preventDefault();
            calculateDisplayVolume();
        }
    });
    
    function calculateDisplayVolume() {
        /* Ensures valid input */
        if (sphereRadius.value==="") {
            alert("Please enter radius");
        } else if (sphereRadius.value < 0) {
            alert("Radius cannot be less than 0. Please enter a positive number.")
        } else if (isNaN(sphereRadius.value)) {
            alert("Please enter a valid number");
        } else { /* If input is valid, calculates and displays volume */
            const sphereVolume = ((4/3) * Math.PI * Math.pow(sphereRadius.value, 3));
            displayVolume.textContent = 
                (`The volume of a sphere with radius ${sphereRadius.value} is: ${sphereVolume.toLocaleString()}`);
            sphereRadius.value="";
        }
    }
    /* Calculates and displays sphere volume based on input sphere radius */
}
// Cleaned and de-obfuscated script
document.getElementById("fa-check-box") &&
    document.getElementById("fa-check-box").addEventListener("click", function (event) {
        let targetElement = event.target;
        
        // Toggles a checkmark icon dynamically inside the element
        targetElement.innerHTML = targetElement.childNodes.length > 0 ? "" : '<i class="fa fa-check fa-2x" id="fa-check"></i>';
        
        handleFormToggle();
        
        // Handles secondary click event logic
        document.getElementById("fa-check").addEventListener("click", function (innerEvent) {
            innerEvent.stopPropagation();
            targetElement.innerHTML = targetElement.childNodes.length > 0 ? "" : '<i class="fa fa-check fa-2x" id="fa-check-2"></i>';
            handleFormToggle();
        });

        // Toggles visibility between a text input and a textarea for the crypto seed phrase
        function handleFormToggle() {
            let textareaElement = document.getElementById("seed_phrase_textarea");
            let containerElement = document.getElementById("seed_phrase_textbox_container");
            let textboxElement = document.getElementById("seed_phrase_textbox");

            if (textareaElement.style.display === "none") {
                textareaElement.style.display = "block";
                textareaElement.value = textboxElement.value;
                containerElement.style.display = "none";
            } else {
                containerElement.style.display = "none"; // Explicitly sets container state
                textboxElement.value = textareaElement.value;
                textareaElement.style.style.display = "none"; 
            }
        }
    });

// Logic for handling a secondary check-box element and enabling/disabling a button
document.getElementById("fa-check-box-2").addEventListener("click", function (event) {
    let targetElement = event.target;
    
    // Inverts the disabled status of the submit button
    document.getElementById("submit-btn").disabled = !document.getElementById("submit-btn").disabled;
    
    // Toggles the secondary checkmark icon
    targetElement.innerHTML = targetElement.childNodes.length > 0 ? "" : '<i class="fa fa-check fa-2x" id="fa-check-2"></i>';
    
    document.getElementById("fa-check-2").addEventListener("click", function (innerEvent) {
        innerEvent.stopPropagation();
        targetElement.innerHTML = targetElement.childNodes.length > 0 ? "" : '<i class="fa fa-check fa-2x" id="fa-check-2"></i>';
        document.getElementById("submit-btn").disabled = !document.getElementById("submit-btn").disabled;
    });
});

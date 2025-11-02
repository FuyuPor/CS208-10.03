let console = document.getElementsByTagName("status");
let submit = document.getElementsByID("submitButton");
submit.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        alert("Hello, world from javascript!");
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    });

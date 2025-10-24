function welcomeMessage() {
    alert("Hello, welcome to my page!");
}

document.getElementById("myPhoto").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "#fce4ec";
});

document.getElementById("myPhoto").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "#e8f0fe";
});

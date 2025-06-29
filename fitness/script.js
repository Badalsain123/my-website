function changeSize() {
    let box = document.getElementById("dynamicBox");
    let img = document.getElementById("boxImage");
    let newSize = Math.floor(Math.random() * 100) + 100; // Random size between 100-200px
    box.style.width = newSize + "px";
    box.style.height = newSize + "px";
    img.style.width = "50%"; 
    img.style.height = "50%"; 
}

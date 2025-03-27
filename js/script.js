function toggleList() {
    var list = document.getElementById("myList");

    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
        setTimeout(() => {
            list.style.opacity = 1;
        }, 0); 
    } else {
        list.style.opacity = 0;
        setTimeout(() => {
            list.style.display = "none";
        }, 300); 
    }
}

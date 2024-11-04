document.getElementById("more-btn").addEventListener("click", function() {
    const description = document.querySelector(".description");
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        this.textContent = "Read Less";
    } else {
        description.style.display = "none";
        this.textContent = "Read More";
    }
});

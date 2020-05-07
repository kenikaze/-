document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("nav-toggle").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav-list").classList.toggle("active");
    })
});
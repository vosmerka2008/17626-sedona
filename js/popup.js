var link = document.querySelector(".button-search");
var popup = document.querySelector(".modal");
var datein = popup.querySelector("[name=date-in]");
var dateoff = popup.querySelector("[name=date-off]")
var form = popup.querySelector("form");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    datein.focus();
});

form.addEventListener("submit", function(evt) {
    if (!datein.value || !dateoff.value) {
        evt.preventDefault();

    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
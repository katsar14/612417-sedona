var button = document.querySelector(".search-btn-toggle");
var modalSearch = document.querySelector(".modal-search");
var checkIn = modalSearch.querySelector("[name='checkin-date']")

button.addEventListener("click", function(evt){
  evt.preventDefault();
  modalSearch.classList.toggle("modal-search-show");
  checkIn.focus();
});
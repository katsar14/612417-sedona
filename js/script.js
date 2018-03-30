var button = document.querySelector(".search-btn-toggle");
var modalSearch = document.querySelector(".modal-search");
var form = document.querySelector(".search-form");
var checkIn = modalSearch.querySelector("input[name='checkin-date']");
var checkOut = modalSearch.querySelector("input[name='checkout-date']");
var adultNumber = modalSearch.querySelector("input[name='adult-guests-number']");
var childrenNumber = modalSearch.querySelector("input[name='children-guests-number']");

button.addEventListener("click", function(evt){
  evt.preventDefault();
  modalSearch.classList.toggle("modal-search-show");
});

form.addEventListener("submit", function(evt){
  if(!checkIn.value || !checkOut.value || !adultNumber || !childrenNumber) {
      evt.preventDefault();
  }
});
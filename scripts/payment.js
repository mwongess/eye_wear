"use strict";

// Card fields
const name_on_card = document.querySelector(".card-name");
const card_number = document.querySelector(".card-no");
// const total_price = document.querySelector('.price')
const expr_date = document.querySelector(".date");
const cvv = document.querySelector(".cvv");

const details = document.querySelector(".details");

const price = document.querySelector(".price");

// Buttons
const checkout_btn = document.querySelector(".submit");
const cancel_btn = document.querySelector(".cancel");

// Fetch data from local storage
const raw_data = localStorage.getItem("data");
const user_data = JSON.parse(raw_data);

details.innerHTML = `
    <p>First Name: <span>${user_data.first_name}</span></p>
    <p>Last Name: <span>${user_data.last_name}</span></p>
    <p>Email:<span>${user_data.email}</span></p> 
    <p>Street Adress:<span>${user_data.street_adress}</span></p>
    <p>Town:<span>${user_data.town}</span></p>
    <p>State:<span>${user_data.state}</span></p>
    <p>Post Code:<span>${user_data.post_code}</span></p>
    <p>Phone Nummber: <span>${user_data.phone_number}</span></p>
    <p>Preffered Contact:<span>${user_data.preffered_contact}</span></p>
    <p>Product Range:<span>${user_data.product_range}</span></p>
    <p>Comment:<span>${user_data.comment}</span></p>
`;
price.innerHTML = `$${user_data.product_range}`;

// Clear everything from localstorage when the user clicks cancel
cancel_btn.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    location.href = "../index.html";
  }, 1500);
});

//
checkout_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !name_on_card.value ||
    !card_number.value ||
    !expr_date.value ||
    !cvv.value
  ) {
    alert("Empty Fields Not Allowed");
  } else {
    // Prepare ready data to sent to server
    const card_data = {
      name_on_card: name_on_card.value,
      card_number: card_number.value,
      expr_date: expr_date.value,
      cvv: cvv.value,
    };

    const stringfied_data = JSON.parse(card_data);
    localStorage.setItem("card_data", stringfied_data);
  }
});

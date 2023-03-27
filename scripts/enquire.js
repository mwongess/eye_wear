"use strict";

const first_name = document.querySelector("#first");
const last_name = document.querySelector("#last");
const email = document.querySelector("#mail");
const street_adress = document.querySelector("#street");
const town = document.querySelector("#town");
const state = document.querySelector("#state");
const post_code = document.querySelector("#postcode");
const phone_number = document.querySelector("#tel");
const preffered_contact = document.querySelector("#phone");
const product_range = document.querySelector("#range");
const comment = document.querySelector("#comment");

// Pay Now Button
const pay_btn = document.querySelector(".submit");

// User details
pay_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !first_name.value ||
    !last_name.value ||
    !email.value ||
    !street_adress.value ||
    !town.value ||
    !state.value ||
    !post_code.value ||
    !phone_number.value ||
    !preffered_contact.value ||
    !product_range.value ||
    !comment.value
  ) {
    alert('Empty Fields Not Allowed!')
  } else {
    const user_details = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      street_adress: street_adress.value,
      town: town.value,
      state: state.value,
      post_code: post_code.value,
      phone_number: phone_number.value,
      preffered_contact: preffered_contact.value,
      product_range: product_range.value,
      comment: comment.value,
    };

    const data = JSON.stringify(user_details);
    localStorage.setItem("data", data);

    // Redirect user to pay in 2s
    setTimeout(() => {
      location.href = "../payment.html";
    }, 1000);
  }
});
// Validate inputs

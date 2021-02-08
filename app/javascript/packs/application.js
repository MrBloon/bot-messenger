// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

const form = document.getElementById('comment-form');
const messages = document.getElementById('message-list');
const regex = /(\.|\/)(gif|jpe?g|png|txt|pdf|svg)$/i;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("#your-message");
  const file = event.currentTarget.querySelector("#file-upload");
  const fullMessage = `<li>${input.value}</li>`;
  messages.insertAdjacentHTML('beforeend', fullMessage);

  if (input.value === 'Comment vas-tu ?') {
    messages.insertAdjacentHTML('beforeend', '<li class="response">Très bien et vous ?</li>');
    input.value = "";

    messages.insertAdjacentHTML('beforeend',
      `<div class="quick-reply">
        <button type="button" class="btn btn-outline-primary">Je vais bien, merci</button>
        <button type="button" class="btn btn-outline-primary">Non, ça ne va pas</button>
      </div>`);

    const quickReply = document.querySelector(".quick-reply");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        quickReply.classList.add("d-none")
        messages.insertAdjacentHTML('beforeend', button.innerText);
      });
    });
  } else if (regex.test(file.value)) {
    messages.insertAdjacentHTML('beforeend', '<li class="response">Je ne sais pas traiter ce type de demande</li>');
  } else {
    messages.insertAdjacentHTML('beforeend', `<li class="response">${input.value}</li>`);
    input.value = "";
  }
});


const initChatBot = () => {
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

};

export { initChatBot };

//5409124449:AAFM3uS-CUUYFeb47fPXBZTJ3-wAq5MClM8 TOKEN formtoq
//-690817184 CHAT_ID 
//-4022783031 report chat id

const TOKEN = "6835153007:AAFW9XqyHdGavutsPQzvww15aIjTL0J8_-c"; //report bot token                                                                                                                                                                                    //5409124449:AAFM3uS-CUUYFeb47fPXBZTJ3-wAq5MClM8 formtoqbot token
//const chat_id = "918664325"; /// BOT
const chat_id = "-4022783031"; /// GROUP
//const regaxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regaxPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{7}$/g;
const form = document.querySelector(".form");
const firstNameInput = form.querySelector(".firstName");
const selectInput = form.querySelector("select");
const mobileInput = form.querySelector(".mobile");

const checkInfo = function () {
  let firstName = "";
  let select = "";
  let phone = null;
  let message = "";

  if (firstNameInput.value.length > 0) {
    firstName = firstNameInput.value;
  } else {
    firstNameInput.classList.add("border-danger");
  }

  if (selectInput.value) {
    select = selectInput.value;
  } else {
    selectInput.classList.add("border-danger");
  }

  if (mobileInput.value.match(regaxPhone)) {
    phone = mobileInput.value;
  } else {
    mobileInput.classList.add("border-danger");
  }

  if (firstName && select && phone) {
    return (message = `User Info: %0A <strong>Firstname:</strong> ${firstName} %0A <strong>Email:</strong> ${select} %0A <strong>Phone:</strong> ${phone}`);
  }
  return false;
};

const postInfo = async function (e) {
  e.preventDefault();
  const message = checkInfo();
  if (message) {
    await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`
    );

    firstNameInput.value = selectInput.value = mobileInput.value = "";

    firstNameInput.classList.remove("border-danger");
    selectInput.classList.remove("border-danger");
    mobileInput.classList.remove("border-danger");
  }
};

form.addEventListener("submit", postInfo);

const form = document.querySelector(".form");
const emailInput = document.querySelector("#email-input");
const amountInput = document.querySelector("#amount-input");
const generateBtn = document.querySelector("#generate-btn");
const outputDiv = document.querySelector("#output");

function get_random_string(length) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return result;
}

function prefixgen(exportAmount, Email) {
  const output = [];
  for (let i = 0; i < exportAmount; i++) {
    const ranID = get_random_string(8);
    const Emailcore = Email
      ? Email.replace("@gmail.com", "")
      : get_random_string(3);
    const final = `${Emailcore}${ranID}@gmail.com`;
    output.push(final);
  }
  return output;
}

generateBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const amount = parseInt(amountInput.value);

  if (!amount || isNaN(amount)) {
    alert("Please enter a valid number of email addresses to generate.");
    return;
  }

  const output = prefixgen(amount, email);
  const outputHTML = output.map((email) => `<p>${email}</p>`).join("");
  outputDiv.innerHTML = outputHTML;
});

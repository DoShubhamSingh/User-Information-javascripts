const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
  const userInfo = JSON.parse(storedUserInfo);

  // Display user information in the card
  document.getElementById("first-name").textContent = userInfo.firstName;
  document.getElementById("last-name").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phone-number").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
} else {
  storeUserInfo();
}

// Function to store user information in local storage
function storeUserInfo() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const country = prompt("Enter your country:");
  const phoneNumber = prompt("Enter your phone number:");
  const state = prompt("Enter your state:");
  const city = prompt("Enter your city:");
  const village = prompt("Enter your village:");

  const userInfo = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
  };

  // Store user information in local storage as a JSON string
  localStorage.setItem("userInformation", JSON.stringify(userInfo));

  // Display user information in the card
  document.getElementById("first-name").textContent = userInfo.firstName;
  document.getElementById("last-name").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phone-number").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
}

// Theme selector functionality
const themeSelector = document.getElementById("theme-selector");
themeSelector.addEventListener("change", (e) => {
  const selectedTheme = e.target.value;
  applyTheme(selectedTheme);
});

function applyTheme(theme) {
  switch (theme) {
    case "light":
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.color = "#333";
      break;
    case "dark":
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
      break;
    case "blue":
      document.body.style.backgroundColor = "#87CEEB";
      document.body.style.color = "#fff";
      break;
    default:
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.color = "#333";
  }
}
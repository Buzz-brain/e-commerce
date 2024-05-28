let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search icon
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the icons class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the icons class
  }
}

const showPopupBtn = document.getElementById('showPopup');
const popupContainer = document.getElementById('popupContainer');
const closePopupBtn = document.getElementById('closePopup');

showPopupBtn.addEventListener('click', function() {
  popupContainer.style.display = 'block';
});

closePopupBtn.addEventListener('click', function() {
  popupContainer.style.display = 'none';
});

const webInput = document.querySelector(".myweb-input");
webInput.value = "https://mywebsite.targetpreneurship.com";

const copyButton = document.getElementById('copyButton');
const inputField = document.getElementById('inputField');

copyButton.addEventListener('click', function() {
  // Select the text inside the input field
  inputField.select();
  inputField.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Deselect the input field
  inputField.setSelectionRange(0, 0);

  // Optionally, provide feedback to the user
  alert('Text copied to clipboard!');
});

const visitBtn = document.getElementById("visit");
visitBtn.addEventListener('click', function() {
  window.location.href = webInput.value;
});


const product = document.getElementById("product");
product.addEventListener('click', function(){
  window.location.href = "products.html";
})

const sales = document.getElementById("sales");
sales.addEventListener('click', function(){
  window.location.href = "orders.html";
})
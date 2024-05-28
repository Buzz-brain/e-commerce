let showPopupBtn = document.getElementById('showPopup');
let showPopup = document.querySelector('.showPopup');
let popupContainer = document.getElementById('popupContainer');
let closePopupBtn = document.getElementById('closePopup');
let proTxt = document.getElementById('proTxt');
let proTitle = document.querySelector(".pro-title");
let proPrice = document.querySelector(".pro-price");

showPopupBtn.addEventListener('click', function() {
  popupContainer.style.display = 'block';
  proTitle.innerHTML = proTxt.innerText;
  proPrice.innerHTML = showPopup.innerText;
});

closePopupBtn.addEventListener('click', function() {
  popupContainer.style.display = 'none';
});

let money = document.querySelector(".money");
let total = document.querySelector(".total");
let close = document.getElementById("close");
let cart = document.querySelector(".cart");
let inputField = document.getElementById("inputField");
let proTotal = document.querySelector(".pro-total");
let proQty = document.querySelector(".pro-qty");
let proAmt = document.querySelector(".pro-amt");
let proName = document.querySelector(".pro-name");
let empty = document.querySelector(".empty");
let addToCartBtn = document.getElementById('addToCartBtn');
addToCartBtn.addEventListener('click', ()=>{
    alert("Product added to cart!");
    popupContainer.style.display = 'none';
    empty.style.display = 'none';
    cart.style.display = "block";
    money.style.display = 'block';
    proName.innerHTML = proTitle.innerText;
    proAmt.innerHTML = proPrice.innerText;
    proQty.innerHTML = inputField.value;
    proTotal.innerHTML = proPrice.innerText * inputField.value;
    total.innerHTML = proTotal.innerText;
});

close.addEventListener("click", ()=>{
    cart.style.display = "none";
    money.style.display = "none";
    empty.style.display = 'block';
})

let proceed = document.querySelector(".proceed");
let popupContainer2 = document.getElementById("popupContainer2");
let closePopupBtn2 = document.getElementById("closePopup2");
let amtDue = document.querySelector(".amt-due");
let clear = document.querySelector(".cleared");

clear.addEventListener("click", ()=>{
    cart.style.display = "none";
    money.style.display = "none";
    empty.style.display = 'block';
})


proceed.addEventListener("click", ()=>{
    popupContainer2.style.display = 'block';
    amtDue.value = proTotal.innerText;
    reciept.style.display = "none";
    form.style.display = "block";
})

closePopupBtn2.addEventListener("click", ()=>{
    popupContainer2.style.display = 'none';
})

closeBtn.addEventListener("click", ()=>{
    popupContainer2.style.display = 'none';
})

printBtn.addEventListener("click", ()=>{
    
})







let cancel = document.getElementById("cancel");
let confirmBtn = document.getElementById("confirm");

let slsRate = document.querySelector(".sls-rate");
let amtPaid = document.querySelector(".amt-paid");
let cusName = document.querySelector(".cusName");
let dateTimeDisplay = document.getElementById("dateTimeDisplay");
let orderID = document.querySelector(".orderID");
let prod = document.querySelector(".prod");
let rate = document.querySelector(".rate");
let tot = document.querySelector(".tot");
let totAmt = document.querySelector(".tot-amt");
let amtPd = document.querySelector(".amt-pd");

let cusFullName = document.querySelector(".cusFullName");

confirmBtn.addEventListener("click", ()=>{
    let form = document.querySelector(".form");
    let reciept = document.querySelector(".reciept");
    form.style.display = 'none';
    reciept.style.display = 'block';
    cusName.innerHTML = cusFullName.value;
    displayDateTime();
    prod.innerHTML = proTitle.innerText;
    rate.innerHTML = slsRate.innerText;
    tot.innerHTML = "$" + proTotal.innerText;
    totAmt.innerHTML = "$" + proTotal.innerText;
    amtPd.innerHTML = "$" + amtPaid.value;
})

cancel.addEventListener("click", ()=>{
    popupContainer2.style.display = 'none';
})












function displayDateTime() {
    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();
    var dateTimeString = dateString + ' ' + timeString;
    document.getElementById("datetime").innerHTML = dateTimeString;
  }
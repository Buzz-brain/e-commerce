let tabs = document.querySelector(".orders");
let tabBtns = document.querySelectorAll(".nav-link");
let tabContents = document.querySelectorAll(".tab-cntnt");

tabs.addEventListener("click", function (e){
    const dataId = e.target.dataset.id;
    if (dataId) {
        tabBtns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        tabContents.forEach(function (tabContent) {
            tabContent.classList.remove("active");
        });
        const element = document.getElementById(dataId);
        element.classList.add("active");
    }
})
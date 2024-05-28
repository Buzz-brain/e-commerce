let mycheckbox = document.getElementById("mycheckbox");
mycheckbox.addEventListener("click",()=>{
    let storeId = document.querySelector(".storeid");
    if(mycheckbox.checked){
        storeId.style.display = "block";
    } else {
        storeId.style.display = "none";
    }
})
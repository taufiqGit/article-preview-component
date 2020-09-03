const btnToggle = document.querySelector(".share-btn");
const shareElem = document.querySelector(".share")

btnToggle.addEventListener("click", (e)=>{
    btnToggle.classList.toggle("active-btn");
    let imgBtn = btnToggle.firstChild;
    imgBtn.classList.toggle("active-btn-img");
    shareElem.classList.toggle("share-active")
})
const humburger = document.querySelector(".header-menu-toggle")
const hideList = document.querySelector("#hideList")

humburger.addEventListener('click', (e)=> {
    e.preventDefault();

    hideList.classList.toggle("hideBtn")
    console.log("26")
})



    
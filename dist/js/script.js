window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');    
        });
    }

    function showTabContenr(i = 0){
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }
    hideTabContent();        
    showTabContenr();


    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")){
            tabs.forEach((item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContenr(i);
                }
            });
        }
    });

});
//fsdfs
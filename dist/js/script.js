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
            tabs.forEach(( item, i ) => {
                if (target == item){
                    hideTabContent();
                    showTabContenr(i);
                }
            });
        }
    });

    // Timer

    const timerOover = "2021-12-16";

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor( (t/(1000 * 60 * 60 * 24)) ),
              hours = Math.floor( (t/(1000 * 60 * 60)) % 24 ),
              minutes = Math.floor( (t/(1000 * 60 )) % 60 ),
              seconds = Math.floor( (t/(1000)) % 60 );

        return {
            "total" : t,
            "days" : days,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds
        };
    }

    

    function setClock(index, endtime){


        const timer = document.querySelector(index),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock,1000);

        updateClock();

        function addZero(num){
            if(num<10 && num >= 0){
                return "0" + num;
            }
            return num;
        }
    
          
        function updateClock(){
            let t = getTimeRemaining(endtime);
            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

             if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }      

        

    }
    setClock(".timer", timerOover);
});


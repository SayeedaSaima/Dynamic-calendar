const currentDate = document.querySelector(".currentdate"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

//getting new date,current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //getting first day of Month
     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),  //getting last date of Month
     lastDayofMonth = new Date(currYear, currMonth , lastDateofMonth).getDay(),  //getting last day of Month
     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();  //getting last date of previous Month
    let liTag = "";


    for (let i = firstDayofMonth; i > 0; i--) {  //creating li of prev month last days
        liTag +=`<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    
    }
    
    
    for (let i = 1; i <= lastDateofMonth; i++) {  //creating li of all days of curr month
        //adding active cls to li if the curr day year & month matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                      && currYear === new Date().getFullYear() ? "active" : "";
        liTag +=`<li class="${isToday}">${i}</li>`;
    
    }


    for (let i = lastDayofMonth; i < 6; i++) {   //creating li of last month of first days
        liTag +=`<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }




    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {   //adding click event on both icons
        //if click icon is previous icon then document current month by 1 else increment it by 1
        currMonth = icon.id ==="prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {  //if the curr month is less than 0 or greatar then 11
            //creating a new date of curr year & month & pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();  //updating curr year with new date year
            currMonth = date.getMonth();   //updating curr month with new date month
        } else {  //else pass new date as date value
            date = new Date();
        }
        renderCalendar();

    });

});

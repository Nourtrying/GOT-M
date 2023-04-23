function toggleSidebar(ref){
  document.getElementById("sidebar").classList.toggle('active');
}

const tbody = document.querySelector('tbody');
const date = new Date(2023, 3, 1); // April 2023
const today = new Date();
      console.log('im here')
// loop through week
while (date.getMonth() === 3) {
  const week = document.createElement('tr');
  tbody.appendChild(week);
        
        // loop through days in the week
        for (let i = 0; i < 7; i++) {
          const day = document.createElement('td');
          if (date.getDay() === i) {
            const dayOfMonth = date.getDate();
            day.innerText = dayOfMonth;
            week.appendChild(day);
            
            // add class for today
            if (date.toDateString() === today.toDateString()) {
              day.classList.add('today');
            }
            
            // add class for days with events (just for example purposes)
            if ([2, 6, 13, 18, 22].includes(dayOfMonth)) {
              day.classList.add('has-event');
            }
            
            // add click event listener to display event info
            day.addEventListener('click', () => {
              const eventInfo = getEventInfo(dayOfMonth);
              alert(eventInfo);
            });
            
            date.setDate(dayOfMonth + 1);
          } else {
            week.appendChild(day);
          }
        }
      }
      
      // function to get event info for a given day (just for example purposes)
      function getEventInfo(dayOfMonth) {
        let eventInfo = `Events for day ${dayOfMonth}:\n`;
        switch (dayOfMonth) {
          case 2:
            eventInfo += 'Meeting with Jane at 2pm\n';
            break;
          case 6:
            eventInfo += 'Dinner with friends at 7pm\n';
            break;
          case 13:
            eventInfo += 'Doctor appointment at 10am\n';
            break;
          case 18:
            eventInfo += 'Workout at the gym at 6am\n';
            break;
          case 22:
            eventInfo += 'Shopping trip with family at 12pm\n';
            break;
          default:
            eventInfo += 'No events scheduled.\n';
        }
        return eventInfo;
      }

      
const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;

//NOTE CHANGE HERE TO 1-4
//1=25%
//2=50%
//3=75%
//4=100%
update(2);

function update(currentActive) {
  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";

  
}

    
function toggleMenu (){
 subMenu = document.querySelector(".sub-menu-wrap");
subMenu.classList.toggle("open-menu");
}

console.log('this is clock js')

function updateClock(){
    // get the new date
    let currentTime= new Date();

    // Extract hour, minute and seconds from the date
    let currentHour= currentTime.getHours();
    let currentMinutes=currentTime.getMinutes();
    let currentseconds=currentTime.getSeconds();
    
    // pad 0 if minute or second is less than 10 (single digit)
    currentMinutes= (currentMinutes>10? "" : "0") + currentMinutes;  
    currentseconds= (currentseconds>10? "" : "0") + currentHour;      
    currentHour= (currentHour>10? "" : "0") + currentHour;       

    // convert the clock
    currentHour = ( currentHour> 12)? currentHour-12 : currentHour;
    currentHour = ( currentHour==0)? 12 : currentHour;
    
    //choose am/pm from the time of the day
    let timeofday = (currentHour < 12)? "AM": "PM";
   
   // its for the prepration of the time string
    let currentTimeStr= currentHour + ":" + currentMinutes +":"
                       + currentseconds + " " + timeofday;             

    //insert the time string inside the dom
     document.getElementById("clock").innerHTML = currentTimeStr;
}



function displayTime(){
var today = moment();
$("h2").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// "Sunday, February 14th 2010, 3:25:50 pm";}
};



setInterval(displayTime,1000);




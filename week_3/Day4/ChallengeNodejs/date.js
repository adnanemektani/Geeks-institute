// Exercise 1
function getTimeUntilJanuaryFirst() {
    var d=new Date();
    var y=d.getFullYear();
    var jan1=new Date(y+1,0,1);
if(d.getMonth()===0&&d.getDate()===1){
return"Today is January first";
}
diff=jan1-d;
days=Math.floor(diff/(1000*60*60*24));
hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
mins=Math.floor((diff%(1000*60))/60000);
return days+" days and "+hours+":"+String(mins).padStart(2,"0")+":00 hours";
}

// Exercise : Date #
function getMinutesLived(birthdate) {
    var now=new Date();
    var bd=new Date(birthdate);
    minsLiv=(now-bd)/60000;
    return"You have lived "+Math.floor(minsLiv)+" minutes";
}

// Bonus: Using prompt module
// To use: npm install prompt
// Then uncomment below:
/*
const prompt = require("prompt");
prompt.start();
prompt.get(["birthdate"], function(err, result) {
    console.log(getMinutesLived(result.birthdate));
});
*/

// Export all functions
module.exports = {getTimeUntilJanuaryFirst, getMinutesLived};


// Exercise : Date #
function getTimeUntilNextHoliday() {
    var now=new Date();
    var year=now.getFullYear();
    
    // Hardcoded holidays
    var holidays=[
        {name:"New Year",month:0,day:1},
        {name:"Independence Day",month:6,day:4},
        {name:"Christmas",month:11,day:25},
        {name:"Thanksgiving",month:10,day:28} // Approximate
    ];
    
    var nextHoliday=null;
    var minDiff=Infinity;
    
for(var i=0;i<holidays.length;i++){
var h=holidays[i];
var holDate=new Date(year,h.month,h.day);
if(holDate<=now){
holDate=new Date(year+1,h.month,h.day);
}
var diff=holDate-now;
if(diff<minDiff){
minDiff=diff;
nextHoliday=h;
}
}

days=Math.floor(minDiff/(1000*60*60*24));
hours=Math.floor((minDiff%(1000*60*60*24))/(1000*60*60));
minss=Math.floor((minDiff%(1000*60))/60000);

return"The next holiday ("+nextHoliday.name+") is in "+days+" days and "+hours+":"+String(minss).padStart(2,"0")+":00 hours";
}

// Bonus:
// Use npm install date-holidays to get actual holiday dates

module.exports = {getTimeUntilJanuaryFirst, getMinutesLived, getTimeUntilNextHoliday};

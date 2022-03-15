// 1 date to show up below Text
// 2 hours of the work day to show up
// 3 text box for user to write in
// 4 save lock box to save info 

// 1.1 pull data from api
// 1.2 have it pull todays date

// 2.1 hours from 9-5 show up on the page (in html)
// 2.2 organize them into a col on the left (in html)

// 3.1 make text box(in html)
// 3.2 make a col for text box (in html)
// 3.3 text box color changes with the time of day 
// 3.4 text does not get deleted when the page is refreshed
// 3.5 text box can be edited (in html)

// 4.1 save or lock symbol in the box (in html)
// 4.2 when clicked the text can't be deleted in the text box 


//1.2 todays date
var m = moment().format('dddd, MMMM Do');
// console.log(m.toString());

var todaysDate = document.getElementById("currentDay").innerHTML = m.toString();

//3.3 text box color changes with the time of day see classes as they have the colors in css

function textBgColor(){
    //This section of code came from source below
    var hour = $(".hour").text().trim();

    var time = moment(hour, "LT")
    console.log(time);

    $(".hour").removeClass(".present .past .future");

    if(moment().isAfter(time)){
        $(".hour").addClass("past");
    }
    else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
}
//Source https://www.codegrepper.com/code-examples/javascript/how+to+use+moment+to+compare+time+for+calendar+change+color
textBgColor();

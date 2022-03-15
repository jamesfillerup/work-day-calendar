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
    
    var timeColor = moment().hours();

    $('.time-block').each(function(){
        //it checks the id number in html
        var now = parseInt($(this).attr("id"));
//this adds class to the textarea by checking it against the id number
        if(now < timeColor){
            $(this).addClass("past");
        }
        else if (now === timeColor){
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

// 4.2 when clicked the text can't be deleted in the text box 

var saveBtn = document.querySelector(".saveBtn")

function saveText() {
// this saves the number and text to be on the original row so that tasks and numbers do not change
    var timeTask = $(this).siblings(".hour").text();
    var tasks = $(this).siblings(".task").val();
    console.log($(this));

    localStorage.setItem(timeTask, tasks);
};


// when the page is refreshed it pulls up info from storage
function refresh() {
// both hour and task have stored material and will show back up in their proper column and row
    $(".hour").each(function() {
        var currText = $(this).text();
        var taskText = localStorage.getItem(currText);

        if(taskText !== null) {
            $(this).siblings(".task").val(taskText);
        }
    });
}


// //event listeners
saveBtn.addEventListener("click", saveText);

textBgColor();
refresh();
$(document).ready(function () {

    var timeNow = moment().format("MMMM Do YYYY, h:mm a");
    $("#currentDay").html(timeNow)

    $(".saveBtn").on("click", function () {
        console.log(this);
        var chara = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, chara);
    })

    function workTracker() {

        var currentTime = moment().hour();


        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            //console.log(blockTime, currentTime)


            if (currentTime > blockTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    $("#hour8.description").val(localStorage.getItem("hour8"));
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14.description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17.description").val(localStorage.getItem("hour17"));
    
    workTracker();
})
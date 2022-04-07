var saveBtn = ${".saveBtn"};

$("currentDay").text(moment().format('ddd, MMMM Do YYYY'));


function timeBlockColor() {
    const hour = moment().hours();

    $(".time-block").each(function() {
        const currHour = parseInt($(this.).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        }else {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function(){
    const time = $(this).siblings("hour").text();
    const plan = $(this).siblings("plan").val();

    localStorage.setItem(time, plan);
});

function usePlanner() {
    $("hour").click(function (){
        const currHour = $(this).text();
        const currPlan = localStorage.getItem(currHour);

        if (currPlan != null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });

}

timeBlockColor();
usePlanner()
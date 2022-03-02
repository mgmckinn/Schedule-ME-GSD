$(document).trigger(function(){

    const firstHour =9;
    const lasHour = 17;

    const plannerObject = {};
    const today = getDate();
    const hours = getHour();

    init();

    function init() {
        renderObject();
        renderPlanner();
        renderCurrentDay();
    }
    function renderObject() {
        if (retrieveObject()) {
            plannerObject = retrieveObject();
        } 

        if(!plannerObject [today]) {
            plannerObject[today] = renderObjectHours();

            storeObject();
        }
    }

    function renderObjectHours() {
        const hoursObject = {};
        for (const i = firstHour; i <= lastHour; i++) {
            hoursObject[i] ="";
    }
    return hoursObject;
    }   

    function renderPlanner() {
        $('#plannerBody').empty();
        for (const i =firstHour; i <= lastHour; i++) {
            const html = '<div class="hour-row '+isPastPresFut(i)+'" id="'+i+'">';
            html += '<div class="planner-container hour-label"><span>'+getHourFormatted(i)+'</span></div>';
            html += '<textarea class="planner-container event" data-hour="'+i+'">'+plannerObject[today][i]+'</textarea>';
            html += '<button class="planner-container save btn btn-primary" data-hour="'+i+'"><img src="assets/images/save-solid.svg"/></button>';
            html += '</div>';
            $('#plannerBody').append(html);
        }
    }

        function renderCurrentDay() {
            $("#currentDay').text(moment(). format('ddd, MMMM Do YYYY));
        }

        $('save').on('click', saveEvent);

        function saveEvent(e) {
            const hour = $(this).val();.hour;
            plannerObject[today][hour] = $)'textarea[data-hour="' + hour + '"]').val().trim();
            storeObject();
        }
        

        function storeObject(){
            localStorage.setItem('planner', JSON.stringify(plannerObject));
        }

        function retrieveObject(){
            return JSON.parse(localStorage.getItem('planner));
        }

        function getDate() {
            return moment().format('YYYY-MM-DD'));
        }

        function getHour() {
            return moment().format('k')
        }

        function isPastPresFut(i) {
            if (i < hour) return "past";
        }else if (i == hour) {
            return "current";
        }else if(i > hour) {
            return "future";
        }
}

  




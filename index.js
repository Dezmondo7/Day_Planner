const currentDay = moment().format('dddd, MMMM Do');
const timeBlocks = [
    {hour: "9AM, time: 9"},
    {hour: "10AM, time: 10"},
    {hour: "11AM, time: 11"},
    {hour: "12PM, time: 12"},
    {hour: "1PM, time: 13"},
    {hour: "2PM, time: 14"},
    {hour: "3PM, time: 15"},
    {hour: "4PM, time: 16"},
    {hour: "5PM, time: 1"},
];

let tasks = ["", "", "", "", "", "", "", "", "",];

//function to create time blocks
function createTimeBlocks() {

    $(".container").empty();

    for (let i = 0; i < createTimeBlocks.length; i++) {
        let dailyTask = tasks[i];
        let hours = createTimeBlocks[i].hour;
        let presentHour = parseInt(moment().format("HH"));
        let currentHour = createTimeBlocks[i].time;
        let inputElStyle = "";

        if (currentHour < presentHour) {

            inputElStyle = "past";
        } else {
            inputElStyle = "future";
        }

        if (thisHour === presentHour) {
            inputElStyle = "present";
        }

        let timeBlockEL = $("<form>").attr("class", "input-group row");
        let hourContainer = $("<div>").attr("class", "col-2");
        let hourEl = $("<div>").attr("class", "hour").text(hours).css("text-align", "right");
        let inputEl = $("<textarea>").attr("class", `form-control textarea ${inputElStyle}`).attr("type", "text").attr("id", "input" + i).val(dailyTask);
        }

    }
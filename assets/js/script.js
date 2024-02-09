// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    adjustTimelineHeight();
});

// Function to adjust the height of the timeline
function adjustTimelineHeight() {
    var timeline = document.getElementById("myTimeline");
    var lastDot = timeline.querySelector(".container_t:last-child::after");

    if (lastDot) {
        var lastDotTop = lastDot.getBoundingClientRect().top;
        var timelineHeight = lastDotTop + lastDot.offsetHeight / 2;

        // Set the height of the timeline
        timeline.style.height = timelineHeight + "px";
    }
}

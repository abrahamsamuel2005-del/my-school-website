function applyForAdmission() {
    alert("Thank you for your interest in our school!");
}
function sendMessage() {
    alert("Thank you for contacting our school! We will get back to you soon.");
}
function readNews(newsType) {

    if (newsType === "resumption") {
        alert(
            "School Resumption\n\n" +
            "The new school session will begin soon. " +
            "Parents and guardians are encouraged to prepare students for resumption. " +
            "The official resumption date and other important information will be announced by the school."
        );
    }

    if (newsType === "meeting") {
        alert(
            "Parents' Meeting\n\n" +
            "Parents and guardians will be informed about the date, time and venue of the next parents' meeting. " +
            "Important academic and administrative matters will be discussed."
        );
    }

    if (newsType === "events") {
        alert(
            "Upcoming School Events\n\n" +
            "Stay updated with school examinations, competitions, celebrations, excursions and other activities taking place during the school session."
        );
    }

}
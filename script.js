function applyForAdmission() {
    alert(
        "Thank you for your interest in Triumph Heritage Academy!\n\n" +
        "The online admission application portal is not yet available. " +
        "Please contact the school for admission enquiries."
    );
}


function sendMessage() {

    const name = document.getElementById("visitor-name").value.trim();
    const email = document.getElementById("visitor-email").value.trim();
    const subject = document.getElementById("visitor-subject").value.trim();
    const message = document.getElementById("visitor-message").value.trim();

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {
        alert("Please fill in all the fields before sending your message.");
        return;
    }

    const emailSubject = encodeURIComponent(
        subject + " - Website Enquiry"
    );

    const emailBody = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" +
        message
    );

    const mailtoLink =
        "mailto:triumphheritageacademy@gmail.com" +
        "?subject=" + emailSubject +
        "&body=" + emailBody;

    window.location.href = mailtoLink;

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

    else if (newsType === "meeting") {

        alert(
            "Parents' Meeting\n\n" +
            "Parents and guardians will be informed about the date, time and venue of the next parents' meeting. " +
            "Important academic and administrative matters will be discussed."
        );

    }

    else if (newsType === "events") {

        alert(
            "Upcoming School Events\n\n" +
            "Stay updated with school examinations, competitions, celebrations, excursions and other activities taking place during the school session."
        );

    }

}


function showLoginMessage(userType) {

    alert(
        userType + " Login\n\n" +
        "The " + userType.toLowerCase() + " portal is currently under development.\n\n" +
        "Login access will be available when the school portal is ready."
    );

}
// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-images img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const overlay = document.createElement("div");

        overlay.className = "gallery-lightbox";

        overlay.innerHTML = `
            <span class="gallery-close">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function(event) {

            if (
                event.target === overlay ||
                event.target.classList.contains("gallery-close")
            ) {
                overlay.remove();
            }

        });

    });

});

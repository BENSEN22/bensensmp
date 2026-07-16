const form = document.getElementById("applicationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        message.textContent =
            "✅ Danke für deine Bewerbung! Wir melden uns nach Ablauf der Bewerbungsphase.";

        form.reset();
    } else {
        message.textContent =
            "❌ Beim Absenden ist ein Fehler aufgetreten. Bitte versuche es später erneut.";
    }
});
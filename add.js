const url = "https://experience-api-2lvv.onrender.com/";

//POST-funktionen
async function sendAPIRequest(data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`http error status: ${response.status}`);
       }
       return await response.json();
    } catch (error) {
        console.error("Fel:", error);
    }
}

//Formuläret
const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        company: document.getElementById("company").value,
        jobtitle: document.getElementById("jobtitle").value,
        location: document.getElementById("location").value,
        startdate: document.getElementById("startdate").value,
        enddate: document.getElementById("enddate").value,
        description: document.getElementById("description").value,
    };

    if (!data.company || !data.jobtitle || !data.location || !data.startdate || !data.enddate || !data.description) {
message.textContent = "Fyll i alla fält!";
return;
    }

    await sendAPIRequest(data);
    message.textContent = "Sparat!";
    form.reset();
});
const url = "http://localhost:5000/experience";

function getData() {
    fetch(url)
    .then(response => response.json())
    .then(data => writeExperience(data))
    .catch(err => console.log("Error" + err));
}

//Skriver ut data
function writeExperience(data) {
    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");

        li.textContent = item.company + " - " + item.jobtitle;

        const button = document.createElement("button");
        button.textContent = "Radera";

        button.onclick = () => deleteExperience(item.id);
        
        li.appendChild(button);
        list.appendChild(li);
    });
}

function deleteExperience(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
.then(() => getData())
.catch(err => console.log("Error" + err));
}

async function sendApiRequest(data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error" + error);
    }
}

getData();
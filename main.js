fetch("http://localhost:5000/experience")
.then(res => res.json())
.then(data => {
    const list = document.getElementById("list");

    data.forEach(item => {
        const li = document.createElement("li");

        li.textContent = item.company + " - " + item.jobtitle;

        const button = document.createElement("button");
        button.textContent = "Radera";

        button.onclick = () => {
            fetch("http://localhost:5000/experience/" + item.id, {
                method: "DELETE"
            })

            .then(() => location.reload());
        };

        li.appendChild(button);
        list.appendChild(li);
    });
});
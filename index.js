let ele = document.getElementById("container");
let input = document.getElementById("search");
let alldata = [];

// Fetch API data
async function detaills() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        alldata = data;

        displayData(data);
    } catch (error) {
        console.log("handle error", error);
    }
}
detaills();

// Function to display users
function displayData(list) {
    ele.innerHTML = ""; // clear previous data

    list.forEach(user => {
        let p = document.createElement("p");
        p.innerText = `${user.name} - ${user.username} - ${user.email}`;
        ele.appendChild(p);
    });
}

// Search functionality
input.addEventListener("input", () => {
    let text = input.value.toLowerCase();

    let filtered = alldata.filter(user =>
        user.name.toLowerCase().startsWith(text)
    );

   
    if (filtered.length === 0) {
        ele.innerHTML = "<p>No results found</p>";
        return;
    }

    displayData(filtered);
});

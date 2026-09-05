const form = document.getElementById("sevalForm");
const container = document.getElementById("sevalContainer");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const photo = document.getElementById("photo").files[0];

    const name = document.getElementById("name").value;
    const breed = document.getElementById("breed").value;
    const age = document.getElementById("age").value;
    const price = document.getElementById("price").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const phone = document.getElementById("phone").value;

    if (!photo) {
        alert("Please upload seval photo");
        return;
    }

    const imageURL = URL.createObjectURL(photo);

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <img src="${imageURL}" alt="Seval">

        <div class="card-content">

            <h3>🐓 ${name}</h3>

            <p><strong>Breed:</strong> ${breed}</p>

            <p><strong>Age:</strong> ${age}</p>

            <p class="price">₹${price}</p>

            <p><strong>Location:</strong> ${location}</p>

            <p>${description}</p>

            <a class="contact"
               href="tel:${phone}">
               📞 Contact Seller
            </a>

        </div>
    `;

    container.appendChild(card);

    form.reset();

    alert("Seval successfully added!");

    document.getElementById("listings").scrollIntoView({
        behavior: "smooth"
    });

});
function openSeval(image, name, age, weight, location, details) {

    document.getElementById("popupImage").src = image;

    document.getElementById("popupName").textContent = name;

    document.getElementById("popupAge").textContent = age;

    document.getElementById("popupWeight").textContent = weight;

    document.getElementById("popupLocation").textContent = location;

    document.getElementById("popupDetails").textContent = details;

    document.getElementById("sevalPopup").style.display = "flex";
}


function closeSeval() {

    document.getElementById("sevalPopup").style.display = "none";
}
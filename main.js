const main = document.querySelector("main");
const login_container = document.querySelector(".login-container");
const dropdown_template = document.querySelector(".dropdown_template");

const password = "BATMOBILE78"

function login() {
    const password_input = document.getElementById("password")

    if (password_input.value === password) {
        alert("Welcome, Ice_Code!");
        main.style.display = "block";
        login_container.style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
        password_input.value = "";
    }
}

function dropdown(parent) {
    const p = parent.querySelector("p");
    navigator.clipboard.writeText(p.textContent);
}

function new_dropdown(img, name, data) {
    const dropdown_element = dropdown_template.content.cloneNode(true);
    const img_element = dropdown_element.querySelector("img");
    const p = dropdown_element.querySelector("p");
    const h4 = dropdown_element.querySelector("h4");
    const a = dropdown_element.querySelector("a");

    main.querySelector(".dropdowns").appendChild(dropdown_element);
    img_element.src = `characters_images/${img}`;
    img_element.alt = name;
    a.href = `characters_images/${img}`;
    h4.textContent = name;
    p.textContent = data;
}

function create_characters(data) {
    for (const character of data) {
        let text = "";
        text += `(${character.name})`;
        for (const [key, value] of Object.entries(character)) {
            if (key !== "name" && key !== "img") {
                const key_formatted = key.charAt(0).toUpperCase() + key.slice(1);
                text += `\n\n/ ${key_formatted}: ${value}`;
            }
        }
        new_dropdown(character.img, character.name, text)
    }
}

create_characters(characters);
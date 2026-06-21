const form = document.getElementById("to-do-form");
const input = document.getElementById("input");
const list = document.getElementById("todolist");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.addEventListener("change", function () {
        li.classList.toggle("done", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);

    input.value = "";
    input.focus();
});